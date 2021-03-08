import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/search/search.vue";
import Home from "../views/Home/index.vue";
<<<<<<< HEAD
=======
import Shop from "../views/shop/index.vue";
import MyIfo from "../views/myInfo/MyIfo.vue";
import Order from "../views/order/index.vue";
import Shopping from "../views/shopping/index.vue";
const UserInfo = () =>
  import("../views/myInfo/components/userInfo/UserInfo.vue");
const Address = () => import("../views/myInfo/components/Address/index.vue");
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc

import ShopCart from "../views/shopping/index.vue";
import store from "../store/index";
import { Message } from "element-ui";
Vue.use(VueRouter);
const origanPush = VueRouter.prototype.push;
const origanReplace = VueRouter.prototype.replace;
// 重写编程式路由push
VueRouter.prototype.push = function(location, onComplete = () => {}, onAbort) {
  return origanPush.call(this, location, onComplete, onAbort);
};
// 重写编程式路由replace
VueRouter.prototype.replace = function(
  location,
  onComplete = () => {},
  onAbort
) {
  return origanReplace.call(this, location, onComplete, onAbort);
};
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
<<<<<<< HEAD
    path: "/search/:keyword?",
    name: 'search',
    component: Search
=======
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
    component: MyIfo,
    children: [
      {
        path: "/myIfo/userinfo",
        name: "userinfo",
        component: UserInfo
      },
      {
        path: "/myIfo/address",
        name: "Address",
        component: Address
      },
      {
        path: "/myIfo",
        redirect: "/myIfo/userinfo"
      }
    ]
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
  },
  {
    path: "/shopping",
    name: "shopping",
    component: Shopping
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
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
