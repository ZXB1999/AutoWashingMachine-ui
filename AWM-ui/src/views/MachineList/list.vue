<!--未路由-->
<template>
    <div>
        <h1>list</h1>
        <hr>
        <!-- <p>{{info.data}}</p> -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'list',
    mounted () {
    axios
      .get('/CONSUMERMACHINE/Machine/list')
      .then(response => (this.info = response))
  },
    data () {
    return {
      info: null
    }
  }
}
</script>
<style scoped>

</style>