<template>
  <div class="tabberWarp">
    <div class="warp">
      <Item
        :txt="item.txt"
        :page="item.page"
        @change="getVal"
        :sel="selected"
        v-for="(item, index) in tabbarDes"
        :key="index"
      >
        <img :src="item.normalImg" slot="normalImg" />
        <img :src="item.activeImg" slot="activeImg" />
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
import Item from "../tabbar/Item";
export default {
  props: {
    title: {
      type: String,
    }
  },
  components: {
    Item,
  },
  data: function () {
    return {
      selected: "skin",
      tabbarDes: [
        {
          txt: "首页",
          page: "homepage",
          normalImg: require("../../assets/tabbarlogo/homepage.png"),
          activeImg: require("../../assets/tabbarlogo/homepageactive.png"),
        },
        {
          txt: "订单",
          page: "order",
          normalImg: require("../../assets/tabbarlogo/order.png"),
          activeImg: require("../../assets/tabbarlogo/orderactive.png"),
        },
        {
          txt: "我的",
          page: "account",
          normalImg: require("../../assets/tabbarlogo/mine.png"),
          activeImg: require("../../assets/tabbarlogo/mineactive.png"),
        },
      ],
    };
  },
  methods: {
    getVal: function (res) {
      this.selected = res;
      console.log("===========getVal")
    },
  },
  created(){
    this.selected=this.title
    console.log("===========created")
  },
  watch: {
    title(newVal) {
      this.selected=this.title
      console.log("===========watch")
    }
  }
};
</script>
<style type="text/css">
.warp {
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0;
}
.warp img {
  width: 20px;
  height: 20px;
}
.tabberWarp img {
  margin-top: 10px;
  margin-bottom: 5px;
}
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 5px;
  background: #fff;
}
</style>