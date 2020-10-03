import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Auth/Login";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
      user: true,
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
      administrador: true,
    },
  },
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      free: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.free)) {
    next();
  } else if (store.state.usuario && store.state.usuario.role == "user_role") {
    if (to.matched.some((record) => record.meta.user)) {
      next();
    }
  } else if (store.state.usuario && store.state.usuario.role == "admin_role") {
    if (to.matched.some((record) => record.meta.administrador)) {
      next();
    }
  } else {
    next({ name: "Login" });
  }
});

export default router;
