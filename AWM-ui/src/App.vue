<template>
  <div id="app">

    <router-view/>
    <div v-if="TabbarShow"><Tabbar></Tabbar></div>
  </div>
</template>

<script>
import Tabbar from'../src/components/tabbar/Tabbar'

$(function () {
    console.log('欢迎使用AWM自助洗衣系统')
  });
  
export default {
  name: 'App',
  created:function(){
    this.$router.push('/')
  },
  data() {
    return {
      TabbarShow: true
    };
  },
  components:{
    Tabbar
  },
  watch: {
    $route(to, from) {
      switch(this.$route.path){
        case '/thisMachine':
          this.TabbarShow=false;
          break;
        case '/login':
          this.TabbarShow=false;
          break;
        case '/register':
          this.TabbarShow=false;
          break;
        default:
          this.TabbarShow=true;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
