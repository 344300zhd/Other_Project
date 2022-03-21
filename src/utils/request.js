import  axios from "axios";
import { Message } from "element-ui";

// 创建axios实例
const service = axios.create({
    // baseURL: "",
    timeout: 3 * 1000
})
// 请求拦截
service.interceptors.request.use(config => {
    if(config.uploadFile){
        config.headers = {
            "Content-Type":"multipart/form-data"
        }
    }else{
        // 序列化数据
        config.data = JSON.stringify(config.data)
        // 配置请求头
        config.headers = {
        'Content-Type': 'application/json;charset=UTF-8'
        }
    } 
    // 设置token
    // const token = getCookie('token') || ''
    // if(token){
    //     config.params = { 'token' : token}
    //     config.headers.token = token
    // }
    return config
},error => {
    Promise.reject(error)
})
/** 响应拦截 **/
service.interceptors.response.use(response => {
    return response
},error => {
    /** 接收到异常响应 **/
    if(error && error.response){
        /** 不同响应码不同处理 **/
        switch(error.response.status){
            case 400:
                error.message = '错误请求'
                break;
            case 401:
                error.message = '未授权，请重新登录'
                break;
            case 403:
                error.message = '拒绝访问'
                break;
            case 404:
                error.message = '请求错误，未找到该资源'
                // window.location.href = '/NotFound'
                break;
            case 405:
                error.message = '请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务器端错误'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'HTTP版本不支持该请求'
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
    }
    Message.error(error.message)
    return Promise.reject(error)
})

export default service