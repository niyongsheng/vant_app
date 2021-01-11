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

const routes = []

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
    {
      path: '/loadMore',
      name: 'loadMore',
      component: () => import('@/components/me/loadMore'),
      meta: {
        title: 'loadMore',
        headerHidden: false,
        footShow: false,
        keepAlive: false
      }
    },
    {
      path: '/redPackList',
      name: 'redPackList',
      component: () => import('@/components/me/redPackList'),
      meta: {
        title: 'redPackList',
        headerHidden: false,
        footShow: false,
        keepAlive: false
      }
    },
    {
      path: '/luckywheel',
      name: 'luckywheel',
      component: () => import('@/components/me/luckywheel'),
      meta: {
        title: 'luckywheel',
        headerHidden: false,
        footShow: false,
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
