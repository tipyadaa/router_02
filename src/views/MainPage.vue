<script setup>
import NewsCard from '../views/NewsCard.vue';
import BlogHeader from '../views/BlogHeader.vue';
import Jumbo from '../views/Jumbo.vue'
//เก็บข่าว
// const newsList = ref([
//   {title:'',content:'', dete:''}
// ])

</script>

<template>
<BlogHeader></BlogHeader>
  <Jumbo title="My Title" desc="csmju Drop tmr"></Jumbo>
     <NewsCard></NewsCard>
 <div class="row g-5">

  </div>
 
</template>