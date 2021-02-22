<template>
  <div>
    <PageHeader></PageHeader>
    <el-container>
      <el-header>
        <el-col :span="24">
          <div v-if="isonlion()">
            <div class="accsty">
              <div>
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
              <span class="fontsty">&nbsp;&nbsp;{{ userid }}</span>
            </div>
          </div>
          <div v-else>
            <div class="accsty" @click="tologin">
              <div>
                <el-avatar icon="el-icon-user-solid"></el-avatar>
              </div>
              <span class="fontsty">&nbsp;&nbsp;{{ userid }}</span>
            </div>
          </div>
        </el-col>
      </el-header>

      <el-main>
        <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <img
              class="logoimg"
              src="../../assets/accountimg/redpaper.png"
              alt=""
            />
            <span class="fontsty">红包</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>

        <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <img
              class="logoimg"
              src="../../assets/accountimg/discount.png"
              alt=""
            />
            <span class="fontsty">优惠卷</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>

        <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <img
              class="logoimg"
              src="../../assets/accountimg/receipt.png"
              alt=""
            />
            <span class="fontsty">店铺小票</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>

        <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <img
              class="logoimg"
              src="../../assets/accountimg/service.png"
              alt=""
            />
            <span class="fontsty">客服中心</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>

        <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <img
              class="logoimg"
              src="../../assets/accountimg/about.png"
              alt=""
            />
            <span class="fontsty">关于我们</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>

        <el-col :span="24"
          ><div class="accsty" @click="tosetting">
            <img
              class="logoimg"
              src="../../assets/accountimg/setting.png"
              alt=""
            />
            <span class="fontsty">设置</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-main>
    </el-container>

    <div style="height: 5em"></div>
  </div>
</template>

<script>
import PageHeader from "../../components/PageHeader/PageHeader.vue";
export default {
  data() {
    return {
      userid: "登陆/注册",
    };
  },
  methods: {
    tologin() {
      //指定跳转地址
      this.$router.push("/login");
    },
    tosetting() {
      //指定跳转地址
      this.$router.push("/setting");
    },
    isonlion() {
      if (sessionStorage.getItem("userid")) {
        this.userid = sessionStorage.getItem("userid");
        return true;
      }
      return false;
    },
  },
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
.accsty {
  margin: 0 auto;
  background-color: #f2f6fc;
  height: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.fontsty {
  float: left;
  line-height: 60px;
  text-align: center;
  margin: 0 auto;
  font-family: "Microsoft YaHei";
  font-size: 18px;
}
.el-avatar {
  margin-left: 20px;
  margin-top: 10px;
  float: left;
}
.logoimg {
  margin-top: 10px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
  float: left;
}
.el-icon-arrow-right {
  margin-top: 21.6px;
  float: right;
}
</style>