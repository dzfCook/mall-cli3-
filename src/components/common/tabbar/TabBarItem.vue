<template>
  <div class="tabbarItem" @click="itemClick">
    <slot name="item-icon" v-if="!isActive"></slot>
    <slot name="item-icon-active" v-else></slot>
    <div :style="Color">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbarItem",
  data() {
    return {
      
    };
  },
  props: {
    path: String,
    activeColor: String,
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    Color() {
      return this.isActive? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      return this.$router.replace(this.path);
    },
  },
};
</script>

<style scoped>
.tabbarItem img {
  width: 24px;
  height: 24px;
  vertical-align: center;
}
</style>
