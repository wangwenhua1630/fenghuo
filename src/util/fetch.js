import Vue from 'vue'
import axios from 'axios'
import router from '../router/index.js'
import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Toast);
const roots = process.env.API_ROOT
    //创建axios实例
var service = axios.create({
    //   baseURL: roots,
    baseURL: 'http://39.99.163.207:8082/',
    timeout: 50000,
    // headers: {'X-Custom-Header': 'foobar'},
});

service.defaults.withCredentials = true; //cookie信息
// 添加请求拦截器
service.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    // if(response.data.login_in&&!response.data.login_in){
    //   Toast('Please login again')
    //   setTimeout(function(){
    //     router.push('/login')
    //   },500)
    // }
    return response;
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;