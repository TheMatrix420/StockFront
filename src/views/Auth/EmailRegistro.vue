<template>
  <b-container>
    <b-row class="vh-100" align-v="center" align-h="center">
      <b-card class="border-1 " style="max-width: 25rem;">
        <div class="text-muted text-center mt-2 mb-0">
          <h3>Validar Cuenta Matrixtock</h3>
        </div>
        <b-card-body class="">
          <b-form>
            <b-form-text>{{estado}}</b-form-text>
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
            estado:""
        };
    },
    mounted(){
        console.log('metodo mounted')
        this.Confirmar()
    }, methods: {
    Confirmar() {
      this.axios
        .get(`confirmar/${this.$route.params.token}`)
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          this.estado = data.message
          
        })
        .catch((err) => {
            this.estado =err.message
            console.log(err);
        });
    },
  },
}
</script>