// axios基础封装
import { useUserStore } from '@/stores/userStore'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'//不能useRouter,useRouter必须在setup函数或组件中调用，因为它是依赖于Vue的注入机制
// 这里因为拦截器通常是在Vue应用上下文之外执行的，所以不能直接使用useRouter。在这种情况下，我们可以直接导入创建的路由实例
const httpInstance = axios.create({
    baseURL: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 10000
})

// const httpInstance2=axios.create({
//     baseURL:'url2',
//     timeout:5000
// })
// 拦截器
// 请求拦截器
httpInstance.interceptors.request.use(config => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`//常见的JWT认证方式
    }
    return config
}, e => Promise.reject(e))
// 响应式拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    // 配置统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.msg//返回的数据里面要有
    })
    const userStore = useUserStore()
    
    // 401token失效处理
    if (e.response.status === 401) {
        userStore.clearUserInfo()
        router.replace({
            path: '/login'
        })
    }
    return Promise.reject(e)
})
export default httpInstance