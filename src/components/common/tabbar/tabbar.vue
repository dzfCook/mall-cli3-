<template>
  <div class="tabber">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.tabber {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
}

</style>
