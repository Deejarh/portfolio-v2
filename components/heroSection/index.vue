 <script setup lang="ts">
    import DeejarhJSON from '@/assets/lottie/deejarh.json'
</script>


<template>
  <section class="relative h-screen  mx-44 ">
    <div class=" flex justify-center items-center h-auto    bg opacity-30  bg-blend-difference"></div>
    <div class=" absolute   top-44 w-full items-center  ">
    <div class=" hero-section flex flex-col justify-center items-center gap-2 ">
        <client-only>
            <Vue3Lottie
              :animation-data="DeejarhJSON "
              :loop="true"
              :autoPlay="true"
              :width="200"
              :height="200"
            />
        </client-only>
    
            <div class=" greetings   text-sm font-semibold px-5 mt-6 py-1 rounded-full border border-gray-200">👋 Hi </div>
            <h1 class=" text-color font-extrabold text-6xl"> I'm Damola Taiwo</h1>
            <p class=" text-color"> Empowering the web, One line of code at a time.</p>
             <div class=" mt-12 w-[76px] h-[73px]"><img src="assets/HeroScroll.gif"></div>
         
    </div>
  </div>
  </section>
</template>

<style scoped>
.greetings {
  background: rgba(123, 74, 226, 0.1);
  color: rgba(44, 45, 63, 1);

}
.bg {
  background-image: url('/images/HeroImg.png');

}
.text-color {
  color: rgba(44, 45, 63, 1);

}
</style>