import { ca, el } from "element-plus/es/locales.mjs";
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./userStore";
import { addCartAPI,getCartAPI ,delCartAPI} from "@/apis/cart";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    // const i=ref(22)
    const userStore=useUserStore()
    const upCart= async ()=>{
            const res=await getCartAPI();
            cartList.value=res.result
    }
    const clearCartList=()=>{
        cartList.value=[]
    }
    const addCart = async (goods) => {
        if(userStore.userInfo.token){
            await addCartAPI(goods.skuId,goods.count);
            upCart()
        }else{
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
            item.count += goods.count
        } else {
            cartList.value.push(goods)
        }
        }
    }
    const delCart = async (id) => {
       if(userStore.userInfo.token){
            await delCartAPI([id])
            upCart()
       }else{
         const i = cartList.value.findIndex((item) => item.skuId === id)
        cartList.value.splice(i, 1)

       }
    }
    const changeSelectCart = (id) => {
        const item = cartList.value.find((item) => id === item.skuId)
        item.selected = !item.selected

    }
    // const allNum=computed(()=>{
    //     let num=0;
    //     cartList.value.forEach(element => {
    //         num+=element.count
    //     })
    //     return num
    // })
    const allNum = computed(() => cartList.value.reduce((num, item) => num + item.count, 0))
    // const allPrice=computed(()=>{
    //     let price=0;
    //     cartList.value.forEach(e=>{
    //         price+=e.price*e.count
    //     })
    //     return price
    // })
    const allPrice = computed(() => cartList.value.reduce((price, item) => price + item.price * item.count, 0))
    const isAllSelect = computed(() => cartList.value.every((e) => e.selected))
    const changeAllSelect = (selected) => {
        cartList.value.forEach(e => {
            e.selected = selected
        })

    }
    const selectNum = computed(() => cartList.value.filter((e)=>e.selected).reduce((num, item) => num +  item.count , 0))
    const selectPrice = computed(() => cartList.value.filter((e)=>e.selected).reduce((price, item) => price + item.price * item.count, 0))
    return { addCart, cartList, delCart, allNum, allPrice, changeSelectCart, isAllSelect, changeAllSelect, selectNum, selectPrice,clearCartList }

}, { persist: true })