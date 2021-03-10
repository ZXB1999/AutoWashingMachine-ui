<template>
  <div class="container">
    <PageHeader></PageHeader>
    <el-col :span="24"
      ><div class="orderallsty">
        <el-col :span="24"
          ><div class="uorder" v-for="(item, index) in this.data" :key="index">
            <span class="spn-sty-t"
              >下单时间:{{ item.createTime | formatDate }}</span
            ><br />
            <span class="spn-sty-t">设备编号:{{ item.machineId }}</span
            ><br />
            <div v-if="item.serverlevel === 'MIN'">
              <span class="spn-sty-t">1~2件衣物</span><br />
            </div>
            <div v-else-if="item.serverlevel === 'MID'">
              <span class="spn-sty-t">3~4件衣物</span><br />
            </div>
            <div v-else-if="item.serverlevel === 'MAX'">
              <span class="spn-sty-t">多件衣物或床单被罩</span><br />
            </div>
            <div v-else-if="item.serverlevel === 'ONE'">
              <span class="spn-sty-t">一双鞋</span><br />
            </div>
            <div v-else-if="item.serverlevel === 'TWO'">
              <span class="spn-sty-t">两双鞋</span><br />
            </div>
            <div v-else-if="item.serverlevel === 'THREE'">
              <span class="spn-sty-t">三双鞋</span><br />
            </div>
            <div v-else-if="item.serverlevel === 'FLUSH'">
              <span class="spn-sty-t">仅用来甩干脱水</span><br />
            </div>
          </div>
        </el-col></div
    ></el-col>
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader/PageHeader.vue";
import { formatDate } from "../../utils/formatDate.js";
export default {
  data() {
    return {
      data: null,
    };
  },
  created() {
    this.axios
      .get("/HistoryOrder/" + sessionStorage.getItem("userid"), {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token"),
        }, //oauth2.0认证
      })
      .then(
        (response) => ((this.data = response.data))
      );
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
.container{
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
.imgsty {
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