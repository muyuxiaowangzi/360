// 封装api的请求函数
// 引入axios
import ajax from "./ajax.js";
import ajaxT from "./ajaxT.js";
import loginAjax from "./loginAjax.js";

//获取分类
export const reqPrimaryCategory = () => ajax.get(`/h5/getPrimaryCategory`);
//根据分类id获取分类详细数据
export const reqSecondaryCategory = (type, id) =>
  ajax.get(`/h5/getSecondaryCategory?type=${type}&id=${id}`);
//获取首页相关数据
export const reqIndexContainer = () => ajax.get(`skin/container?v=`);
export const reqSearchList = obj => ajaxT.post(`api/product/search`, obj);

//登录
export const reqLogin = (username, password) =>
  loginAjax.post("/login", { username, password });
//注册
export const reqRegister = (username, password) =>
  loginAjax.post("/register", { username, password });
