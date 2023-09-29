<script setup>
import { RouterLink } from 'vue-router'
import {ref} from 'vue'
//เก็บข่าว
const travelList = ref([
{link:'ANewsCard',name: 'Treespresso cafe',
price: 80,
size: { s: 80, m: 150, l: 200 },
img: 'https://www.ryoiireview.com/upload/article/202304/1681731156_d018557a4a10aed6c8f450ad0db6d60d.jpg',
decipe : 'คาเฟ่ย่านสถานีรถไฟค่ะ ร้านนี้บรรยากาศดีมากก อยู่ใต้ต้นร่มใหญ่มีความร่มรื่น เขียวขจี ตัวร้านจะมีเน้นโทนไม้ ให้ความรู้สึกอบอุ่น มีความผ่อนคลาย จะมานั่งพักผ่อนชิลๆ ก็เหมาะ หรือจะมาถ่ายก็ดีงามสุดๆ! ในส่วนของเมนูทางร้านก็จัดเต็มค่ะ มีครบทั้งอาหารจานหลัก ของหวาน และเครื่องดื่มเช่น orange tea, ชุดอาหารเช้า, ฮันนี่โทสต์ ',
timeOpen : 'เปิดบริการ : 08.30-18.00 น.',
dayClose :'เปิดทุกวัน'},
{link:'News2',name:'Polaris Sunrise Café',
price:120,
size:{s:80,m:150,l:200},
img:"https://www.ryoiireview.com/upload/article/202304/1681733919_1dc9da5619cecf386917f0533fd4ce31.jpg",
decipe : 'บรรยากาศดีสไตล์มินิมอล แถมรายล้อมด้วยต้นไม้เขียวขจี บรรยากาศดีมากก ที่นั่งมีทั้งโซน indoor และ outdoor จะมุมไหนก็น่านั่งค่ะ ทั้งต้นไม้ น้ำตก และลำธาร แถมทางร้านยังมีปลั๊กพร้อมให้บริการสำหรับคนมองหาที่ทำงานด้วยนะ! สำหรับเมนูของทางร้านก็ครบครัน ทั้งอาหารจานเดียว อาหารเช้า ของทานเล่น เบเกอรี และเครื่องดื่มมากมาย',
timeOpen : 'เปิดบริการ : 07.30-17.00 น.',
dayClose :'เปิดทุกวัน'},
{link:'News3',name:'MOJI Pool.Villa.icecream ',
price:150,
size:{s:120,m:180,l:250},
img:"https://www.ryoiireview.com/upload/article/202304/1681732797_e6ba6dfb2985ae2d0acbfe4e02e938b4.jpg",
decipe : 'คาเฟ่สุดคิวววท์ที่เพิ่งเปิดใหม่ ร้านนี้ตกแต่งออกมาได้น่ารักมากก โดยจะตกแต่งออกมาในสไตล์ญี่ปุ่น เหมือนยกญี่ปุ่นมาไว้ที่เชียงใหม่ บอกเลยว่ามีมุมให้ถ่ายรูปเพียบ! ในส่วนของเมนูก็เอาใจคนรักของหวาน มีทั้งเครื่องดื่มสตล์ญี่ปุ่น, ไอศกรีมโฮมเมดสไตล์ญี่ปุ่น รสอร่อยแบบสุดครีเอทจากวัตถุดิบธรรมชาติ 100%',
timeOpen : 'เปิดบริการ : 11.00-18.00 น.',
dayClose :'ปิดวันจันทร์'},
{link:'News4',name:'Kramfeine',
price:100,
size:{s:120,m:160,l:220},
img:"https://www.ryoiireview.com/upload/article/202304/1681715844_d21d365be6d7d62ca60369c9659a60f2.jpg",
decipe : 'คาเฟ่ที่มาในบรรยากาศสบายๆ และมีเมนูเอาใจคนรักกาแฟสุดๆ เพราะทางร้านจะมีเมล็ดกาแฟให้ลูกค้าสามารถเลือกได้ตามความชอบทั้งเมล็ดกาแฟแบบคั่วอ่อน คั่วกลาง และคั่วเข้มค่ะ แต่ที่นี่ไม่ได้มีดีแค่กาแฟเท่านั้น! ยังมีเมนูอาหาร และเบเกอรีที่เป็นสูตรของทางร้านเองสไตล์โฮมเมดอีกด้วยค่ะ',
timeOpen : 'เปิดบริการ : 08.30-16.30 น.',
dayClose :'ปิดวันอังคาร'},
{link:'News5',name:'Millilit Cafe',
price:90,
size:{s:110,m:150,l:210},
img:"https://www.ryoiireview.com/upload/article/202304/1681716120_0eb16eb4a1bf3b689ed1a5f3431b2912.jpg",
decipe : 'คาเฟ่ที่มาในบรรยากาศเก๋สุดๆ แต่จะเปลี่ยนธีมร้านไปเรื่อยๆ อีกด้วยล่ะค่ะ สำหรับร้านนี้ถือว่าเป็นคาเฟ่ที่เอาใจสายหวานอย่างเมนูโกโก้โคตรเข้มข้น ที่จะมีให้เลือกคนข้นถึงสามระดับด้วยกัน ทั้ง Dark Medium และ Light ค่ะ บอกเลยว่ามาร้านนี้แล้วต้องมาและนอกจากนี้ก็ยังมีเมนูอื่นๆอีกมากมาย',
timeOpen : 'เปิดบริการ : 07.30-18.00 น.',
dayClose :'เปิดทุกวัน'},
{link:'News6',name:'Soul Café mju',
price:90,
size:{s:110,m:150,l:210},
img:"https://www.ryoiireview.com/upload/article/202207/1658477803_032b2cc936860b03048302d991c3498f.jpg",
decipe : 'คาเฟ่บรรยากาศน่านั่งอีกหนึ่งร้านที่มีเมนูเบเกอรีสไตล์ Homemade ราคาสบายกระเป๋า รสชาติดีเกินราคา ในย้านแม่โจ้นักศึกษาแม่โจ้ห้ามพลาด มีเมนูให้เลือกทานมากมายเลย นอกจากนี้ก็ยังมีเมนูเครื่องดื่มอีกด้วย และถ้าใครที่เป็นสายกาแฟ บอกเลยว่าร้านนี้ไม่ควรพลาด',
timeOpen : 'เปิดบริการ : 08.00-18.00 น.',
dayClose :'เปิดทุกวัน'},
]);


</script>
<template>
    <div>
    <div class="row mb-2">
     <div class="col-md-6" v-for="(n,index) in travelList" :key="index" >
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary-emphasis">World {{index+1 }}</strong>
          <h3 class="mb-0">{{ n.name }}</h3>
          <div class="mb-1 text-body-secondary">{{ n.timeOpen }}</div>
          <p class="card-text mb-auto">{{n.decipe}}</p>
          <RouterLink :to="n.link" class="icon-link gap-1 icon-link-hover stretched-link">
            Continue reading {{ n.name }}
            <svg class="bi"><use xlink:href="#chevron-right"/></svg>
          </RouterLink>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img :src="n.img" alt="Thumbnail" width="200" height="250" />

        </div>
      </div>
    </div>
    </div>
</div>
</template>