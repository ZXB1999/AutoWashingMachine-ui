<template>
    <div>
        <PageHeader></PageHeader>
        <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <img class="imgsty" src="../../assets/img/Machine03.png" alt="">
                <div class="machinemsg">
                    <span class="spansty">品牌:{{data.brand}}</span><br>
                    <span class="spansty">类型:{{data.type}}</span><br>
                    <span class="spansty">型号:{{data.model}}</span><br>
                </div>
                <div v-if="this.data.delflag==='0'"><el-progress :width="64" type="circle" :percentage="100" status="success"></el-progress>
                </div>
                <div v-else-if="this.data.delflag==='1'"><el-progress :width="64" type="circle" :percentage="100" status="warning"></el-progress>
                </div>
                <div v-else><el-progress :width="64" type="circle" :percentage="100" status="exception"></el-progress>
                </div>      
                        
            </div>
        </el-col>
        </el-row> 
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader/PageHeader.vue';
export default {
    data() {
      return {
          data:null
      }
    },
    // 组件实例化完毕，但页面还未显示,接收上个页面传过来的参数
    created(){
        this.data = this.$route.params
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
</style>