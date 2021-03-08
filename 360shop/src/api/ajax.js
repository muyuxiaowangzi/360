// 二次封装axios
// 引入axios
import axios from "axios";
// 引入Nprogress （带进度条效果的插件）
import Nprogress from "nprogress";
// 引用该插件的样式
import "nprogress/nprogress.css";
axios.defaults.withCredentials = true
// 设置请求的超时时间和根路径
const ajax = axios.create({
  // 设置根路径
  baseURL: "/api",
  // 设置请求1的超时时间
  timeOut: 20000
});
// 设置请求拦截器
ajax.interceptors.request.use(config => {
  // 发送请求应该先显示进度条
  Nprogress.start();

  config.headers.Cookie = '__guid=101213076.1846770689424353300.1614867177776.9963; UM_distinctid=177fd95c541307-0b7399a25368ca-7a667166-144000-177fd95c5428ea; __huid=11fDpXElRk164kbr3SWrDRwXkbSO8O+mUI6uN0cEictbw=; Q=u%3D360H2575315953%26n%3D%26le%3D%26m%3DZGHjWGWOWGWOWGWOWGWOWGWOAmV3%26qid%3D2575315953%26im%3D1_t011655040b3ed000bf%26src%3Dpcw_iotmall%26t%3D1; T=s%3Dbae2162b95e107c6030eba96be5e28e6%26t%3D1614867211%26lm%3D0-1%26lf%3D2%26sk%3D412c8a30f43c4263b8610dd0d31f4133%26mt%3D1614867211%26rc%3D%26v%3D2.0%26a%3D1; __DC_sid=99774850.3634922013805270000.1614939519675.5767; CNZZDATA1278094974=1358908727-1614865766-https%253A%252F%252Fwww.baidu.com%252F%7C1614938880; Qs_lvt_337923=1614867187%2C1614903931%2C1614909197%2C1614930205%2C1614939519; CNZZDATA1278094990=1279256090-1614863611-https%253A%252F%252Fmall.360.cn%252F%7C1614939501; track=natural_others; utm_source=natural_others; Qs_pv_337923=877742352542942200%2C3260044933238881300%2C206379751924143460%2C139153437779771740%2C2857061271020461000; mediav=%7B%22eid%22%3A%22867520%22%2C%22ep%22%3A%22%22%2C%22vid%22%3A%223%25YH%23si%25l%5E8%5Dj%60UZ8%5Eh_%22%2C%22ctn%22%3A%22%22%2C%22vvid%22%3A%223%25YH%23si%25l%5E8%5Dj%60UZ8%5Eh_%22%2C%22_mvnf%22%3A1%2C%22_mvctn%22%3A0%2C%22_mvck%22%3A0%2C%22_refnf%22%3A1%7D; test_cookie_enable=null; __DC_monitor_count=18; __DC_gid=99774850.131888218.1614867186903.1614940425288.60; _cnzz_CV1278094974=%E8%AE%BF%E5%AE%A2%E6%9D%A5%E6%BA%90%7Cnatural_others%7C1614940426293'
  return config;
});
// 设置响应拦截器
ajax.interceptors.response.use(
  response => {
    // 拿到数据就隐藏进度条
    Nprogress.done();
    // 我要的是data数据
    return response;
  },
  error => {
    // 失败也要隐藏进度条
    Nprogress.done();
    // 请求的时候出现的错误信息

    // 返回中断信息
    return Promise.reject(error);
  }
);
export default ajax;
