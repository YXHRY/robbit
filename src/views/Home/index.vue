<script setup lang="ts">
import HomeBanner from './components/HomeBanner.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>
<template>
<div>
   <div class="container"> 
    <home-category/>
    <home-banner/>
    </div>
    <home-new/>
    <home-hot/>
    <home-product/>
 
</div>
</template>


<style>

</style>