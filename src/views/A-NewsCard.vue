<script setup>
 import BlogHeader from '../views/BlogHeader.vue';

 import {ref} from 'vue'
//เก็บข่าว
const travelList = ref([
{name:'Treespresso cafe ', 
price: 80,
img:"https://www.ryoiireview.com/upload/article/202304/1681731156_d018557a4a10aed6c8f450ad0db6d60d.jpg",
decipe : 'คาเฟ่ย่านสถานีรถไฟค่ะ ร้านนี้บรรยากาศดีมากก อยู่ใต้ต้นร่มใหญ่มีความร่มรื่น เขียวขจี ตัวร้านจะมีเน้นโทนไม้ ให้ความรู้สึกอบอุ่น มีความผ่อนคลาย จะมานั่งพักผ่อนชิลๆ ก็เหมาะ หรือจะมาถ่ายก็ดีงามสุดๆ! ในส่วนของเมนูทางร้านก็จัดเต็มค่ะ มีครบทั้งอาหารจานหลัก ของหวาน และเครื่องดื่มเช่น orange tea, ชุดอาหารเช้า, ฮันนี่โทสต์ ',
timeOpen : 'เปิดบริการ : 08.30-18.00 น.',
dayClose :'เปิดทุกวัน'},
 
])

//  function onecard(
  
//  )
// v-for="(n,index) in travelList" :key="index"
</script>


<template>
  <div >
  <div class="row mb-2 ">
    <BlogHeader></BlogHeader>
  <div class="col" v-for="(n,index) in travelList" :key="index" >
    
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-center">
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis justify-content-center" >World {{ index+1 }}</strong>
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