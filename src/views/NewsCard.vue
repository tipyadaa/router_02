<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
//เก็บข่าว
const travelList = ref([
{link:'ANewsCard',name:'WTF Coffee Camp ', price: 80,img:"https://gangtravel.com/upload/2022/01/2-7.jpg.webp"},
  {link:'news2',name:'สุขพอดี Simply Happy',price: 120,img:"https://gangtravel.com/upload/2022/01/6-1_800x503.jpg.webp"},
  {link:'news3',name:'กำปอ kam Por',price: 150,img:"https://gangtravel.com/upload/2022/01/11_800x450-2.jpg.webp"},
  {link:'news4',name:'ผลิ Phli',price: 120,img:"https://www.paiduaykan.com/travel/wp-content/uploads/2022/01/1-SON09405.jpg"},
  {link:'news5',name:'undo studio',price: 150,img:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/undo-studio1.jpg"},
  {link:'news6',name:'yellow cup',price: 100,img:"https://www.paiduaykan.com/travel/wp-content/uploads/2020/10/yellow-cup1.jpg"}
])
</script>
<template>
    <div>
    <div class="row mb-2">
     <div class="col-md-6" v-for="(n,index) in travelList" :key="index" >
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">World {{index+1 }}</strong>
          <h3 class="mb-0">{{ n.name }}</h3>
          <div class="mb-1 text-body-secondary">25/09/2023{{ n.price }}</div>
          <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          <RouterLink :to="n.link" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading {{ n.name }}
            <svg class="bi"><use xlink:href="#chevron-right"/></svg>
          </RouterLink>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>
    </div>
    </div>
</div>
</template>