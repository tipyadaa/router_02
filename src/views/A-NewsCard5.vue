<script setup>
import BlogHeader from '../views/BlogHeader.vue';
 import {ref} from 'vue'

 const travelList = ref([

  {name:'Millilit Cafe',price: 150,img:"https://www.ryoiireview.com/upload/article/202304/1681716120_0eb16eb4a1bf3b689ed1a5f3431b2912.jpg",
  decipe : 'คาเฟ่ที่มาในบรรยากาศเก๋สุดๆ แต่จะเปลี่ยนธีมร้านไปเรื่อยๆ อีกด้วยล่ะค่ะ สำหรับร้านนี้ถือว่าเป็นคาเฟ่ที่เอาใจสายหวานอย่างเมนูโกโก้โคตรเข้มข้น ที่จะมีให้เลือกคนข้นถึงสามระดับด้วยกัน ทั้ง Dark Medium และ Light ค่ะ บอกเลยว่ามาร้านนี้แล้วต้องมาและนอกจากนี้ก็ยังมีเมนูอื่นๆอีกมากมาย',
timeOpen : 'เปิดบริการ : 07.30-18.00 น.',
dayClose :'เปิดทุกวัน'},
  
])

//  function onecard(
  
//  )
// v-for="(n,index) in travelList" :key="index"
</script>


<template>
  <div>
  <div class="row mb-2">
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