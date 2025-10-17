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