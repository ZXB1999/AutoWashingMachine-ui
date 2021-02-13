<template>
  <div id="app">

    <router-view/>
    
    <Tabbar></Tabbar>
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
  components:{
    Tabbar
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
