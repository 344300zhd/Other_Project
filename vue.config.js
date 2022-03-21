module.exports = {   
    devServer:{        
        open:true,        
        host:'localhost',        
        port:8080,        
        https:false,        
        proxy:{    // 配置跨域                
            '/api':{                
                target:'http://127.0.0.1:8082',                
                ws:false,                
                changeOrigin:true,                
                pathRewrite:{                    
                    '^/api':''                
                }            
            }        
        }    
    }
}

