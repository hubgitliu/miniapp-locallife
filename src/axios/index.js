// 此处可以省略下面语句
// import Vue from 'vue'
import axios from 'axios';
var myaxios = {}
myaxios.install = function (Vue) {
    axios.defaults.baseURL = 'https://www.zhengzhicheng.cn/api/public/v1/'
    axios.defaults.adapter = function (config) {
        return new Promise((resolve, reject) => {
            // console.log(config);
            mpvue.request({
                url: config.url,
                data: config.data,
                method: config.method,
                dataType: 'json',
                success: res => {
                    resolve(res)
                },
                fail:err=>{
                    reject(res)
                }
            })
        })
    }


    Vue.prototype.$axios = axios;
}





export default myaxios