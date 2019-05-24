<template>
  <div class="list">
    <div class="list__title">
      {{ title }}
    </div>
    <div class="list__links">
      <a
        v-for="(link, title) in links"
        :key="link"
        :href="link"
        class="list__link"
        target="_blank"
        rel="noreferrer noopener"
      >
        {{ title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    title: {
      type: String,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  }
};
</script>
