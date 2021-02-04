<template>
<div>
<el-container>
  <el-header>
    <el-col :span="24">
      <div class="accsty" @click="tologin">
      <div>
       <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <span class="fontsty">&nbsp;&nbsp;登陆/注册</span> 
      </div>
      </el-col>
  </el-header>
  <el-main>
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <img class="logoimg" src="../../assets/accountimg/redpaper.png" alt="">
      <span class="fontsty">红包</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <img class="logoimg" src="../../assets/accountimg/discount.png" alt="">
      <span class="fontsty">优惠卷</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <img class="logoimg" src="../../assets/accountimg/receipt.png" alt="">
      <span class="fontsty">店铺小票</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <img class="logoimg" src="../../assets/accountimg/service.png" alt="">
      <span class="fontsty">客服中心</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <img class="logoimg" src="../../assets/accountimg/about.png" alt="">
      <span class="fontsty">关于我们</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <img class="logoimg" src="../../assets/accountimg/setting.png" alt="">
      <span class="fontsty">设置</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
      
  </el-main>
</el-container>

<div style="height: 5em;"></div>

</div>
  
</template>

<script>
export default {
  methods:{
    tologin(){
      //指定跳转地址
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .accsty{
    margin: 0 auto;
    background-color:#F2F6FC;
    height: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .fontsty{
    float: left;
    line-height: 60px;
    text-align: center;
    margin: 0 auto;
    font-family:"Microsoft YaHei";
    font-size: 18px;
  }
  .el-avatar{
    margin-left: 20px;
    margin-top: 10px;
    float: left;
  }
  .logoimg{
    margin-top: 10px;
    margin-left: 5px;
    width: 40px;
    height: 40px;
    float: left;
  }
  .el-icon-arrow-right{
    margin-top: 21.6px;
    float: right;
  }

</style>