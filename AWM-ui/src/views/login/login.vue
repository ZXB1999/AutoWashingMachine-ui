<template>
  <div>
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
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
            :slider-text="text"
            :imgs="img"
            >
      </slide-verify>
      <div>{{msg}}</div>
      <div style="height: 2em;"></div>
      <div><span @click="comingsoon">新用户？点这里</span></div>
  </div>
</template>
<script>
import axios from 'axios';
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
        }
      };
    },
    methods: {
        onSuccess(){
            this.msg = '验证成功'
            axios.post('/Login?client_id='+"myapp"+"&client_secret="+"scma_app"+"&scope="+"all"+"&grant_type="+"password"+"&username="+this.formLabelAlign.name+"&password="+this.formLabelAlign.region)
                 .then(res=>{
                   if(res.data.msg===undefined){
                     localStorage.clear() //清理
                     localStorage.setItem('info',1) //
                     localStorage['flag']=1
                     sessionStorage.clear()
                    //  sessionStorage.setItem('userid',res.data.username)
                     sessionStorage['access_token']=JSON.stringify(res.data.access_token)
                     this.$router.go(-1)
                   }else{
                     alert(res.data.msg)
                     this.$router.push('/')
                   }
                   })
        },
        onFail(){
            this.msg = '请再试一次'
        },
        onRefresh(){
            this.msg = '机会不多哦'
        }
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
</style>
 
