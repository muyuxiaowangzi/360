import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/search/search.vue";
import Home from "../views/Home/index.vue";
import Shop from "../views/shop/index.vue";
import MyIfo from "../views/myInfo/MyIfo.vue";
import Order from "../views/order/index.vue";
import Shopping from "../views/shopping/index.vue";

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
    name: "Home",
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
    path: "/shopping",
    name: "shopping",
    component: Shopping,
    meta: {
      isshow: true
    }
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
