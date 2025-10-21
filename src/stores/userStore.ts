import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import {useCartStore} from './cartStore';
import { mergeCartAPI } from "@/apis/cart";
export const useUserStore=defineStore('user',()=>{
    const userInfo=ref({})
    const cartStore=useCartStore()
    const getUserInfo=async ({account,password})=>{
      const res= await loginAPI({
        account,password
       })
       userInfo.value=res.result
     await mergeCartAPI(cartStore.cartList.map(item=>{
        return {
          skuId:item.skuId,
          selected:item.selected,
          count:item.count
        }
      }))
    }
    const clearUserInfo=()=>{
      userInfo.value={}
      cartStore.clearCartList()

    }
    return{userInfo,getUserInfo,clearUserInfo}
},{persist:true})//开启持久化 运行机制：在设置state的时候会自动把数据同步给localstorage，在获取state数据的时候会优先从localStorage中取