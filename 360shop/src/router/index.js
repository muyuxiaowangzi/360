import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/search/search.vue";
import Home from "../views/Home/index.vue";
import Shop from "../views/shop/index.vue";
import MyIfo from "../views/myInfo/MyIfo.vue";
import Order from "../views/order/index.vue";
import ShopCart from "../views/shopping/index.vue";
import store from "../store/index";
import { Message } from "element-ui";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search/:key_word?",
    name: "search",
    component: Search
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop
  },
  {
    path: "/myIfo",
    name: "myIfo",
    component: MyIfo
  },
  {
    path: "/order",
    name: "Order",
    component: Order
  },
  {
    path: "/shopCart",
    name: "shopCart",
    component: ShopCart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
router.beforeEach(async (to, from, next) => {
  //获取cookie
  function getCookie(name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return null;
  }
  const userInfo = store.state.userInfo;
  if (userInfo.username) {
    next();
    return;
  }
  if (getCookie("Q") && getCookie("T")) {
    try {
      await store.dispatch("getUserInfo");
      next();
      return;
    } catch (error) {
      Message.error("请重新登录");
      next("/");
      return;
    }
  } else {
    // Message.error("请重新登录");
    next();
    return;
  }
});
export default router;
