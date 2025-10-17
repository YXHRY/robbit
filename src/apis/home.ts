import httpInstance from '@/utils/http'
// httpInstance 是默认导出，不是按需导出，不需要加大括号
export  function getBannerAPI(params={}){//使用ES6的默认参数语法
    // 首页的轮播图为1 后端也默认为1 2为商品的轮播图
    const {distributionSite='1'}=params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
} 
export const findNewAPI=()=>{
    return httpInstance({
        url:'/home/new'
    })
}
export const findHotAPI=()=>{
    return httpInstance({
        url:'/home/hot'
    })
}
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}