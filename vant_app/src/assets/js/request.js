import axios from 'axios'
let mockMatch
// 正式环境不需要使用mock
if (process.env.NODE_ENV === 'development') {
  mockMatch = require('@/mock').default
}

// TODO: 请求基础路径，根据项目进行配置,并添加代理
const baseURL = '/api'

// mock请求代理
const mockURL = '/mock'

const instance = axios.create({
  baseURL,
  // 超时时间 16 秒
  timeout: 16000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器 添加token， 判断登录之类操作
instance.interceptors.request.use(
  config => {
    if (process.env.NODE_ENV === 'development') {
      const url = config.url
      if (mockMatch(url)) {
        config.baseURL = mockURL
      }
    }
    // 在这里做认证，可以从store里面获取token
    // config.headers['Authorization'] = `Bearer ${store.getters.getAccessToken}`

    // 如果get  请求有缓存，可以加这段代码
    if (config.method === 'get') {
      const now = `${Date.now()}`
      if (config.params) {
        config.params[now] = now
      } else {
        const hasParams = config.url.includes('?')
        config.url = config.url + (hasParams ? '&' : '?') + `${now}=${now}`
      }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器，对返回数据进行预处理
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 对 请求进行封装 只有 status 与 code 都是200 才会进入 then , 否则均进入 catch
 * @param {*} options
 */
const request = (options = {}) => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(({ data, status, statusText }) => {
        if (status === 200) {
          resolve(data)
        } else {
          reject(statusText)
        }
      })
      .catch(result => {
        if (!result || !result.response) {
          reject(result)
        }
        const {
          response: { status, statusText, data = {} }
        } = result
        switch (status) {
          // 未登录
          case 401:
            sessionStorage.clear()
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('您还未登录')
            break
          case 403:
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('登录失效')
            break
          case 404:
            // eslint-disable-next-line prefer-promise-reject-errors
            reject('访问异常404')
            // 请求丢失
            break
          default:
            reject(data.message || statusText)
            break
        }
      })
  })
}

const get = (url, params = {}) => {
  return request({
    url,
    method: 'get',
    params
  })
}

const put = (url, data = {}) => {
  return request({
    url,
    method: 'put',
    data
  })
}

const post = (url, data = {}) => {
  return request({
    url,
    method: 'post',
    data
  })
}

const del = (url, data = {}) => {
  return request({
    url,
    method: 'delete',
    data
  })
}
// 将获取cancelToken的方法绑定到每个方法上面，方便调用的时候使用
;[request, get, post, put, del, instance].forEach(item => {
  item.getCancelToken = () => {
    return axios.CancelToken
  }
})

export { request, get, post, put, del, instance as axios, baseURL }
