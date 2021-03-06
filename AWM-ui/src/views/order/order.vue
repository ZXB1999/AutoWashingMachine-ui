<template>
  <div>
    <PageHeader></PageHeader>
    <el-col :span="24"
      ><div class="orderallsty">
        进行中的订单
        <el-col :span="24"
          ><div class="uorder" v-for="(item, index) in this.data" :key="index">
            <span>{{ item.startTime }}</span
            ><br />
            <span>{{ item.machineId }}</span
            ><br />
            <span>{{ item.serverlevel }}</span
            ><br /></div
        ></el-col></div
    ></el-col>
    <span class="historyorder" @click="tohistoryorder">查看历史订单</span>
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader/PageHeader.vue";
export default {
  data() {
    return {
      data: null,
    };
  },
  components: {
    PageHeader,
  },
  methods: {
    tohistoryorder() {
      this.$router.push("/historyorder");
    },
  },
  created() {
    this.axios
      .get("/UseingOrder", {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token"),
        }, //oauth2.0认证
      })
      .then((response) => (this.data = response.data));
  },
};
</script>

<style scoped>
.el-col {
  background-color: aliceblue;
  border-radius: 4px;
}
.historyorder {
  font-weight: bold;
  top: 10px;
  position: relative;
  font-size: 9px;
  color: blueviolet;
}
.uorder {
  margin: 5px;
  background-color: #53a8ff;
  border-radius: 4px;
  min-height: 36px;
}
</style>