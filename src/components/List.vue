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

<style lang="scss" scoped>
.list {
  background-color: #fff;
  user-select: none;
  box-shadow: 0 0 5px;
  text-align: center;
  font-size: 16px;
}

.list__title {
  text-align: center;
  font-weight: bold;
  padding: 8px;
}

.list__links {
}

.list__link {
  display: block;
  padding: 8px;
  color: inherit;
  text-decoration: none;

  transition: 0.2s background-color;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>
