<template>
  <ul class="nav exports">
    <li v-on:click="ExportJson()">
      <b-button size="sm">JSON</b-button>
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
    ExportJson() {
      console.log("Exports.ExportJson");
      let routeData = this.$router.resolve({
        name: "json",
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
