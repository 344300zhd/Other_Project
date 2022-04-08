//导入axios
import axios from 'axios'
//导入qs:序列化参数
import qs from 'qs'
//使用element-ui Message做消息提醒
import {Message} from 'element-ui'

//创建axios实例
const service = axios.create({
    //公共接口
    baseURL:'http://192.168.1.102:8090',
    //超时时间
    timeout:3*1000
})

//请求拦截器
service.interceptors.request.use(config=>{
    // 发送请求前的预处理：如数据转化，配置请求头，设置token,设置loading等
    config.data = qs.stringify(config.data)
    config.headers = {
        'Content-Type':'application/x-www-form-urlencoded;'//配置请求头
    }
    //token
    const token = localStorage.getItem("userToken")
    if(token){
        config.params = {'token':token} //token携带在参数中
        config.headers.token = token //token携带在请求头中
    }
    return config
},error => {
    Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有处理，如关闭loading
    return response
},error => {
    if(error  && error.response){
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
                error.message = '未找到资源'
                // 此时可以跳转到404界面
                break;
            case 405:
                error.message ='请求方法未允许'
                break;
            case 408:
                error.message = '请求超时'
                break;
            case 500:
                error.message = '服务端出错'
                break;
            case 501:
                error.message = '网络未实现'
                break;
            case 502:
                error.message = '网络错误'
                break;
            case 503:
                error.message = '服务不可用'
                break;
            case 504:
                error.message = '网络超时'
                break;
            case 505:
                error.message = 'http版本不支持请求'
                break;
            default:
                error.message = `连接错误${error.response.status}`
        }
        Message.error(error.message)
    }else{
        //超时处理
        if(JSON.stringify(error).includes('timeout')){
            Message.error('服务器响应超时，请刷新当前页!')
        }
        error.message = '连接服务器失败'
    }
})

export default service