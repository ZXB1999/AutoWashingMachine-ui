<template>
    <div>
        <PageHeader></PageHeader>
  <el-container>
  <el-header>
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <span class="fontsty">头像</span>
      <i class="el-icon-arrow-right"></i>
      <img class="logoimg" src="../../assets/accountimg/redpaper.png" alt="">
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <span class="fontsty">昵称</span>
      <i class="el-icon-arrow-right"></i>
      <img class="logoimg" src="../../assets/accountimg/discount.png" alt="">
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="comingsoon">
      <span class="fontsty">更换手机号</span>
      <i class="el-icon-arrow-right"></i>
      <img class="logoimg" src="../../assets/accountimg/receipt.png" alt="">
      </div>
      </el-col>
      
    <el-col :span="24"><div class="accsty" @click="tologout">
      <span class="fontsty">注销</span>
      <i class="el-icon-arrow-right"></i>
      </div>
      </el-col>
  </el-header>
  <el-main>
    
      
  </el-main>
</el-container>

<div style="height: 5em;"></div>
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader/PageHeader.vue';
import axios from 'axios';
export default {
  methods:{
    tologout(){
      axios.get('/Logout/'+sessionStorage.getItem("access_token"))
      .then(res=>{
        if(!res.data.mag==='success'){
          alert(res.data.msg)
        }
        sessionStorage.clear(); 
        })
    }
  },
  components:{
    PageHeader
  }
}
</script>
<style scoped>
#app {
  margin-top: 0;
}
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
    float: right;
    margin-top: 10px;
    margin-left: 5px;
    width: 40px;
    height: 40px;
  }
  .el-icon-arrow-right{
    margin-top: 21.6px;
    float: right;
  }
</style>