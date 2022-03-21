import http from "@/utils/http.js";

export function getAllEvent(params){
    return http.get("/api/getAllEvent",params)
}