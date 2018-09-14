<template>
  <div id="app">
    <background/>
    <overlay/>
    <list
      v-for="(links, title) in shortcuts"
      :key="title"
      :title="title"
      :links="links"
    />
  </div>
</template>

<script>
import List from "./components/List";
import Background from "./components/Background";
import Overlay from "./components/Overlay";

export default {
  name: "app",
  components: {
    List,
    Background,
    Overlay
  },
  data() {
    return {
      shortcuts: {
        internet: {
          twitter: "https://twitter.com",
          youtube: "https://www.youtube.com",
          twitch: "http://www.twitch.tv/",
          hiddenlol: "http://hiddenlol.com",
          hugelol: "http://hugelol.com"
        },
        tech: {
          korben: "https://korben.info",
          developpez: "http://www.developpez.com",
          numerama: "http://www.numerama.com"
        },
        mail: {
          outlook: "https://outlook.com",
          gmail: "https://gmail.com"
        },
        "4chan": {
          "/a/": "https://boards.4chan.org/a",
          "/b/": "https://boards.4chan.org/b",
          "/g/": "https://boards.4chan.org/g",
          "/pol/": "https://boards.4chan.org/pol"
        },
        reddit: {
          "/r/programmerhumor": "https://www.reddit.com/r/programmerhumor",
          "/r/talesfromtechsupport":
            "https://www.reddit.com/r/talesfromtechsupport",
          "/r/techsupportgore": "https://www.reddit.com/r/techsupportgore/",
          "/r/badcode": "https://www.reddit.com/r/badcode/",
          "/r/laravel": "https://www.reddit.com/r/laravel/",
          "/r/vuejs": "https://www.reddit.com/r/vuejs/",
          "/r/lolphp": "https://www.reddit.com/r/lolphp/"
        }
      }
    };
  }
};
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0;
  line-height: 1.6;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  height: 100vh;
  width: 100%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-columns: minmax(50px, auto);
  grid-gap: 16px;
}

.list {
  /*flex: 1;*/
}
</style>
