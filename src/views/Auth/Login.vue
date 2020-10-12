<template>
  <b-container>
    <b-row class="vh-100" align-v="center" align-h="center">
      <b-card>
        <div class="text-muted text-center my-2">
          <h2>Matrixtock</h2>
        </div>
        <b-card-body>
          <b-form>
            <b-input-group class="mb-3">
              <b-form-input
                type="email"
                :rules="{ required: true, email: true }"
                placeholder="Ingresa tu correo"
                v-model="form.email"
              >
              </b-form-input>
            </b-input-group>

            <b-input-group class="mb-3">
              <b-form-input
                name="Password"
                :rules="{ required: true, min: 6 }"
                type="password"
                placeholder="Ingresa tu contraseña"
                v-model="form.password"
              >
              </b-form-input>
            </b-input-group>

            <b-row class="justify-content-around">
              <div class="my-2">
                <b-button @click="Login()" variant="success" size="sm"
                  >Entrar</b-button
                >
              </div>
              <div class="my-2">
                <b-button to="/registro" variant="primary" size="sm"
                  >Regístrate</b-button
                >
              </div>
            </b-row>

            <div class="border my-3"></div>

            <div class="text-center text-muted">
              <small>O inicia sesión con</small>
            </div>
            <div>
              <a href="#" class="btn btn-light">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="#" class="btn btn-light">
                <i class="fab fa-google"></i>
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
