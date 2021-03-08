import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Pagination from "./components/pagination";
import TypeNav from "./components/TypeNav";
// 使用element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./plugins/swiper";
import * as API from "./api/index.js";

import VueLazyload from "vue-lazyload";
import { setCookie, getCookie, delCookie } from "./plugins/cookie.js";
const loadimage = require("./assets/images/loading.gif");

Vue.use(VueLazyload, {
  loading: loadimage
});
// import "@/styles/index.scss"; // global css
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$API = API;
Vue.prototype.$bus = new Vue();
// 变为全局组件
Vue.component("Pagination", Pagination);
Vue.component("TypeNav", TypeNav);
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = new Vue();
    Vue.prototype.setCookie = setCookie;
    Vue.prototype.getCookie = getCookie;
    Vue.prototype.delCookie = delCookie;
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
