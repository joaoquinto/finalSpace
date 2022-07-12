const vm = new Vue({
  el: "#app",
  data: {
    personagens: {},
  },
  methods: {
    fetchcharacter() {
      fetch("https://finalspaceapi.com/api/v0/character/")
        .then((response) => response.json())
        .then((body) => (this.personagens = body));
    },
    buttonToTop() {
      const root = document.querySelector("#app");
      root.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
  created() {
    this.fetchcharacter();
  },
});
