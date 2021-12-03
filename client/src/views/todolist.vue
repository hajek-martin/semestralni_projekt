<template>
  <div class="page-content page-container" id="page-content">
    <div class="padding">
      <div class="row container d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card px-3">
            <div class="card-body">
              <h4 class="card-title">TO-DO List</h4>
              <div class="add-items d-flex">
                <input
                  type="text"
                  class="form-control todo-list-input"
                  placeholder="What do you need to do today?"
                  v-model="input.content"
                />
                <button
                  class="add btn btn-primary font-weight-bold todo-list-add-btn"
                  v-on:click="addTask()"
                >
                  Add
                </button>
              </div>
              <ul class="nav nav-pills todo-nav">
                <li
                  role="presentation"
                  class="nav-item all-task active"
                  v-on:click="filter(null)"
                >
                  <a href="#" class="nav-link">All</a>
                </li>
                <li
                  role="presentation"
                  class="nav-item active-task"
                  v-on:click="filter(0)"
                >
                  <a href="#" class="nav-link">Active</a>
                </li>
                <li
                  role="presentation"
                  class="nav-item completed-task"
                  v-on:click="filter(1)"
                >
                  <a href="#" class="nav-link">Completed</a>
                </li>
              </ul>
              <div class="list-wrapper">
                <ul class="d-flex flex-column-reverse todo-list">
                  <li
                    v-for="item in tasks.tasks_list"
                    :key="item.id"
                    v-bind:class="{ completed: item.completed }"
                  >
                    <div class="form-check">
                      <label class="form-check-label">
                        <input
                          v-on:click="taskComplete(item.id, item.content)"
                          class="checkbox"
                          type="checkbox"
                          :checked="item.completed ? true : null" />
                        {{ item.content }}<i class="input-helper"></i
                      ></label>
                    </div>
                    <div class="testik">
                      <b-icon
                        icon="trash"
                        class="remove mdi"
                        v-on:click="taskDelete(item.id)"
                      ></b-icon>
                      <b-icon
                        icon="pencil"
                        class="edit mdi"
                        v-on:click="taskEdit(item.id, item.content)"
                      ></b-icon>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Todolist",
  data() {
    console.log("data");
    return {
      input: {
        content: "",
        task_filter: 1,
      },
      tasks: {
        tasks_list: [],
      },
    };
  },
  methods: {
    addTask: async function () {
      console.log("adding task");
      if (this.input.content != "") {
        await axios.post("http://localhost:8080/api/tasks/", {
          content: this.input.content,
        });
      }
      this.input.content = "";
      this.refresh();
    },
    getTasks: async function () {
      console.log("getting task");
      var result = await axios.get("http://localhost:8080/api/tasks/");
      console.log(result.data);
      this.refresh();
    },
    taskComplete: async function (id, content) {
      console.log("completing task");
      var result = await axios.get("http://localhost:8080/api/tasks/" + id);
      var c = 1;
      if (result.data.completed === 1) {
        c = 0;
      }
      await axios.put("http://localhost:8080/api/tasks/" + id, {
        content: content,
        completed: c,
      });
      this.refresh();
    },
    taskDelete: async function (id) {
      console.log("deleting");
      await axios.delete("http://localhost:8080/api/tasks/" + id);
      console.log("deleted");
      this.refresh();
    },
    refresh: async function () {
      console.log("downloading data");
      if (this.input.filter == null) {
        console.log("null filter");
        axios.get("http://localhost:8080/api/tasks/").then((response) => {
          this.tasks.tasks_list = response.data;
        });
      } else {
        console.log("filter active");
        axios
          .get("http://localhost:8080/api/tasks/completed/" + this.input.filter)
          .then((response) => {
            this.tasks.tasks_list = response.data;
          });
      }
    },
    filter(type) {
      this.input.filter = type;
      this.refresh();
    },
    taskEdit: async function (id, content) {
      console.log("editing " + id + " cont: " + content);
    },
  },
  mounted() {
    console.log("refrshing");
    this.refresh();
  },
};
</script>

