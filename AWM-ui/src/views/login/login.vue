<template>
  <div id="login">
    <PageHeader></PageHeader>
    <h1>请登陆</h1>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition"  label-width="50px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.region"></el-input>
      </el-form-item>
    </el-form>
    <slide-verify 
            :l="42"
            :r="10"
            :w="310"
            :h="155"
            @success="onSuccess();openFullScreen()"
            @fail="onFail"
            @refresh="onRefresh"
            :slider-text="text"
            :imgs="img"
            v-loading.fullscreen.lock="fullscreenLoading"
            >
      </slide-verify>
      <div>{{msg}}</div>
      <div style="height: 2em;"></div>
      <div><span class="spansty" @click="toregister">新用户？点这里</span></div>
  </div>
</template>
<script>
import axios from 'axios';
import PageHeader from '../../components/PageHeader/PageHeader.vue';
  export default {
    data() {
      return {
        img:[
          require('../../assets/slideimg/sid0001.jpg'),
          require('../../assets/slideimg/sid0002.jpg'),
          require('../../assets/slideimg/sid0003.jpg')
        ],
        msg: '',
        text: '向右滑动滑块以登陆',
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        fullscreenLoading: false
      };
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
          this.$router.push('/')
        }, 2000);
      },
        onSuccess(){
          const that=this
          if(this.formLabelAlign.name===''||this.formLabelAlign.region===''){
            alert("请输入用户名或密码")
            return
          }
          this.msg = '验证成功'
            axios.post('/Login?client_id='+"myapp"+"&client_secret="+"scma_app"+"&scope="+"all"+"&grant_type="+"password"+"&username="+this.formLabelAlign.name+"&password="+this.formLabelAlign.region)
              .then(res=>{
                if(res.status===200){
                  localStorage.clear() //清理
                  localStorage.setItem('info',1) //
                  localStorage['flag']=1
                  sessionStorage.clear()
                  sessionStorage.setItem('userid',this.formLabelAlign.name)
                  sessionStorage['access_token']=res.data.access_token
                }
              })
              .catch(function () {
                alert("用户名或密码错误")
              });
        },
        onFail(){
          this.msg = '请再试一次'
        },
        onRefresh(){
          this.msg = '机会不多哦'
        },
        toregister(){
          this.$router.push('/register')
        }
    },
    components:{
        PageHeader
    }
  }
</script>
<style scoped>
.el-input{
  width: 300px;
  right: 20px;
}
.slide-verify{
  margin: 0 auto;
}
.spansty{
  color: #409EFF;
}
</style>
 
