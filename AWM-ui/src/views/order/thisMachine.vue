<template>
  <div>
    <PageHeader></PageHeader>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <img class="imgsty" src="../../assets/img/Machine03.png" alt="" />
          <div class="machinemsg">
            <span class="spansty">品牌:{{ data.brand }}</span
            ><br />
            <div v-if="data.type === '1'">
              <span class="spansty">类型:洗衣机</span><br />
            </div>
            <div v-else-if="data.type === '2'">
              <span class="spansty">类型:洗鞋机</span><br />
            </div>
            <span class="spansty">型号:{{ data.model | ellipsis }}</span
            ><br />
          </div>
          <div v-if="this.state != null">
            <div v-if="this.state[0].state === '0'">
              <el-progress
                :width="64"
                type="circle"
                :percentage="100"
                status="success"
              ></el-progress>
            </div>
            <div v-else-if="this.state[0].state === '1'">
              <el-progress
                :width="64"
                type="circle"
                :percentage="100"
                status="warning"
              ></el-progress>
            </div>
            <div v-else>
              <el-progress
                :width="64"
                type="circle"
                :percentage="100"
                status="exception"
              ></el-progress>
            </div>
          </div>
        </div>
        <span>机器编号:{{ data.machineId }}</span>
      </el-col>
    </el-row>

    <div v-if="this.state != null">
      <div v-if="this.state[0].state === '0'">
        <div class="state" v-for="(item, index) in state" :key="index">
          <el-row>
            <el-col :span="24">
              <el-button
                class="grid-content-s bg-purple-dark-s"
                type="primary"
                plain
                @click="pay(index)"
              >
                <div v-if="item.serverlevel === 'MIN'">
                  <span class="spn-sty-s">1~2件衣物</span><br />
                </div>
                <div v-else-if="item.serverlevel === 'MID'">
                  <span class="spn-sty-s">3~4件衣物</span><br />
                </div>
                <div v-else-if="item.serverlevel === 'MAX'">
                  <span class="spn-sty-s">多件衣物或床单被罩</span><br />
                </div>
                <div v-else-if="item.serverlevel === 'ONE'">
                  <span class="spn-sty-s">一双鞋</span><br />
                </div>
                <div v-else-if="item.serverlevel === 'TWO'">
                  <span class="spn-sty-s">两双鞋</span><br />
                </div>
                <div v-else-if="item.serverlevel === 'THREE'">
                  <span class="spn-sty-s">三双鞋</span><br />
                </div>
                <div v-else-if="item.serverlevel === 'FLUSH'">
                  <span class="spn-sty-s">仅用来甩干脱水</span><br />
                </div>
                <span class="spn-sty-c"
                  >价格:<strong>{{ item.cost }}</strong
                  >￥</span
                ><br />
              </el-button>
            </el-col>
          </el-row>
        </div>
      </div>

      <div v-else-if="this.state[0].state === '1'">
        <div class="using">
          <el-steps :active="1" simple>
            <el-step title="步骤 1" icon="el-icon-edit"></el-step>
            <el-step title="步骤 2" icon="el-icon-upload"></el-step>
            <el-step title="步骤 3" icon="el-icon-picture"></el-step>
          </el-steps>
          <h4>设备运行中</h4>
          <div style="height: 5rem"></div>
          <img src="../../assets/img/useing.png" alt="" />\
          <div style="height: 2rem"></div>
        </div>
        <div class="bug"></div>
      </div>

      <div v-else>
        <div class="using">
          <h3>设备正在维护中</h3>
          <img src="../../assets/maintain.png" alt="" />
        </div>
      </div>
    </div>

    <div class="orderbar">
      <el-divider><i class="el-icon-money"></i></el-divider>
      <el-row>
        <el-col :span="12"
          ><div class="paymoney">
            <span>订单金额:￥{{ price }}</span>
          </div></el-col
        >
        <el-col :span="12"
          ><div>
            <el-button
              type="danger"
              size="medium"
              round
              @click="Paytool"
              :disabled="this.disabled"
              >支付</el-button
            >
          </div></el-col
        >
      </el-row>
    </div>

    <section class="pay-mask" v-show="this.mypayshow">
      <div class="container">
        <div class="pay_title">请输入支付密码</div>
        <div class="flex f-d-r pay_content">
          <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
          <div class="ipt_pay">
            <input type="password" maxlength="1" disabled />
          </div>
          <div class="ipt_pay">
            <input type="password" maxlength="1" disabled />
          </div>
          <div class="ipt_pay">
            <input type="password" maxlength="1" disabled />
          </div>
          <div class="ipt_pay">
            <input type="password" maxlength="1" disabled />
          </div>
          <div class="ipt_pay">
            <input type="password" maxlength="1" disabled />
          </div>
          <div class="ipt_pay">
            <input type="password" maxlength="1" disabled />
          </div>
        </div>
      </div>
      <footer>
        <ul class="pay_btn">
          <li @click="btnpassword($event)">1</li>
          <li @click="btnpassword($event)">2</li>
          <li @click="btnpassword($event)">3</li>
          <li @click="btnpassword($event)">4</li>
          <li @click="btnpassword($event)">5</li>
          <li @click="btnpassword($event)">6</li>
          <li @click="btnpassword($event)">7</li>
          <li @click="btnpassword($event)">8</li>
          <li @click="btnpassword($event)">9</li>
          <li class="b9" @click="back">返回</li>
          <li @click="btnpassword($event)">0</li>
          <li class="b9" @click="btndelete">删除</li>
        </ul>
      </footer>
    </section>
  </div>
