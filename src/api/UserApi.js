import http from "../utils/http"

export function getAllUser(params){
    return http.post('/api/getAllUser',params)
}