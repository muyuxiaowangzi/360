import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/search/search.vue";
import Home from "../views/Home/index.vue";
import Shop from "../views/shop/index.vue";
import MyIfo from "../views/myInfo/MyIfo.vue";
import Order from "../views/order/index.vue";
const UserInfo = () => import('../views/myInfo/components/userInfo/UserInfo.vue')
const Address = () => import('../views/myInfo/components/Address/index.vue')

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
    component: MyIfo,
    children: [
      {
        path: '/myIfo/userinfo',
        name: "userinfo",
        component: UserInfo
      },
      {
        path: '/myIfo/address',
        name: 'Address',
        component: Address
      },
      {
        path: "/myIfo",
        redirect: '/myIfo/userinfo'
      }
    ]
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
