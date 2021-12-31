<template>
  <ul class="nav exports">
    <li v-on:click="About()">
      <b-button size="sm">About</b-button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Exports",
  data() {
    return {};
  },
  methods: {
    About() {
      console.log("About.AboutSite");
      let routeData = this.$router.resolve({
        name: "about",
      });
      window.open(routeData.href,"_blank");
    },
  },
};
</script>

<style lang="css" scoped>
@import "../assets/ToDoListStyle.css";
@import "../assets/ExportsStyle.css";
</style>
