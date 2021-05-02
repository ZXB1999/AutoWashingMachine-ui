import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage/homepage.vue'
import order from '@/views/order/order.vue'
import thisMachine from '@/views/order/thisMachine.vue'
import mine from '@/views/account/mine.vue'
import QRcode from '../components/QRcode/QRcode.vue'
import login from '@/views/login/login.vue'
import register from '@/views/login/register.vue'
import setting from '@/views/account/setting.vue'
import historyorder from '@/views/order/historyorder.vue'
import Setout from '@/views/order/setout.vue'
import List from '@/views/MachineList/list.vue'
import MoveToMobile from '@/views/Error/MoveToMobile.vue'
import Aboutus from '@/views/aboutus/aboutus.vue'

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
      component: homepage,
      meta: {
        whitchCli: true //校验客户端
      }
    }, {
      path: '/homepage',
      name: 'homepage',
      component: homepage,
      meta: {
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/account',
      name: 'mine',
      component: mine,
      meta: {
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/code',
      name: 'QRcode',
      component: QRcode,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        whitchCli: true //校验客户端
      }
    }, {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        whitchCli: true //校验客户端
      }
    }, {
      path: '/setting',
      name: 'setting',
      component: setting,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/historyorder',
      name: 'historyorder',
      component: historyorder,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/thisMachine',
      name: 'thisMachine',
      component: thisMachine,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/setout',
      name: 'setout',
      component: Setout,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }, {
      path: '/MachineList',
      name: 'MachineList',
      component: List,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }
    , {
      path: '/MoveToMobile',
      name: 'MoveToMobile',
      component: MoveToMobile,
    }, {
      path: '/Aboutus',
      name: 'Aboutus',
      component: Aboutus,
      meta: {
        needLogin: true, //需要加校检判断的路由
        whitchCli: true  //校验客户端
      }
    }

  ]
})

