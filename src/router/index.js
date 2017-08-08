import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './config.json'
import scroll from '@/mixins/_scroll.js'

Vue.use(VueRouter)

const routers = []

function recursionRouters (routerConfig) {
  for (let item of routerConfig) {
    if (item.src) {
      item.meta = Object.assign({}, item)
      item.component = resolve => require(['@/views/' + item.src], resolve)
      routers.push(item)
    } else if (item.children) {
      recursionRouters(item.children)
    }
  }
}

recursionRouters(routerConfig)

var router = new VueRouter({
  routes: [
    {path: '/', component: resolve => require(['@/views/index'], resolve)},
    {
      path: '/main',
      component: resolve => require(['@/views/main'], resolve),
      children: routers
    }
  ]
})

router.beforeEach((to, from, next) => {
  scroll.methods.goto()
  next()
})

export default router

export {
  routerConfig,
  routers
}