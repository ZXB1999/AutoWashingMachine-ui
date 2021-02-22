<template>
  <div>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content">
          <h1><p>注意事项</p></h1>
          <h3><p align="left">1.请确保衣物(鞋子)口袋中没有杂物</p></h3>
          <h3><p align="left">2.请确保衣物(鞋子)全部放入洗衣机</p></h3>
          <h3><p align="left">3.请确保添加好了洗衣粉(液)</p></h3>
          <h3><p align="left">4.点击开始洗衣</p></h3>
        </div></el-col
      >
    </el-row>
    <span>5分钟后自动开始洗衣</span><br />
    <el-button @click="toorder" type="danger" round>开始洗衣</el-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      machineId: "",
      serverlevel: "",
      creattime: "",
      awmuser: "",
      gettime: "",
    };
  },
  methods: {
    toorder() {
      const that = this
      let odrmsg = {
        awmuser: this.awmuser,
        machineId: this.machineId,
        serverlevel: this.serverlevel,
        creattime: this.creattime,
        starttime: this.gettime,
      };
      axios
        .post("/CreatOrder", odrmsg, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("access_token"),
          }, //oauth2.0认证
        })
        .then((response) => {
          that.$router.push("/order");
        });
    },
  },
  mounted: function () {
    var _this = this;
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth() + 1;
    let dd = new Date().getDate();
    let hh = new Date().getHours();
    let mf =
      new Date().getMinutes() < 10
        ? "0" + new Date().getMinutes()
        : new Date().getMinutes();
    let ss =
      new Date().getSeconds() < 10
        ? "0" + new Date().getSeconds()
        : new Date().getSeconds();
    _this.gettime = yy + "-" + mm + "-" + dd + " " + hh + ":" + mf + ":" + ss;
  },

  created() {
    this.awmuser = sessionStorage.getItem("userid");
    this.machineId = this.$route.params.machineId;
    this.serverlevel = this.$route.params.serverlevel;
    this.creattime = this.$route.params.starttime;
  },
};
</script>
<style scoped>
.grid-content {
  margin-top: 30px;
  height: 400px;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #e1f3d8;
}
.el-button {
  height: 40px;
  width: 200px;
}
</style>