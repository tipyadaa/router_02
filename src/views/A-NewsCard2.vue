<script setup>
import BlogHeader from '../views/BlogHeader.vue';
 import {ref} from 'vue'
//เก็บข่าว
const travelList = ref([

  {name:'Polaris Sunrise Café',
  price: 120,
  img:"https://www.ryoiireview.com/upload/article/202304/1681733919_1dc9da5619cecf386917f0533fd4ce31.jpg",
  decipe : 'บรรยากาศดีสไตล์มินิมอล แถมรายล้อมด้วยต้นไม้เขียวขจี บรรยากาศดีมากก ที่นั่งมีทั้งโซน indoor และ outdoor จะมุมไหนก็น่านั่งค่ะ ทั้งต้นไม้ น้ำตก และลำธาร แถมทางร้านยังมีปลั๊กพร้อมให้บริการสำหรับคนมองหาที่ทำงานด้วยนะ! สำหรับเมนูของทางร้านก็ครบครัน ทั้งอาหารจานเดียว อาหารเช้า ของทานเล่น เบเกอรี และเครื่องดื่มมากมาย',
timeOpen : 'เปิดบริการ : 07.30-17.00 น.',
dayClose :'เปิดทุกวัน'},
  
])

//  function onecard(
  
//  )
// v-for="(n,index) in travelList" :key="index"
</script>


<template>
  <div>
  <div class="row">
    <BlogHeader></BlogHeader>
  <div class="col" v-for="(n,index) in travelList" :key="index" >
    
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis">World {{ index+1 }}</strong>
        <h3 class="mb-0"><strong></strong>{{ n.name }}</h3>
        <div class="mb-1 text-body-secondary">{{ n.timeOpen }} <P>{{ n.dayClose }}</P></div>
        <p class="card-text mb-auto">{{n.decipe}}</p>

      </div>
      <br>
      <div class="col-auto d-none d-lg-block">
        <img :src="n.img" alt="Thumbnail" width="200" height="250" />

      </div>
    </div>
  </div>
  </div>
</div>
</template>