</template>
<script>
import PageHeader from "../../components/PageHeader/PageHeader.vue";
export default {
  props: {
    payshow: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    $(".ipt_pay input:first").focus();
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
  data() {
    return {
      index: -1,
      data: null,
      state: null,
      disabled: true,
      price: "--.--",
      ordermsg: null,
      mypayshow: this.payshow,
      pwdflg: 5,
      gettime: "",
    };
  },
  watch: {
    pwdflg() {
      if (this.pwdflg === 0) {
        this.mypayshow = false;
      }
    },
    mypayshow() {
      // console.log('mypayshow变化了')
    },
  },

  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 7) {
        return value.slice(0, 7) + "...";
      }
      return value;
    },
  },
  methods: {
    pay(index) {
      this.disabled = false;
      this.price = this.state[index].cost;
      this.ordermsg = this.state[index];
    },
    Paytool() {
      if (this.pwdflg <= 0) {
        alert("本次支付已冻结");
      } else {
        this.mypayshow = true;
      }
    },
    btnpassword(e) {
      var obj = e.currentTarget;
      var payinput = $(".ipt_pay input");
      if (this.index < 5) {
        this.index++;
        $(payinput[this.index]).val($(obj).text());
      }
      if (this.index == 5) {
        var pay_pwd = "";
        var payinput = $(".ipt_pay input");
        for (var i = 0; i < payinput.length; i++) {
          pay_pwd += $(payinput[i]).val();
        }
        let data = {
          awmusername: sessionStorage.getItem("userid"),
          paypwd: pay_pwd,
        };
        this.axios
          .post("/Examine", data, {
            headers: {
              Authorization: "Bearer " + sessionStorage.getItem("access_token"),
            }, //oauth2.0认证
          })
          .then((response) => {
            if (response.data === true) {
              this.pwdflg = 5;

              this.$alert("密码正确", "提示", {
                confirmButtonText: "确定",
                customClass: "winClass", //弹窗样式,style标签不能带scope
                callback: (action) => {
                  
                },
              });

              this.$router.push({
                name: "setout",
                params: {
                  machineId: this.data.machineId,
                  serverlevel: this.ordermsg.serverlevel,
                  starttime: this.gettime,
                },
              });

              // this.$router.push("/order");
            } else {
              alert("密码错误,还有" + this.pwdflg + "次机会");
              $(".ipt_pay input").val("");
              this.index = -1;
              this.pwdflg -= 1;
            }
          })
          .catch(function () {
            console.log("错误");
          });
      }
    },
    btndelete() {
      var payinput = $(".ipt_pay input");
      if (this.index >= 0) {
        $(payinput[this.index]).val("");
        this.index--;
      }
    },
    back() {
      this.mypayshow = false;
    },
  },

  // 组件实例化完毕，但页面还未显示,接收上个页面传过来的参数
  created() {
    const that = this;
    this.data = this.$route.params;
    this.order_token = sessionStorage.getItem("order_token");
    this.axios
      .get("/FindMachineByState/" + this.data.machineId, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("access_token"), //oauth2.0认证
        },
      })
      .then((response) => {
        that.state = response.data;
      })
      .catch(function () {
        console.log("查不到");
      });
  },
  components: { PageHeader },
};
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
.state {
  border-radius: 4px;
  background: #abd2f8;
  margin-left: 10px;
  margin-right: 10px;
}
.grid-content-s {
  width: 98%;
  margin: 4px;
  border-radius: 4px;
  min-height: 60px;
}
.bg-purple-dark-s {
  background: #edf2f7;
}
.spansty {
  float: left;
  font-family: "微软雅黑";
  color: white;
  font-size: 18px;
}
.spanstymsg {
  float: left;
  font-family: "微软雅黑";
  color: white;
  font-size: 9px;
}
.imgsty {
  float: left;
}
.machinemsg {
  margin-top: 20px;
  float: left;
}
.el-progress {
  position: relative;
  transform: translateY(50%);
}
.spn-sty-s {
  float: left;
  font-size: 27px;
  color: #606266;
}
.spn-sty-c {
  float: right;
  font-size: 18px;
  color: #f56c6c;
}
.orderbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 5px;
  background: #fff;
}
.paymoney {
  margin-top: 5px;
}
.el-divider {
  margin-top: 12px;
  margin-bottom: 12px;
}
.using {
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #faecd8;
}
.bug {
  float: right;
  width: 10px;
  height: 100px;
  position: relative;
  background-color: white;
  bottom: 180px;
  z-index: 2;
}
.el-steps {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 6px;
  padding-top: 6px;
}
section {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: rgba(0, 0, 0, 0.6);
}
.container {
  height: 150px;
  position: absolute;
  top: 4rem;
  background: #fff;
  border-radius: 5px;
  margin: 0;
}
.pay_title {
  margin-top: 10px;
  position: relative;
  font-size: 18px;
  text-align: center;
  color: #333;
  height: 1.333333rem;
  line-height: 1.333333rem;
}
.close {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  width: 0.72rem;
  height: 0.72rem;
}
.pay_content {
  margin: 0.533333rem 0.533333rem 0.333333rem 0.533333rem;
}
.ipt_pay {
  float: left;
  width: 16.6%;
  height: 54px;
  border: 1px solid #ddd;
}
.ipt_pay input {
  border: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 30px;
  background: #fff;
}
footer {
  position: absolute;
  bottom: 40px;
  top: 400px;
  width: 100%;
  font-weight: 600;
}
.pay_btn {
  padding: 0;
  list-style: none;
  width: 100%;
  height: 100%;
}
.pay_btn li {
  width: 33.3333%;
  float: left;
  height: 56px;
  line-height: 56px;
  text-align: center;
  background: #fff;
  font-size: 30px;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.pay_btn li:active {
  background: #c2c2c2;
}
.b9:active {
  background: #fff !important;
}
.b9 {
  background: #c2c2c2 !important;
}
</style>
<style>
.winClass {
  width: 300px;
}
</style>