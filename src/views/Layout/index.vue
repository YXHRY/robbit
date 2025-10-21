<script setup lang="ts">
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import {useCategoryStore} from '@/stores/categoryStore'
import {onMounted} from 'vue'
// import { storeToRefs } from 'pinia'
const categoryStore=useCategoryStore()
onMounted(()=>{
categoryStore.getCategory()
// console.log(categoryStore.categoryList,'index')
})

</script>

<template>
 <div>
     <layout-fixed/>
      <LayoutNav />
      <LayoutHeader />
      <RouterView />
      <LayoutFooter />
 </div>
</template>

<style>

</style>