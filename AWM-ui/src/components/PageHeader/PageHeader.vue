<template>
<div id="pageheader">
    <el-page-header @back="goBack"  :content="pagetext">
    </el-page-header>
</div>
  
</template>

<script>
  export default {
    data() {
    return{
      pagetext:''
    };
  },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    mounted(){
      switch(this.$route.path) {
     case '/account':
        this.pagetext='我的'
        break;
     case '/setting':
        this.pagetext='设置'
        break;
     case '/order':
        this.pagetext='订单'
        break;
    case '/register':
        this.pagetext='用户注册'
        break;
     default:
        this.pagetext='页面信息-默认'
} 
    } 
  }
</script>

<style>
#pageheader{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>