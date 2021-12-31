<template>
  <b-modal id="modal-edit" title="Edit Task" @ok="HandleOk" @show="ResetModal">
    <form ref="form">
      <b-form-group label="Task:" label-for="task-input">
        <b-form-input
          id="task_input"
          v-model="task_input"
          required
        ></b-form-input>
      </b-form-group>
    </form>
  </b-modal>
</template>

<script>
import axios from "axios";
export default {
  name: "ModalEdit",
  data() {
    return {
      task_input: "",
      id: null,
      completed: "",
      connection: null,
    };
  },
  methods: {
    HandleOk: async function () {
      console.log("ModalEdit.HandleOk");
      await axios.put(process.env.VUE_APP_URL + "/api/tasks/" + this.id, {
        content: this.task_input,
        completed: this.completed,
      });
      this.connection.send("");
    },
    ResetModal: async function () {
      console.log("ModalEdit.ResetModal");
      this.id = this.$route.query.id;
      var result = await axios.get(
        process.env.VUE_APP_URL + "/api/tasks/" + this.id
      );
      this.task_input = result.data.content;
      this.completed = result.data.completed;
    },
  },
  created() {
    this.connection = new WebSocket(process.env.VUE_APP_SOCKET_URL);
    this.connection.onopen = function (event) {
      console.log(event);
    };
  },
};
</script>
