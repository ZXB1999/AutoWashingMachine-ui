<template>
    <div>
        <p class="error">{{ error }}</p><!--错误信息-->
        <!--扫描结果-->
        <!-- <p class="decode-result">扫描结果: <b>{{ result }}</b></p> -->

        <button @click="FindMachine">查询</button>
        <!-- <p>扫描结果: <b>{{ info }}</b></p> -->
        <!-- <p>扫描结果: <b v-if="info!=null">{{ info.data }}</b></p> -->
        <p>品牌: <b v-if="info!=null">{{ info.data.brand }}</b></p>
        <p>类型: <b v-if="info!=null">{{ info.data.type }}</b></p>
        <p>编号: <b v-if="info!=null">{{ info.data.model }}</b></p>
        <p>是否可见: <b v-if="info!=null">{{ info.data.delflag }}</b></p>

        <qrcode-stream @decode="onDecode" @init="onInit" />
    </div>
</template>

<script>

    //下载插件
    //cnpm install --save  vue-qrcode-reader

    //引入
    import { QrcodeStream } from 'vue-qrcode-reader';
    import axios from 'axios';

    export default {

        //注册
        components: { QrcodeStream },

        data () {
            return {
                result: '',//扫码结果信息
                error: '',//错误信息
                info: null
            }
        },

        methods: {
            
            onDecode (result) {;
                console.log(result);
                this.result = result
            },
            FindMachine () {
                axios.get('/FindMachineById/'+this.result,
                {
                    headers:{
                        'Authorization': 'Bearer ' + sessionStorage.getItem("access_token"),
                    }
                }
                ).then(response => (this.info = response))
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
            }
        }
    }
</script>

<style scoped>
    .error {
        font-weight: bold;
        color: red;
    }
</style>