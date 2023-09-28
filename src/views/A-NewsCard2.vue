<script setup>

 import {ref} from 'vue'
//เก็บข่าว
 const travelList = ref([
 //{name:'WTF Coffee Camp ', price: 80,img:"https://gangtravel.com/upload/2022/01/2-7.jpg.webp"},
   {name:'สุขพอดี Simply Happy',price: 120,img:"https://gangtravel.com/upload/2022/01/6-1_800x503.jpg.webp"},
   //{name:'กำปอ kam Por',price: 150,img:"https://gangtravel.com/upload/2022/01/11_800x450-2.jpg.webp"},
   //{name:'ผลิ Phli',price: 120,img:"https://www.paiduaykan.com/travel/wp-content/uploads/2022/01/1-SON09405.jpg"},
   //{name:'undo studio',price: 150,img:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/undo-studio1.jpg"},
 // {name:'yellow cup',price: 100,img:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/yellow-cup1.jpg"}
 ])
//  function onecard(
  
//  )
// v-for="(n,index) in travelList" :key="index"
</script>

<template>
    <div>
    <div class="row mb-2">
    <div class="col" v-for="(n,index) in travelList" :key="index" >
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">World {{ index+1 }}</strong>
          <h3 class="mb-0"><strong>ชื่อร้าน</strong>{{ n.name }}</h3>
          <div class="mb-1 text-body-secondary">Nov 12</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <!-- <RouterLink :to="{name: 'news', params:{ id :n }}" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading {{ n }}
            <svg class="bi"><use xlink:href="#chevron-right"/></svg>
          </RouterLink> -->
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    </div>
</div>
</template>