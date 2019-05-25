<template>
  <div class="h-full w-full fixed -z-2 bg-cover"/>
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
