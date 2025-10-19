import {ref,onMounted} from 'vue'
import {getBannerAPI} from '@/apis/home'
export default function(){
    const bannerList=ref([])
    const getBanner=async ()=>{
    const res= await getBannerAPI('2')
    console.log(res)
    bannerList.value=res.result
}
onMounted(()=>getBanner())
return {bannerList}
}