<style scoped>
.testik {
  float: right;
  width: 50px;
  position: relative;
  height: 100%;
  margin-top: 4px;
  margin-bottom: 4px;
}

.list-wrapper .completed .edit {
  color: #405189 !important;
}

.completed .form-check-label {
  text-decoration: line-through;
  color: #405189 !important;
}

.list-wrapper .edit {
  cursor: pointer;
  width: 1.25rem;
  height: 100%;
  line-height: 20px;
}

.list-wrapper .edit,
.mx-auto {
  float: left;
}

body {
  background-color: #f9f9fa;
}
.padding {
  padding: 5rem;
}

.card-body {
  flex: 1 1 auto;
  padding: 1.25rem;
}

.add-items input[type="text"] {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  background: transparent;
}

.form-control {
  border: 1px solid #f3f3f3;
  font-weight: 400;
  font-size: 0.875rem;
}

.form-control {
  display: block;
  width: 100%;
  padding: 0.875rem 1.375rem;
  font-size: 1rem;
  line-height: 1;
  color: #495057;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 2px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.add-items .btn {
  margin-left: 0.5rem;
}

.btn {
  font-size: 0.875rem;
  line-height: 1;
  font-weight: 400;
  padding: 0.7rem 1.5rem;
  border-radius: 0.1275rem;
}

.add-items input[type="text"] {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  background: transparent;
}
.list-wrapper ul li:first-child {
  border-bottom: none;
}

.list-wrapper ul li .form-check {
  max-width: 80% - 50px;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  margin-right: 0px;
  margin-left: 0px;
}

.list-wrapper ul li .form-check label:hover {
  cursor: pointer;
}

.form-check {
  position: relative;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 0;
  float: left;
  max-width: calc(100% - 60px);
}

.form-check .form-check-label {
  min-height: 18px;
  display: block;
  margin-left: 1.75rem;
  font-size: 0.875rem;
  line-height: 1.5;
}

.form-check-label {
  margin-bottom: 0;
}

.form-check .form-check-label input {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 0;
  margin-top: 0;
  z-index: 1;
  cursor: pointer;
  opacity: 0;
  filter: alpha(opacity=0);
}

.form-check .form-check-label input[type="checkbox"] + .input-helper:before {
  content: "";
  width: 18px;
  height: 18px;
  border-radius: 2px;
  border: solid #405189;
  border-width: 2px;
  -webkit-transition: all;
  -moz-transition: all;
  -ms-transition: all;
  -o-transition: all;
  transition: all;
  transition-duration: 0s;
  -webkit-transition-duration: 250ms;
  transition-duration: 250ms;
}

.form-check .form-check-label input[type="checkbox"] + .input-helper:before,
.form-check .form-check-label input[type="checkbox"] + .input-helper:after {
  position: absolute;
  top: 0;
  left: 0;
}

.form-check .form-check-label input[type="checkbox"] + .input-helper:after {
  -webkit-transition: all;
  -moz-transition: all;
  -ms-transition: all;
  -o-transition: all;
  transition: all;
  transition-duration: 0s;
  -webkit-transition-duration: 250ms;
  transition-duration: 250ms;
  font-family: Material Design Icons;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
  content: "\F12C";
  font-size: 0.9375rem;
  font-weight: bold;
  color: #ffffff;
}

.form-check
  .form-check-label
  input[type="checkbox"]:checked
  + .input-helper:before {
  background: #405189;
  border-width: 0;
}

.form-check .form-check-label input[type="checkbox"] + .input-helper:after {
  font-family: FontAwesome;
  content: "\f095";
  display: inline-block;
  padding-right: 3px;
  vertical-align: middle;
  color: #fff;
}

.list-wrapper .completed .remove {
  color: #405189 !important;
}

.list-wrapper .remove {
  cursor: pointer;
  width: 1.25rem;
  height: 100%;
  line-height: 20px;
}

.list-wrapper .remove,
.mx-auto {
  float: right;
}
.list-wrapper ul li {
  font-size: 0.9375rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid #f3f3f3;
}

.list-wrapper ul {
  padding: 0;
  text-align: left;
  list-style: none;
  margin-bottom: 0;
}
</style>