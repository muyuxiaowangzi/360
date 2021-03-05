import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Header from "./components/Header";
import Header from "./components/Header/Header.vue";
import "./plugins/swiper";
import * as api from "./api";
Vue.prototype.$API = api;

Vue.config.productionTip = false;
Vue.component("Header", Header);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
