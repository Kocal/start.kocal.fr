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
