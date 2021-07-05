export const user = {
    state:{
        token:localStorage.getItem || ''
    },
    getters:{

    },
    mutations:{
        save_token(state,query){
            localStorage.setItem("token",query.token)
            state.token = localStorage.getItem("token")
        },
        
        clear_token(state){
            localStorage.removeItem("token")
            state.token = localStorage.getItem("token")
        }
    },
    actions:{

    }
}