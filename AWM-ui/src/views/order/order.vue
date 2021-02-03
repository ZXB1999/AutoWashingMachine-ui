<template>
    <div>

        <el-col :span="24"><div class="orderallsty">
            订单内容
        </div></el-col>
        <span class="historyorder">查看历史订单</span>

    </div>
</template>

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