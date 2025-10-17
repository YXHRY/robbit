// axios基础封装
import axios from 'axios'
const httpInstance=axios.create({
    baseURL:'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout:10000
})
// const httpInstance2=axios.create({
//     baseURL:'url2',
//     timeout:5000
// })
// 拦截器
// 请求拦截器
httpInstance.interceptors.request.use(config=>{
    return config
},e=>Promise.reject(e))
// 响应式拦截器
httpInstance.interceptors.response.use(res=>res.data,e=>{
    return Promise.reject(e)
})
export default httpInstance