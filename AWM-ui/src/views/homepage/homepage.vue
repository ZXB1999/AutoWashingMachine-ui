<template>

<div id="homepage">
 
  <el-col :span="12"><div class="grid-content bg-purple" ><el-button type="primary" round @click="gotoQRcode">
    <span><img class="imgsty" src="../../assets/img/QRcode.png" alt=""></span><br><br>
    扫一扫</el-button></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple" @click="comingsoon"><el-button type="primary" round>
    <span><img class="imgsty" src="../../assets/img/Machine.png" alt=""></span><br><br>
    附近设备</el-button></div></el-col>
  <div style="height: 5rem;"></div>

  <el-col :span="24">
    <div class="grid-content bg-purple-dark">
    <div class="block">
    <span class="demonstration">欢迎使用AWM自助洗衣系统</span>
    <el-carousel height="150px">
      <el-carousel-item v-for="img in imgs" :key="img">
        <img :src="img" alt="">
      </el-carousel-item>
    </el-carousel>
    </div>
    </div>

    <div style="height: 5rem;"></div>
  </el-col>

  <el-col :span="6"><div class="grid-content bg-purple" @click="gotoList"><el-button type="primary" round >
    <span><img class="smallimgsty" src="../../assets/img/WashingMachine.png" alt=""></span><br><br>
    洗烘</el-button></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple" @click="comingsoon"><el-button type="primary" round >
    <span><img class="smallimgsty" src="../../assets/img/DrinkingMachine.png" alt=""></span><br><br>
    饮用水</el-button></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple" @click="comingsoon"><el-button type="primary" round >
    <span><img class="smallimgsty" src="../../assets/img/shower.png" alt=""></span><br><br>
    淋浴</el-button></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple" @click="comingsoon"><el-button type="primary" round >
    <span><img class="smallimgsty" src="../../assets/img/airconditioner.png" alt=""></span><br><br>
    空调</el-button></div></el-col>


  <div style="height: 30em;"></div>

</div>

</template>

<script>
export default {
  data() {
      return {
        imgs:[
          require('../../assets/homepageimg/hp0001.png'),
          require('../../assets/homepageimg/hp0002.png'),
          require('../../assets/homepageimg/hp0003.png'),
          require('../../assets/homepageimg/hp0004.png')
        ]
      }
  },
  methods:{
    gotoQRcode(){
      //指定跳转地址
      this.$router.push('/code')
    },
    gotoList(){
      //指定跳转地址
      this.$router.push('/MachineList')
    }
  }
}
</script>

<style scoped>
#homepage{
  margin-top: 60px;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .imgsty{
    width: 80px;
  }
  .demonstration{
    font-family: "微软雅黑";
    line-height: 3;
  }

  .smallimgsty{
    width: 40px;
  }
</style>