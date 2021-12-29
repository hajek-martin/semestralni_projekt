<template>
  <html lang="cs">
    <body class="text-center">
      <main class="form-signin">
        <form>
          <img
            class="mb-4"
            src="../assets/js.png"
            alt=""
            width="72"
            height="72"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              placeholder="name@example.com"
              v-model="input.username"
            />
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="input.password"
            />
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <p v-if="showError" id="error">Username or Password is incorrect</p>
          <button
            class="w-100 btn btn-lg btn-primary"
            type="submit"
            v-on:click="login"
          >
            Sign in
          </button>
          <p class="mt-5 mb-3 text-muted">&copy; 2021–2021</p>
        </form>
      </main>
    </body>
  </html>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapMutations(["setUser", "setToken"]),
    async login(e) {
      e.preventDefault();
      if (this.input.username != "" && this.input.password != "") {
        const response = await axios.post(
          "https://wea-todolist.herokuapp.com/api/users/valid",
          { email: this.input.username, password: this.input.password }
        );
        this.setUser(response.data.user);
        this.setToken(response.data.token);
        this.$router.push("/todolist");
      }
    },
  },
};
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 80px;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.text-muted {
  margin-top: 16px !important;
}
</style>