<template>
  <div class="w-48 m-2 shadow-2xl bg-white text-center">
    <div class="font-bold p-2">
      {{ title }}
    </div>
    <a v-for="(link, title) in links" :key="link" :href="link" target="_blank" rel="noreferrer noopener" class="block p-2 no-underline text-gray-800 hover:bg-gray-300">
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    title: {
      type: String,
      required: true,
    },
    links: {
      type: Object,
      required: true,
    },
  },
};
</script>
