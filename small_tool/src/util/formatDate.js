export default function formatDate(date){
    date = new Date(date)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    return year + '-' + (String(month).length > 1 ? month : '0' + month)
           + '-' + (String(day).length > 1 ? day : '0' + day)
           + ' ' + (String(hour).length >1 ? hour : '0' + hour)
           + ':' + (String(minute).length > 1 ? minute : '0' + minute)
           + ':' + (String(second).length > 1 ? second : '0' + second)
}
