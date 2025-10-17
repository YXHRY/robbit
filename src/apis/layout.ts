import httpInstance from '@/utils/http.ts'
export default function getCategoryAPI(){
    return httpInstance({
        url:'/home/category/head'
    })
}