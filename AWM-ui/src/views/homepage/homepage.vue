<template>

<div>
 
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
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </div>
    </div>

    <div style="height: 5rem;"></div>
  </el-col>

  <el-col :span="6"><div class="grid-content bg-purple" @click="comingsoon"><el-button type="primary" round >
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
  methods:{
    gotoQRcode(){
      //指定跳转地址
      this.$router.push('/code')
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
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