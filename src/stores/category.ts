import { ref,  } from 'vue'
import { defineStore } from 'pinia'
import getCategoryAPI from '@/apis/Layout'

export const useCategoryStore = defineStore('category', () => {
  const categoryList=ref([])
const getCategory= async ()=>{
    let res=await getCategoryAPI()
    categoryList.value=res.result
}
  return { categoryList ,getCategory}
})
