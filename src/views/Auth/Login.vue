<template>
  <b-container>
    <b-row class="vh-100" align-v="center" align-h="center">
      <b-card class="border-1 " style="max-width: 22rem;">
        <div class="text-muted text-center mt-2 mb-0">
          <h3>Matrixtock</h3>
        </div>
        <b-card-body class="">
          <b-form>
            <b-input-group class="mb-3">
              <b-input-group-prepend is-text>
                <b-icon icon="envelope"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                type="email"
                :rules="{ required: true, email: true }"
                placeholder="me@example.com"
                v-model="form.email"
              >
              </b-form-input>
            </b-input-group>

            <b-input-group class="mb-3">
              <b-input-group-prepend is-text>
                <b-icon icon="lock-fill"></b-icon>
              </b-input-group-prepend>
              <b-form-input
                name="Password"
                :rules="{ required: true, min: 6 }"
                type="password"
                placeholder="Password"
                v-model="form.password"
              >
              </b-form-input>
            </b-input-group>

            <!-- <b-input-group>
                  <b-form-checkbox>Remember me</b-form-checkbox>
                </b-input-group> -->

            <b-row class="justify-content-center">
              <div class="mr-2 mb-1">
                <b-button @click="Login()" variant="primary">Entrar</b-button>
              </div>
              <div class="ml-2">
                <b-button variant="success">Registrarse</b-button>
              </div>
            </b-row>
            <hr class="border"/>
            <div class="text-center text-muted ">
              <small>O inicie sesión con</small>
            </div>
            <div class="btn-wrapper text-center">
              <a href="#" class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon"
                  ><img src="img/icons/github.svg"
                /></span>
                <span class="btn-inner--text">Github</span>
              </a>
              <a href="#" class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon"
                  ><img src="img/icons/google.svg"
                /></span>
                <span class="btn-inner--text">Google</span>
              </a>
            </div>
          </b-form>
        </b-card-body>
      </b-card>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    Login() {
      this.axios
        .post("login", {
          email: this.form.email,
          password: this.form.password,
        })
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          if (data.status === 200) {
            this.$store.dispatch("saveToken", data.token);
            this.$router.push({
              name: "Home",
            });
          } else {
            let err = {
              code: data.status,
              message: data.err.message,
            };
            throw err;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
