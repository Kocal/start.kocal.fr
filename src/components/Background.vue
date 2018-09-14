<template>
  <div class="background"/>
</template>

<script>
import { applyBackground, pickRandomBackground } from "../background";

export default {
  name: "Background",
  mounted() {
    applyBackground(pickRandomBackground(), this.$el);
  }
};
</script>

<style>
.background {
  position: fixed;
  z-index: -2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background-size: cover;
  transition: filter 0.5s linear;
}

body:hover .background {
  filter: blur(5px);
}
</style>
