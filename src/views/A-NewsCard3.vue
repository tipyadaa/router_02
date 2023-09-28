<script setup>
import BlogHeader from '../views/BlogHeader.vue';
 import {ref} from 'vue'

 const travelList = ref([

  {name:'MOJI Pool.Villa.icecream',
  price: 150,
  img:"https://www.ryoiireview.com/upload/article/202304/1681732797_e6ba6dfb2985ae2d0acbfe4e02e938b4.jpg",
  decipe : 'คาเฟ่สุดคิวววท์ที่เพิ่งเปิดใหม่ ร้านนี้ตกแต่งออกมาได้น่ารักมากก โดยจะตกแต่งออกมาในสไตล์ญี่ปุ่น เหมือนยกญี่ปุ่นมาไว้ที่เชียงใหม่ บอกเลยว่ามีมุมให้ถ่ายรูปเพียบ! ในส่วนของเมนูก็เอาใจคนรักของหวาน มีทั้งเครื่องดื่มสตล์ญี่ปุ่น, ไอศกรีมโฮมเมดสไตล์ญี่ปุ่น รสอร่อยแบบสุดครีเอทจากวัตถุดิบธรรมชาติ 100%, โมจิปั้นสดไส้สตรอว์เบอร์ และเลม่อนเค้ก',
timeOpen : 'เปิดบริการ : 11.00-18.00 น.',
dayClose :'ปิดวันจันทร์'},
  
])

//  function onecard(
  
//  )
// v-for="(n,index) in travelList" :key="index"
</script>


<template>
  <div>
  <div class="row mb-2">
    <BlogHeader></BlogHeader>
  <div class="col-md-10" v-for="(n,index) in travelList" :key="index" >
    
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