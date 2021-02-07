// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {comingsoon} from './utils/common.js';
import SlideVerify from 'vue-monoplasty-slide-verify';
import Vuex from "vuex"

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
Vue.use(SlideVerify);
Vue.use(Vuex);
Vue.config.productionTip = false
Vue.prototype.comingsoon=comingsoon
Vue.prototype.axios = axios
Vue.prototype.$=$

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})

//配合路由中的meta进行登陆验证
router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    //页面是否登录
    if (sessionStorage.getItem("access_token")&&sessionStorage.getItem("access_token")!='undefined') {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      //next可以传递一个路由对象作为参数 表示需要跳转到的页面
      next({
        name: "login"
      });
    }
  } else {
    //表示不需要登录
    next(); //继续往后走
  }
});
