<template>
  <ul class="nav nav-pills todo-nav">
    <li
      role="presentation"
      class="nav-item all-task active"
      v-on:click="ApplyFilter(null)"
    >
      <a class="nav-link">All</a>
    </li>
    <li
      role="presentation"
      class="nav-item active-task"
      v-on:click="ApplyFilter(0)"
    >
      <a class="nav-link">Active</a>
    </li>
    <li
      role="presentation"
      class="nav-item completed-task"
      v-on:click="ApplyFilter(1)"
    >
      <a class="nav-link">Completed</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FilterList",
  data() {
    return {
      filter: null,
    };
  },
  methods: {
    ApplyFilter(type) {
      console.log("FilterList.ApplyFilter");
      this.filter = type;
      this.$router.push({ path: 'todolist', query: { filter: this.filter }}).catch(()=>{});
    },
  },
};
</script>

<style lang="css" scoped>
@import "../assets/ToDoListStyle.css";
</style>
