// 封装api的请求函数
// 引入axios
import ajax from "./ajax.js";

//获取分类
export const reqPrimaryCategory = () => ajax.get(`/h5/getPrimaryCategory`);
//根据分类id获取分类详细数据
export const reqSecondaryCategory = (type, id) =>
  ajax.get(`/h5/getSecondaryCategory?type=${type}&id=${id}`);
//获取首页相关数据
export const reqIndexContainer = () => ajax.get(`skin/container?v=`);
