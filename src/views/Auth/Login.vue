<template>
  <div class="mt-5">
    <b-row align-h="center" align-v="center">
      <b-col sm="4">
        <div>
          <b-card-group deck>
            <b-card title="Login">
              <b-form>
                <b-row align-h="center" align-v="center">
                  <b-col sm="5">
                    <b-form-group id="input-group-1">
                      <b-form-input
                        v-model="form.email"
                        type="email"
                        required
                        placeholder="Ingresa Correo"
                      ></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-2">
                      <b-form-input
                        v-model="form.password"
                        type="password"
                        required
                        placeholder="Ingresa Contraseña"
                      ></b-form-input>
                    </b-form-group>

                    <b-button @click="Login()" variant="primary"
                      >Entrar</b-button
                    >
                  </b-col>
                </b-row>
              </b-form>
            </b-card>
          </b-card-group>
        </div>
        <div>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </div>
      </b-col>
    </b-row>
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
          this.$store.dispatch("saveToken", data.token);
          console.log(data);
          // this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
