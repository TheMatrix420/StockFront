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
                  <div id='status'></div>
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
                <a href="#" class="mx-2" @click="LoginFacebook()">
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
import axios from 'axios'
import store from '../../store'
import router from '../../router'
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
      const res = await axios.post("login", credentials);
      const data = res.data;
      if (data.status === 400) {
        console.log(data.err);
      } else {
        store.dispatch("saveToken", data.token);
        router.push({
          name: "Home",
        });
      }
    },LoginFacebook(){

      FB.login(function(response){
        if(response.status == 'connected'){
          checkLoginStatus(response.authResponse)
        }
      } ,{scope:'public_profile,email'})

      function checkLoginStatus(response){
        FB.api('/me?fields=id,email,name,first_name,last_name,picture.type(large)',async function(userData){
          const user ={
            email : userData.email,
            first_name : userData.first_name,
            last_name : userData.last_name,
            picture : userData.picture.data.url
          }
          
          const res = await axios.post("loginFacebook", user);
          const data = res.data;
          
          if (data.status === 200) {
            store.dispatch("saveToken", data.token);
            logout(response)
            router.push({
              name: "Home",
            });
          } else {
            console.log(data.err);
          } 
        }) 
      }

      function logout(user){
        FB.api('/me/permissions', 'delete', { access_token: user.accessToken }, (r) => {
          if(r.success) user.accessToken = null; 
          FB.getLoginStatus(function (res) { }, true);
        });
      }
    }
  },
};

window.fbAsyncInit = function() {
    FB.init({
      appId      : '358921788786000',
      cookie     : true,
      status     : false,
      xfbml      : true,
      version    : "v8.0",
    });
  };

    (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

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