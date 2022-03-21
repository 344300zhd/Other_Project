import http from "@/utils/http.js"

export function uploadFile(params){
    return http.upload("/api/uploadFile",params)
}

export function downloadFile(params){
    return http.download(`/api/downloadFile/${params}`)
}