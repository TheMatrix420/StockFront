<template>
  <div class="vh-100 d-flex align-items-center bg-matrix">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-xl-4 mx-auto">
          <div class="card border-0">
            <div class="card-body py-5">
              <h2 class="text-center font-weight-bold text-dark mb-3">
                Matrixtock
              </h2>
              <form @submit.prevent="Login">
                <div class="form-group">
                  <label class="d-flex justify-content-start"
                    >Correo electrónico</label
                  >
                  <div class="bv-no-focus-ring">
                    <input
                      id="input-email"
                      type="email"
                      placeholder="Ingresa tu correo"
                      class="form-control"
                      v-model="form.email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mb-4">
                  <label class="d-flex justify-content-start">Contraseña</label>
                  <div class="bv-no-focus-ring">
                    <input
                      id="input-password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      class="form-control"
                      maxlength="20"
                      v-model="form.password"
                      required
                    />
                  </div>
                </div>
                <button type="submit" class="btn btn-block btn-primary mb-2">
                  Ingresar
                </button>
                <a href="/registro" class="text-decoration-none">
                  <button type="button" class="btn btn-block btn-success">
                    Crear cuenta
                  </button>
                </a>
              </form>
              <div class="border my-3"></div>
              <div class="text-center text-muted">
                <small>Inicia sesión con</small>
                <a href="#" class="mx-2">
                  <img src="img/icons/facebook.svg" width="7%" />
                </a>
                <a href="#" class="mx-2">
                  <img src="img/icons/google-icon.svg" width="7%" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    };
  },
  methods: {
    async Login() {
      const credentials = {
        email: this.form.email,
        password: this.form.password,
      };
      const res = await this.axios.post("login", credentials);
      const data = res.data;
      if (data.status === 400) {
        console.log(data.err);
      } else {
        this.$store.dispatch("saveToken", data.token);
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>

<style scoped>
.bg-matrix {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  display: block;
  background-image: url(/img/icons/godi.jpg);

  /* -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px); */
}

/* .content-matrix {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-right: 20px;
} */
</style>