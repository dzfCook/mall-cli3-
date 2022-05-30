<template>
  <div id="home">
       <nav-bar class="home-nav">
           <div slot="center">
               购物车
           </div>
       </nav-bar>
      <h2>首页</h2>
  </div>
  
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  name: "home",
  components: {
    NavBar,
  },
};
</script>

<style>
.home-nav{
    background-color: lightcoral;
    color: white;
}
</style>