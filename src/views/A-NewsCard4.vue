<script setup>
import BlogHeader from '../views/BlogHeader.vue';
 import {ref} from 'vue'

 const travelList = ref([

  {name:'Kramfeine',
  price: 120,
  img:"https://www.ryoiireview.com/upload/article/202304/1681715844_d21d365be6d7d62ca60369c9659a60f2.jpg",
  decipe : 'คาเฟ่ที่มาในบรรยากาศสบายๆ และมีเมนูเอาใจคนรักกาแฟสุดๆ เพราะทางร้านจะมีเมล็ดกาแฟให้ลูกค้าสามารถเลือกได้ตามความชอบทั้งเมล็ดกาแฟแบบคั่วอ่อน คั่วกลาง และคั่วเข้มค่ะ แต่ที่นี่ไม่ได้มีดีแค่กาแฟเท่านั้น! ยังมีเมนูอาหาร และเบเกอรีที่เป็นสูตรของทางร้านเองสไตล์โฮมเมดอีกด้วยค่ะ',
timeOpen : 'เปิดบริการ : 08.30-16.30 น.',
dayClose :'ปิดวันอังคาร'},
 
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