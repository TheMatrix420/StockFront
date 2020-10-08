<template>
  <div class="mt-5">
    <b-card bg-variant="light">
      <b-form @submit="onSubmit">
        <b-form-group
          label-cols-lg="3"
          label="Registrate"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label-cols-sm="3"
            label="Nombre:"
            label-align-sm="right"
          >
            <b-form-input
              v-model="form.firt_name"
              required
              placeholder="Ingrese su nombre"
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Apellido:"
            label-align-sm="right"
          >
            <b-form-input
              v-model="form.last_name"
              required
              placeholder="ingrese su apellido"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Correo:"
            label-align-sm="right"
          >
            <b-form-input
              v-model="form.email"
              type="email"
              required
              placeholder="Ejmplo@hotmail.com"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label-cols-sm="3"
            label="Contraseña:"
            label-align-sm="right"
            placeholder="contraseña"
          >
            <b-form-input
              v-model="form.password"
              type="password"
            ></b-form-input>
            <div class="m-5">
              <b-row>
                <b-col lg="12" class="pb-2">
                  <b-button type="submit" variant="success">Submit</b-button>
                </b-col>
              </b-row>
            </div>
          </b-form-group>
        </b-form-group>
      </b-form>
    </b-card>

    <template>
      <div>
        <b-card class="mt-3" header="Form Data Result">
          <pre class="m-0">{{ form }}</pre>
        </b-card>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firt_name: "",
        last_name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
      // Reset our form values
      this.form.firt_name = "";
      this.form.last_name = "";
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};

//   data() {
//     return {};
//   },
//   methods: {
//     Registro() {
//       this.axios
//         .post("login", {
//           firt_name: this.form.firt_name,
//           last_name: this.form.last_name,
//           email: this.form.email,
//           password: this.form.password,
//         })
//         .then((res) => {
//           return res.data;
//         })
//         .then((data) => {
//           if (data.status === 200) {
//             this.$store.dispatch("saveToken", data.token);
//             this.$router.push({
//               name: "Home",
//             });
//           } else {
//             let err = {
//               code: data.status,
//               message: data.err.message,
//             };
//             throw err;
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     },
//   },
</script>
