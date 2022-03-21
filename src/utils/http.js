import request from "./request";

const http = {
    get(url,params){
        const config = {
            method: 'get',
            url: url
        }
        if(params) config.data = params
        return request(config)
    },
    post(url,params){
        params = params ? params : {}
        const config = {
            method: 'post',
            url: url
        }
        if(params) config.data = params
        return request(config)
    },
    put(url,params){
        const config = {
            method: 'put',
            url: url
        }
        if(params) config.data = params
        return request(config)
    },
    delete(url,params){
        const config = {
            method: "delete",
            url: url
        }
        if(params) config.data = params
        return request(config)
    },
    upload(url,params){
        const config = {
            method:"post",
            url:url,
            uploadFile:true
        }
        if(params) config.data = params
        return request(config)
    },
    download(url){
        const config = {
            method:"get",
            url:url,
            responseType:"blob"
        }
        return request(config)
    }
}

export default http