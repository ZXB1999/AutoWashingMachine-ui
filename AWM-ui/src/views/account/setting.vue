<template>
  <div>
    <PageHeader></PageHeader>
    <el-container>
      <el-header>
        <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <span class="fontsty">头像</span>
            <i class="el-icon-arrow-right"></i>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
          </div>
        </el-col>

        <!-- <el-col :span="24"
          ><div class="accsty" @click="comingsoon">
            <span class="fontsty">昵称</span>
            <i class="el-icon-arrow-right"></i>
            <span class="spansty">这里会显示用户昵称</span>
          </div>
        </el-col> -->

        <el-col :span="24"
          ><div class="accsty" @click="uptphonenumber">
            <span class="fontsty">更换手机号</span>
            <i class="el-icon-arrow-right"></i>
            <span class="spansty">{{ phone }}</span>
          </div>
        </el-col>

        <el-dialog title="更换手机号" :visible.sync="delflagone" width="380px">
          <el-form :model="form">
            <el-form-item label="新手机号" :label-width="formLabelWidth">
              <el-input maxlength="11" minlength="11" show-word-limit v-model="form.phone" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="delflagone = false">取 消</el-button>
            <el-button type="primary" :disabled="isbut" @click="commituptphonenumber"
              >确 定</el-button
            >
          </div>
        </el-dialog>

        <el-col :span="24"
          ><div
            class="accsty"
            @click="
              tologout();
              openFullScreen();
            "
            v-loading.fullscreen.lock="fullscreenLoading"
          >
            <span class="fontsty">退出登陆</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </el-col>
      </el-header>
    </el-container>

    <div style="height: 5em"></div>
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader/PageHeader.vue";
import axios from "axios";
export default {
  watch: {
    
  },
  data() {
    return {
      fullscreenLoading: false,
      userid: "",
      phone: "这里会显示用户手机号",
      delflagone: false,
      form: {
        phone: "",
      },
      formLabelWidth: "80px",
      isbut: false
    };
  },
  created() {
    var id = this.$route.params.UserId;
    this.userid = id;

    axios
      .post(
        "/UserMsg/" + id,
        {},
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("access_token"),
          }, //oauth2.0认证)
        }
      )
      .then((res) => {
        if (res.data.phonenum !== null) {
          this.phone = res.data.phonenum;
          this.form.phone=res.data.phonenum;
        }
      });
  },
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
        this.$router.push("/");
      }, 2000);
    },
    tologout() {
      axios
        .get("/Logout/" + sessionStorage.getItem("access_token"))
        .then((res) => {
          if (!res.data.mag === "success") {
            alert(res.data.msg);
          }
          sessionStorage.clear();
        });
    },
    uptphonenumber() {
      this.delflagone = true;
    },
    commituptphonenumber() {
      axios
      .post(
        "/UptPhone/" + this.userid,
        {
          "phonenumber":this.form.phone
        },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("access_token"),
          }, //oauth2.0认证)
        }
      )
      .then((res) => {
        if (res.data.phonenum !== null) {
          this.delflagone = false;
          this.phone=this.form.phone
        }
      });
    },
  },
  components: {
    PageHeader,
  },
};
</script>
<style scoped>
#app {
  margin-top: 0;
}
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
  float: right;
  margin-top: 10px;
  margin-left: 5px;
  width: 40px;
  height: 40px;
}
.el-icon-arrow-right {
  margin-top: 21.6px;
  float: right;
}
.spansty {
  float: right;
  line-height: 60px;
  text-align: center;
  font-size: 15px;
}
.el-avatar {
  float: right;
}
</style>