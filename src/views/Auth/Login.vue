<template>
  <div>
    <!-- Header -->
    <!-- <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-dark">Welcome!</h1>
              <p class="text-lead text-dark">
                Lorem ipsum, dolor sit amet consectetur adipisicing
                elit.oloribus quos impedit repellat dignissimos
              </p>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div> -->
    <!-- Page content -->
    <b-container class="mt-8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="border-0 mb-0">
            <div class="text-muted text-center mt-2 mb-0">
              <h5>Sign in with</h5>
            </div>
            <b-card-body class="px-lg-4 py-lg-4">
              <b-form>
                <b-input-group size="lg" class="mb-3">
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

                <b-input-group size="lg" class="mb-3">
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

                <b-input-group>
                  <b-form-checkbox>Remember me</b-form-checkbox>
                </b-input-group>

                <b-row class=" justify-content-around mt-3">
                  <b-button @click="Login()" variant="primary">Entrar</b-button>
                  <b-button variant="success">Registrarse</b-button>
                </b-row>
              </b-form>
              <hr class="border " />
              <b-card class="border-0 mb-0">
                <div class="text-center text-muted mb-0">
                  <small>Or sign in with credentials</small>
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
              </b-card>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
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
      model: {
        email: "",
        password: "",
      },
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
