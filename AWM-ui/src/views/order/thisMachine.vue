<template>
    <div>
        <PageHeader></PageHeader>
        <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <img class="imgsty" src="../../assets/img/Machine03.png" alt="">
                <div class="machinemsg">
                    <span class="spansty">品牌:{{data.brand}}</span><br>
                    <div v-if="data.type==='1'"><span class="spansty">类型:洗衣机</span><br></div>
                    <div v-else-if="data.type==='2'"><span class="spansty">类型:洗鞋机</span><br></div>
                    <span class="spansty">型号:{{data.model|ellipsis}}</span><br>
                </div>
                <div v-if="this.state!=null">
                    <div v-if="this.state[0].state==='0'"><el-progress :width="64" type="circle" :percentage="100" status="success"></el-progress>
                </div>
                <div v-else-if="this.state[0].state==='1'"><el-progress :width="64" type="circle" :percentage="100" status="warning"></el-progress>
                </div>
                <div v-else><el-progress :width="64" type="circle" :percentage="100" status="exception"></el-progress>
                </div>
                </div>
                       
            </div>
            <span>机器编号:{{data.machineId}}</span>    
        </el-col>
        </el-row>
        <div class="state" v-for="(item,index) in state" :key="index">
         <el-row>
                <el-col :span="24">
                    <div class="grid-content-s bg-purple-dark-s">
                        <div v-if="item.serverlevel==='MIN'"><span class="spn-sty-s">1~2件衣物</span><br></div>
                        <div v-else-if="item.serverlevel==='MID'"><span class="spn-sty-s">3~4件衣物</span><br></div>
                        <div v-else-if="item.serverlevel==='MAX'"><span class="spn-sty-s">多件衣物或床单被罩</span><br></div>                        
                        <div v-else-if="item.serverlevel==='ONE'"><span class="spn-sty-s">一双鞋</span><br></div>
                        <div v-else-if="item.serverlevel==='TWO'"><span class="spn-sty-s">两双鞋</span><br></div>
                        <div v-else-if="item.serverlevel==='THREE'"><span class="spn-sty-s">三双鞋</span><br></div>                   
                        <div v-else-if="item.serverlevel==='FLUSH'"><span class="spn-sty-s">仅用来甩干脱水</span><br></div>
                        <span class="spn-sty-c">价格:<strong>{{item.cost}}</strong>￥</span><br>
                    </div>
                </el-col>
            </el-row>
        </div>



        <div class="orderbar">
        <el-divider><i class="el-icon-money"></i></el-divider>
        <el-row>
        <el-col :span="12"><div class="paymoney"><span>￥--.--</span></div></el-col>
        <el-col :span="12"><div><el-button type="danger" size="medium" round @click="comingsoon">支付</el-button></div></el-col>
        </el-row>    
        </div>     
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader/PageHeader.vue';
export default {
    data() {
      return {
          data:null,
          state:null
      }
    },

    filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 7) {
        return value.slice(0,7) + '...'
      }
      return value
    }
    },

    // 组件实例化完毕，但页面还未显示,接收上个页面传过来的参数
    created(){
        const that = this;
        this.data = this.$route.params
        this.axios.get('/FindMachineByState/'+this.data.machineId,
             {
                headers:{
                    'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"),//oauth2.0认证
                }
            }
            ).then(response => {
              that.state=response.data
            })
            .catch(function (){
                console.log('查不到')
            })
    },
    components: { PageHeader }
}
</script>
<style scoped>
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    margin: 10px;
    border-radius: 4px;
    min-height: 130px;
  }
  .bg-purple-dark {
    background: #9ccaf8;
  }
  .state{
      border-radius: 4px;
      background: #abd2f8;
      margin-left: 10px;
      margin-right: 10px;
  }
  .grid-content-s {
      margin: 4px;
    border-radius: 4px;
    min-height: 60px;
  }
  .bg-purple-dark-s {
    background: #edf2f7;
  }
  .spansty{
      float: left;
      font-family: "微软雅黑";
      color: white;
      font-size: 18px;
  }
  .spanstymsg{
      float: left;
      font-family: "微软雅黑";
      color: white;
      font-size: 9px;
  }
  .imgsty{
      float: left;
  }
  .machinemsg{
      margin-top: 20PX;
      float: left;
  }
  .el-progress{
      position: relative;
      transform: translateY(50%);
  }
  .spn-sty-s{
      float: left;
      font-size: 27px;
      color: #606266;
  }
  .spn-sty-c{
      float: right;
      font-size: 18px;
      color: #F56C6C;
  }
  .orderbar{
      position: fixed;
	  bottom: 0;
	  left: 0;
	  width: 100%;
	  padding-bottom: 5px;
	  background: #fff;
  }
  .paymoney{
      margin-top: 5px;
  }
  .el-divider{
      margin-top: 12px;
      margin-bottom: 12px;
  }
</style>