 <script setup lang="ts">
    import DeejarhJSON from '@/assets/lottie/deejarh.json'
</script>


<template>
  <section id="hero" class=" lg:mt-1 lg:pt-2 mt-10 pt-8 lg:h-screen  mx-4  ">
    <!-- <div class=" flex justify-center items-center h-auto    bg opacity-30  bg-blend-difference"></div> -->
    <div class=" flex lg:mt-24 mt-20  justify-center   w-full items-center  ">
    <div class=" hero-section flex flex-col justify-center items-center gap-2  mb-2">
        <client-only>
            <Vue3Lottie
              :animation-data="DeejarhJSON "
              :loop="true"
              :autoPlay="true"
              :width="200"
              :height="200"
            />
        </client-only>
    
            <div class=" greetings   lg:text-sm font-semibold px-5 my-8 lg:my-4  py-1 rounded-full border border-gray-200 font-urbanist">👋<span class="ml-2 lg:ml-1"> Hi</span> </div>
            <h1 class=" text-color lg:font-extrabold  font-bold lg:text-6xl text-2xl font-urbanist "> I'm Badmus Damola Taiwo</h1>
            <p class=" text-color font-overlock text-xs lg:text-sm -mt-2"> Crafting impactful frontend solutions, one line of code at a time.</p>
             <div class=" lg:mt-8 mt-12 w-[76px] h-[73px]"> <NuxtLink to="#about-me"><img src="assets/HeroScroll.gif"></NuxtLink></div>
         
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