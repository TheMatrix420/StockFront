import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Auth/Login";
import RegistroUser from "../views/Auth/RegistroUser";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      auth: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
      auth: true,
    },
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      auth: false,
      guest: true,
    },
  },
  {
    path: "/registro",
    name: "Registro",
    component: RegistroUser,
    meta: {
      title: "Registro Usuario",
      auth: false,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   window.document.title = to.meta.title
//     ? `${to.meta.title} · Matrixtock`
//     : "Matrixtock";

//   if (to.matched.some((record) => record.meta.free)) {
//     next();
//   } else if (store.state.usuario && store.state.usuario.role == "user_role") {
//     if (to.matched.some((record) => record.meta.user)) {
//       next();
//     }
//   } else if (store.state.usuario && store.state.usuario.role == "admin_role") {
//     if (to.matched.some((record) => record.meta.administrador)) {
//       next();
//     }
//   } else {
//     next({ name: "Login" });
//   }
// });

router.beforeEach(async (to, from, next) => {
  window.document.title = to.meta.title
    ? `${to.meta.title} · Matrixtock`
    : "Matrixtock";

  if (to.meta.auth && !localStorage.getItem("token")) {
    next({ name: "Login" });
  }
  if (to.meta.guest && localStorage.getItem("token")) {
    next({ name: "Home" });
  }
  next();
});

export default router;
