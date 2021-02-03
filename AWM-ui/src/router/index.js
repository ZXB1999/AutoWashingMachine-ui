import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage/homepage.vue'
import order from '@/views/order/order.vue'
import mine from '@/views/account/mine.vue'
import QRcode from '../components/QRcode/QRcode.vue'
Vue.use(Router)

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  //打包时带着个会找不到资源
  // mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: homepage
    },{
      path: '/homepage',
      name: 'homepage',
      component: homepage
    },{
      path: '/order',
      name: 'order',
      component: order
    },{
      path: '/account',
      name: 'mine',
      component: mine
    },{
      path: '/code',
      name: 'QRcode',
      component: QRcode
    }
  ]
})
