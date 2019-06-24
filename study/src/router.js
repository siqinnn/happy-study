import Vue from 'vue'
import Router from 'vue-router'
import Home from './App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      children: [{
          path: '/CSS_way',
          name: 'CSS_way',
          component: () => import('@/views/活动配置管理.vue')
        },
        {
          path: '/JS_way',
          name: 'JS_way',
          component: () => import('@/views/活动素材增加.vue')
        },
        {
          path: '/V_way',
          name: 'V_way',
          component: () => import('@/views/活动素材预览.vue')
        },
        {
          path: '/route_way',
          name: 'route',
          component: () => import('@/views/活动素材编辑.vue')
        },
      ]
    },



  ]
})
Vue.use(Router)