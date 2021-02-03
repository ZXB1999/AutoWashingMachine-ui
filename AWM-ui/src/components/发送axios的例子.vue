<!--无路由-->
<template>
    <div>
        <h1>test</h1>
        <p>
            <input id="inid" type="text" >
        </p>
        <hr>
        <p>{{info.data.awmuserId}}</p>
        <p>{{info.data.awmusername}}</p>
    </div>
</template>
<script>
import axios from 'axios';
 var id = '06224990622811ebaace509a4ccf4b2c';

export default {
    name: 'test',
    mounted () {
    axios
      .get('/CONSUMERUSER/'+id)
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