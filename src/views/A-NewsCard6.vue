<script setup>
 import {ref} from 'vue'
 import BlogHeader from '../views/BlogHeader.vue';

 const travelList = ref([

  {name:'Soul Café mju',
  price: 100,
  img:"https://www.ryoiireview.com/upload/article/202207/1658477803_032b2cc936860b03048302d991c3498f.jpg",
  decipe : 'คาเฟ่บรรยากาศน่านั่งอีกหนึ่งร้านที่มีเมนูเบเกอรีสไตล์ Homemade ราคาสบายกระเป๋า รสชาติดีเกินราคา ในย้านแม่โจ้นักศึกษาแม่โจ้ห้ามพลาด มีเมนูให้เลือกทานมากมายเลย นอกจากนี้ก็ยังมีเมนูเครื่องดื่มอีกด้วย และถ้าใครที่เป็นสายกาแฟ บอกเลยว่าร้านนี้ไม่ควรพลาด',
timeOpen : 'เปิดบริการ : 08.00-18.00 น.',
dayClose :'เปิดทุกวัน'
}
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