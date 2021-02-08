<template>
<div id="pageheader">
    <el-page-header @back="goBack" content="详情页面">
    </el-page-header>
</div>
  
</template>

<script>
  export default {
    methods: {
      goBack() {
        this.$router.go(-1)
        console.log('go back');
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