import Vue from "vue";
import Vuex from "vuex";
import decode from "jwt-decode";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    usuario: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setUser(state, payload) {
      state.usuario = payload;
    },
  },
  actions: {
    saveToken({ commit }, token) {
      commit("setToken", token);
      commit("setUser", decode(token));
      localStorage.setItem("token", token);
    },
    autoLogin({ commit }) {
      let token = localStorage.getItem("token");
      if (token) {
        commit("setToken", token);
        commit("setUser", decode(token));
      }
      router.push({ name: "Home" });
    },
    logout({ commit }) {
      commit("setToken", "");
      commit("setUser", "");
      localStorage.removeItem("token");
      router.push({ name: "Login" });
    },
  },
  modules: {},
});
