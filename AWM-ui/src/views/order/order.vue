<template>
    <div>
        <PageHeader></PageHeader>
        <el-col :span="24"><div class="orderallsty">
            订单内容
        </div></el-col>
        <span class="historyorder" @click="tohistoryorder">查看历史订单</span>

    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader/PageHeader.vue';
export default {
    components:{
        PageHeader
    },
    methods:{
        tohistoryorder(){
          this.$router.push('/historyorder')
        }
    }
}
</script>

<style scoped>
.el-col {
    height: 300px;
    background-color: aliceblue;
    border-radius: 4px;
  }
  .historyorder{
      font-weight:bold;
      top: 10px;
      position: relative;
      font-size: 9px;
      color: blueviolet;
  }
</style>