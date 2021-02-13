<template>
    <div style="height: 489px;">
        <PageHeader></PageHeader>
        <p class="error">{{ error }}<!--</p>错误信息 -->
        <h1>请扫描设备二维码</h1>
        <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
</template>

<script>

    //下载插件
    //cnpm install --save  vue-qrcode-reader

    //引入
    import { QrcodeStream } from 'vue-qrcode-reader';
    import PageHeader from '../../components/PageHeader/PageHeader.vue';
    import axios from 'axios';

    export default {

        //注册
        components: { QrcodeStream,PageHeader },

        data () {
            return {
                result: '',//扫码结果信息
                error: '',//错误信息
                info:null
            }
        },

        methods: {
            
            onDecode (result) {
                this.result = result
                const that = this
                this.$options.methods.FindMachine(result,that);
            },
            FindMachine (result,that) {
                axios.get('/FindMachineById/'+result,
                {
                    headers:{
                        'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"),//oauth2.0认证
                    }
                }
                ).then(response => {
                    that.$router.push({name: 'thisMachine',params:response.data}); //这个name对应的是路由配置的name，不是path，不要带/
                })
                .catch(function (){
                    console.log('查不到')
                })
            },



            async onInit (promise) {
                try {
                    await promise
                } catch (error) {
                    if (error.name === 'NotAllowedError') {
                        this.error = "ERROR: 您需要授予相机访问权限"
                    } else if (error.name === 'NotFoundError') {
                        this.error = "ERROR: 这个设备上没有摄像头"
                    } else if (error.name === 'NotSupportedError') {
                        this.error = "ERROR: 所需的安全上下文(HTTPS、本地主机)"
                    } else if (error.name === 'NotReadableError') {
                        this.error = "ERROR: 相机被占用"
                    } else if (error.name === 'OverconstrainedError') {
                        this.error = "ERROR: 安装摄像头不合适"
                    } else if (error.name === 'StreamApiNotSupportedError') {
                        this.error = "ERROR: 此浏览器不支持流API"
                    }
                }
            },
        }
    }
</script>

<style scoped>
.error {
    font-weight: bold;
    color: red;
}
</style>