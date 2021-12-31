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
      connection: null,
    };
  },
  methods: {
    TaskAdd: async function () {
      console.log("AddTask.TaskAdd");
      if (this.content != "") {
        await axios.post(process.env.VUE_APP_URL + "/api/tasks/", {
          content: this.content,
        });
      }
      this.content = "";
      this.connection.send("")
    },
  },
  created() {
    this.connection = new WebSocket(process.env.VUE_APP_SOCKET_URL)
    this.connection.onopen = function(event) {
      console.log(event);
    }
  },
};
</script>

<style lang="css" scoped>
@import "../assets/ToDoListStyle.css";
</style>
