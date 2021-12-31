import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import TodoList from "../views/TodoList.vue";
import ExportJSON from "../views/ExportJSON.vue"
import store from '../store/index.js'
import About from '../views/AboutSite.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter(to, from, next) {
        const isAuthenticated = store.getters['isLoggedIn']
        if (isAuthenticated) {
          next("/todolist")
        } else {
          next()
        }
      }
    },
    {
      path: "/todolist",
      name: "todolist",
      component: TodoList,
      beforeEnter(to, from, next) {
        const isAuthenticated = store.getters['isLoggedIn']
        if (isAuthenticated) {
          next()
        } else {
          next("/login")
        }
      }
    },
    {
      path: "/todolist/json",
      name: "json",
      component: ExportJSON,
    },
    {
      path: "/",
      name: "basic",
      component: Login,
      beforeEnter(to, from, next) {
        const isAuthenticated = store.getters['isLoggedIn']
        if (isAuthenticated) {
          next("/todolist")
        } else {
          next("/login")
        }
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
