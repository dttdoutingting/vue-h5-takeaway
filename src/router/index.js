/*
路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// 路由懒加载
const Msite = () => import('@/pages/Msite/index')
const Search = () => import('@/pages/Search/index')
const Order = () => import('@/pages/Order/index')
const Profile = () => import('@/pages/Profile/index')
const Login = () => import('@/pages/Login/index')
const Shop = () => import('@/pages/Shop/index')
const ShopGoods = () => import('@/pages/Shop/ShopGoods/index.vue')
const ShopRatings = () => import('@/pages/Shop/ShopRatings/index.vue')
const ShopInfo = () => import('@/pages/Shop/ShopInfo/index.vue')

Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite, // 返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在第一次请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
