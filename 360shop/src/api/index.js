import axios from "axios";

const ajax = axios.create({
  timeout: 20000,
  baseURL: "/api"
});

//获取分类
export const reqPrimaryCategory = () => ajax.get(`/h5/getPrimaryCategory`);
//根据分类id获取分类详细数据
export const reqSecondaryCategory = (type, id) =>
  ajax.get(`/h5/getSecondaryCategory?type=${type}&id=${id}`);
