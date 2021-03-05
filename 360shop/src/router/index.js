import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/search/search.vue";
import Home from "../views/Home/index.vue";
import Shop from "../views/shop/index.vue";
import MyIfo from "../views/myInfo/MyIfo.vue";
import Order from "../views/order/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search/:keyword?",
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
