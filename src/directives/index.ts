import { useIntersectionObserver } from '@vueuse/core'

// 通过插件的方法把懒加载指令封装为插件，main.js入口文件只需要负责注册插件即可
export const lazyPlugin = {
    install(app) {
         
        app.directive('img-lazy', { //使用时 v-img-lazy=""
            mounted(el, binding) {
                //el 指指令绑定的那个元素 img
                // binding:binding.value 指令等号后面绑定的表达式的值 图片url
                console.log(el, binding.value)
                const {stop}=useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()//在监听图片第一次加载完成之后就停止监听
                        }
                    }
                )
            }
        })
    }
}