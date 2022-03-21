import { downloadFile } from "@/api/FileApi";
import { Message } from "element-ui";
export function download(params){
    downloadFile(params).then(res => {
        if(!res.data){
            Message.error("暂无下载内容")
            return
        }
        let url = window.URL.createObjectURL(new Blob([res.data]))
        let link = document.createElement("a")
        link.style.display = "none"
        link.href = url
        link.setAttribute("download","picture.png")
        document.body.appendChild(link)
        link.click()
        // 释放URL对象
        window.URL.revokeObjectURL(url)
        // 释放节点
        document.body.removeChild(link)
       Message.success("下载完成")
    })
}