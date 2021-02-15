<template>
    <div>
        <PageHeader></PageHeader>
        <h1>新用户注册</h1>
        <div style="height: 3em;"></div>    
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <el-form-item label="账号" prop="account" label-width="90px" style="padding-right: 20px;">
            <el-input v-model.number="ruleForm.account"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass" label-width="90px" style="padding-right: 20px;">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" label-width="90px" style="padding-right: 20px;">
            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" v-loading.fullscreen.lock="fullscreenLoading">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader/PageHeader.vue';
import axios from 'axios';
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          axios.get('/IsExist/'+this.ruleForm.account)
        .then(res=>{
          if(res.data){
            return callback(new Error('账号已存在'));
          }else{
            callback();
          }
        })
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        fullscreenLoading: false,
        ruleForm: {
          pass: '',
          checkPass: '',
          account: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          account: [
            { validator: checkAccount, trigger: 'blur' }
          ]
        }
      };
    },
    components:{
        PageHeader
    },
    methods: {
      submitForm(formName) {
        let data = {"awmusername":this.ruleForm.account,"password":this.ruleForm.pass};
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('/Register',data)
            .then(res=>{
            if(res.data.msg==='注册成功'){
              this.fullscreenLoading = true;
              setTimeout(() => {
              this.fullscreenLoading = false;
              this.$router.push('/')
              }, 2000);
            }else{
              // console.log('注册失败')
            } 
          })
          } else {
            console.log('error submit!!');
            return false;
          }
        });

        
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>