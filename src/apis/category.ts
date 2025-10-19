import httpInstance from "@/utils/http";
export const getCategoryAPI =(id:string)=>{
    return httpInstance(
       {
        url:'/category',
        params:{//后端要求query参数（查询参数）axios会自动将怕rams对象转换为查询字符串并拼接到url上
            id:id
        }
       }
    )
}
export const getCategoryFilterAPI =(id)=>{
    return httpInstance({
        url:'/category/sub/filter',
        params:{
            id
        }
    })
}
/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpInstance({
    url:'/category/goods/temporary',
    method:'POST',
    data
  })
}