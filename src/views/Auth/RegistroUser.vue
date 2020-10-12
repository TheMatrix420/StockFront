<template>
  <div class="bg-light vh-100 d-flex align-items-center bg-matrix">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-xl-4 mx-auto">
          <div class="card border-0">
            <div class="card-body py-5">
              <h2 class="text-center font-weight-bold text-dark mb-3">
                Matrixtock
              </h2>
              <form @submit.prevent="Register">
                <div class="form-group">
                  <label class="d-flex justify-content-start">Nombre</label>
                  <div class="bv-no-focus-ring">
                    <input
                      id="input-first_name"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      class="form-control"
                      v-model="form.first_name"
                      required
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="d-flex justify-content-start">Apellido</label>
                  <div class="bv-no-focus-ring">
                    <input
                      id="input-last_name"
                      type="text"
                      placeholder="Ingresa tu apellido"
                      class="form-control"
                      v-model="form.last_name"
                      required
                    />
                  </div>
                </div>
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
                <div class="form-group mb-4">
                  <label class="d-flex justify-content-start"
                    >Repite tu contraseña</label
                  >
                  <div class="bv-no-focus-ring">
                    <input
                      id="input-password2"
                      type="password"
                      placeholder="Repite tu contraseña"
                      class="form-control"
                      maxlength="20"
                      v-model="form.password2"
                      required
                    />
                  </div>
                </div>
                <button type="submit" class="btn btn-block btn-success mb-2">
                  Registrarse
                </button>
                <a href="/home" class="text-decoration-none">
                  <button type="button" class="btn btn-block btn-link">
                    Volver
                  </button>
                </a>
              </form>
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
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password2: "",
      },
    };
  },
  methods: {
    async Register() {
      const credentials = {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
        password: this.form.password,
      };
      console.log(credentials);
      // const res = await this.axios.post("login", credentials);
      // const data = res.data;
      // if (data.status === 400) {
      //   console.log(data.err);
      // } else {
      //   this.$store.dispatch("saveToken", data.token);
      //   this.$router.push({
      //     name: "Login",
      //   });
      // }
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
  background-image: url(/img/icons/matrix.jpeg);
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