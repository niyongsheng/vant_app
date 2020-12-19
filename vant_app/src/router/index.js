import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home/home'

// 重写push方法，处理相同路由跳转会报错的问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)
// 点击回退
Vue.prototype.backSpace = () => router.back(-1)

// 自动扫描 modules 里面的路由模块，路由模块请根据业务自行拆分
const files = require.context('@/router/modules', false, /\.js$/)

const routes = []
// 获取所有的路由内容
files.keys().forEach(key => {
  const file = files(key).default
  // 根据导出的内容判断是否数组，如果数组需使用扩展运算符
  if (Array.isArray(file)) {
    routes.push(...file)
  } else {
    routes.push(file)
  }
})

routes.push(
  ...[
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
        headerHidden: false,
        footShow: true,
        keepAlive: false
      }
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('@/components/me/me'),
      meta: {
        title: 'Me',
        headerHidden: false,
        footShow: true,
        keepAlive: false
      }
    },
    // 无权限页面
    {
      path: '/noPermission',
      name: 'noPermission',
      component: () => import('@/components/base/error/noPermission'),
      meta: {
        title: '访问无权限'
      }
    },
    // 404 页面路由
    {
      path: '*',
      name: '404',
      component: () => import('@/components/base/error/404'),
      meta: {
        title: 'NotFound'
      }
    }
  ]
)

const router = new VueRouter({
  routes,
  // 页面滚动行为
  scrollBehavior (/* to, from, savedPosition */) {
    return {
      x: 0,
      y: 0
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
