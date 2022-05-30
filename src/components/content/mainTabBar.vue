<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">

      <img slot="item-icon" src="~assets/img/tabbar/1.首页.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/2.首页.png"
        alt=""
      />
      <div slot="item-text">首页</div>

    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/1.分类.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/2.分类.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/1.购物车空.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/2.购物车空.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/mine" activeColor="blue">
      <img slot="item-icon" src="~assets/img/tabbar/1.我的.png" alt="" />
      <img
        slot="item-icon-active"
        src="~assets/img/tabbar/2.我的.png"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template> 

<script>
import TabBar from "components/common/tabbar/tabbar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "mainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>