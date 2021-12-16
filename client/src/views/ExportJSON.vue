<template>
  <p>{{ tasks }}</p>
</template>

<script>
import axios from "axios";
export default {
  name: "ExportJSON",
  data() {
    return {
      tasks: "",
    };
  },
  methods: {
    DownloadData() {
      axios.get("http://localhost:8080/api/tasks/").then((response) => {
        this.tasks = response.data;
      });
    },
  },
  created() {
    this.tasks = "";
    this.DownloadData();
  },
  head: {
    title() {
      return {
        inner: "JSON",
      };
    },
    
  },
};
</script>
