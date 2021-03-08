import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Pagination from "./components/pagination";
// 使用element-ui
import "./plugins/element-ui";
import "./plugins/swiper";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false;
import * as API from "./api/index.js";
Vue.prototype.$API = API;
Vue.use(ElementUI)
// 变为全局组件
Vue.component("Pagination", Pagination);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
