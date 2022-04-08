import request from "../utils/request"

const user = {
    /**
     * 用户登录
     */
    login(data){
        return request.post('/user/login2',data)
    },

    /**
     * 用户获取一首诗
     */
    getShi(data){
        return request.get('/user/getShi',data)
    },

    /**
     * 用户获取一首歌
     */
    getSong(data){
        return request.get('/user/getSong',data)
    },

    /**
     * 用户注册
     */
    regist(data){
        return request.post('/user/regist',data)
    }

}

export default user