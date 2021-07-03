import http from './http'

const request = {
    get(url,params){
        const config = {
            method:'get',
            url:url
        }
        if(params) config.params = params
        return http(config)
    },

    post(url,data){
        const config = {
            method:'post',
            url:url
        }
        if(data) config.data = data
        return http(config)
    },

    put(url,params){
        const config = {
            method:'put',
            url:url
        }
        if(params) config.params = params
        return http(config)
    },

    delete(url,params){
        const config = {
            method:'delete',
            url:url
        }
        if(params) config.params = params
        return http(config)
    }
}
export default request