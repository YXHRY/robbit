import { ref, onMounted, watch } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'

export function useCategory() {
    const route = useRoute()
    const categoryData = ref({})
    const getCategory = async () => {
        const res = await getCategoryAPI(route.params.id)
        console.log(res)
        categoryData.value = res.result
    }
    onMounted(() => getCategory())
    watch(() => route.params.id, () => {
        getCategory()
    })
    // onBeforeRouteUpdate(()=>{加个to参数，to为最新的route对象
    //   getCategory()//拿不到最新的route.params
    // })
    return { categoryData, getCategory }
}