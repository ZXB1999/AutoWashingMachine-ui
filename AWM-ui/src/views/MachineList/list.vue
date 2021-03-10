<!--未路由-->
<template>
  <div>
    <div class="container">
      <PageHeader></PageHeader>
      <el-col :span="24">
        <div class="orderallsty">
          <el-col :span="24">
            <div class="uorder" v-for="(item, index) in this.info" :key="index">
              <span class="spnsty">品牌:{{ item.brand }}</span><br>
              <span class="spnsty">设备型号:{{ item.model }}</span><br>
              <span class="spnsty">设备编号:{{ item.machineId }}</span><br>
              <div v-if="item.type==='1'"><span class="spnsty">洗衣机</span><br></div>
              <div v-else><span class="spnsty">洗鞋机</span><br></div>
            </div>
          </el-col>
        </div>
      </el-col>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PageHeader from "../../components/PageHeader/PageHeader.vue";
import { formatDate } from "../../utils/formatDate.js";
export default {
  name: "list",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("/MachineList", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token"),
        }, //oauth2.0认证
      })
      .then((response) => (this.info = response.data));
  },
  components: {
    PageHeader,
  },
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
    },
  },
};
</script>
<style scoped>
.container {
  height: 570px;
  padding: 0;
}
.el-col {
  position: fixed;
  top: 0;
  bottom: 0;
  height: 570px;
  margin-top: 60px;
  overflow: scroll;
  background-color: #e9e9eb;
  border-radius: 4px;
}
.uorder {
  margin: 5px;
  background-color: #ffffff;
  border-radius: 4px;
  min-height: 36px;
}
.spnsty {
  margin-left: 20px;
  float: left;
}
.ttop,
.tbuttom {
  float: left;
}
.spn-sty-t {
  margin-left: 10px;
  float: left;
}
</style>