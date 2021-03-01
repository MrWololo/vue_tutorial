const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon",
      age: 34,
    };
  },
  methods: {
      changeTitle(title) {
          this.title = title;
      }
  },
});

app.mount("#app");
