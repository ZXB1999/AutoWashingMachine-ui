<template>
  <div id="pageheader">
    <el-page-header @back="goBack" :content="pagetext"> </el-page-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagetext: "",
    };
  },
  methods: {
    goBack() {
    switch (this.$route.path) {
      case "/order":
        this.$router.push('/homepage')
        break;
      default:
        this.$router.go(-1);
    }
    },
  },
  mounted() {
    switch (this.$route.path) {
      case "/account":
        this.pagetext = "我的";
        break;
      case "/setting":
        this.pagetext = "设置";
        break;
      case "/order":
        this.pagetext = "订单";
        break;
      case "/historyorder":
        this.pagetext = "历史订单";
        break;
      case "/register":
        this.pagetext = "用户注册";
        break;
      case "/code":
        this.pagetext = "扫描二维码";
        break;
      case "/login":
        break;
      case "/thisMachine":
        this.pagetext = "创建订单";
        break;
      case "/MachineList":
        this.pagetext = "所有设备";
        break;
      case "/Aboutus":
        this.pagetext = "关于我们";
        break;
      default:
        this.pagetext = "页面信息-默认";
    }
  },
};
</script>
<style>
#pageheader {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 38px;
}
</style>