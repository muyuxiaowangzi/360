// 封装api的请求函数
// 引入axios
import ajax from "./ajax.js";
<<<<<<< HEAD
=======
import ajaxT from "./ajaxT.js";
import loginAjax from "./loginAjax.js";
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc

//获取分类
export const reqPrimaryCategory = () => ajax.get(`/h5/getPrimaryCategory`);
//根据分类id获取分类详细数据
export const reqSecondaryCategory = (type, id) =>
  ajax.get(`/h5/getSecondaryCategory?type=${type}&id=${id}`);
//获取首页相关数据
export const reqIndexContainer = () => ajax.get(`skin/container?v=`);
<<<<<<< HEAD
=======
export const reqSearchList = obj => ajaxT.post(`api/product/search`, obj);

//登录
export const reqLogin = (username, password) =>
  loginAjax.post("/login", { username, password });
//注册
export const reqRegister = (username, password) =>
  loginAjax.post("/register", { username, password });

//获取购物车
export const reqShopCart = () => ajax.post(`/shop/getshopcart`);

//加入购物车
export const reqAddShopCart = (item_id, num = 1) =>
  ajax.post(`/cart/addtocart?item_id=${item_id}&num=${num}`);

//获取商品详情
export const reqShopDetail = (itemId, rewardType = "point") =>
  ajax.get(`/itemDetail/itemInfo?itemId=${itemId}&rewardType=${rewardType}`);

//获取用户详情
export const reqUserInfo = () => loginAjax.get("/getUserInfo");
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
