import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Pagination from "./components/pagination";
<<<<<<< HEAD
// 使用element-ui
import "./plugins/element-ui";
import "./plugins/swiper";
Vue.config.productionTip = false;
import * as API from "./api/index.js";
Vue.prototype.$API = API;
// 变为全局组件
Vue.component("Pagination", Pagination);
=======
import TypeNav from "./components/TypeNav";
// 使用element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./plugins/swiper";
import * as API from "./api/index.js";
// import "@/styles/index.scss"; // global css
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$API = API;
Vue.prototype.$bus = new Vue();
// 变为全局组件
Vue.component("Pagination", Pagination);
Vue.component("TypeNav", TypeNav);
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = new Vue();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
