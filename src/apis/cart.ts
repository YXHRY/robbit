import httpInstance from "@/utils/http";
import { HttpStatusCode } from "axios";
export  const addCartAPI=(skuId,count)=>{
    return httpInstance({
        url:'/member/cart',
        method:'POST',
        data:{//Body参数
            skuId,count
        }
    })
}
export const getCartAPI=()=>{
    return httpInstance({
        url:'/member/cart'
    })
}
export const delCartAPI=(ids)=>{
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{
            ids
        }
    })
}
export const mergeCartAPI=(data)=>{
    return httpInstance({
        url:'/member/cart/merge',
        method:'POST',
        data
    })
}