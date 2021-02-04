<template>
  <div>
    <h1>请登陆</h1>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="50px" :model="formLabelAlign">
      <el-form-item label="账号">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formLabelAlign.region"></el-input>
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
  </div>
</template>
<script>
  export default {
    data() {
      return {
        img:[
          require('../../assets/slideimg/sid0001.jpg'),
          require('../../assets/slideimg/sid0002.jpg'),
          require('../../assets/slideimg/sid0003.jpg')
        ],
        msg: '',
        text: '向右滑',
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
            this.msg = 'login success'
        },
        onFail(){
            this.msg = ''
        },
        onRefresh(){
            this.msg = ''
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
 
