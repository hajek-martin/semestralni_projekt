<template>
  <div class="add-items d-flex">
    <input
      type="text"
      class="form-control todo-list-input"
      placeholder="What do you need to do today?"
      v-model="content"
    />
    <button
      class="add btn btn-primary font-weight-bold todo-list-add-btn"
      v-on:click="TaskAdd()"
    >
      Add
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTask",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    TaskAdd: async function () {
      console.log("AddTask.TaskAdd");
      if (this.content != "") {
        await axios.post("https://wea-todolist.herokuapp.com/api/tasks/", {
          content: this.content,
        });
      }
      this.content = "";
    },
  },
};
</script>

<style lang="css" scoped>
@import "../assets/ToDoListStyle.css";
</style>
