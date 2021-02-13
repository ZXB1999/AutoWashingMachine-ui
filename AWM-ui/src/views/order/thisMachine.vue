<template>
    <div>
        <PageHeader></PageHeader>
        <h3>{{data.brand}}</h3>
        <h3>{{data.type}}</h3>
        <h3>{{data.model}}</h3>
        <h3>{{data.delflag}}</h3>
    </div>
</template>
<script>
import PageHeader from '../../components/PageHeader/PageHeader.vue';
export default {
    data() {
      return {
          data:null
      }
    },
    // 组件实例化完毕，但页面还未显示,接收上个页面传过来的参数
    created(){
        this.data = this.$route.params
    },
    components: { PageHeader }
}
</script>