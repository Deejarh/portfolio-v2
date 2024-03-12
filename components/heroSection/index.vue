 <script setup lang="ts">
    import DeejarhJSON from '@/assets/lottie/deejarh.json'
</script>


<template>
  <section id="hero" class="relative lg:h-screen   ">
    <!-- <div class=" flex justify-center items-center h-auto    bg opacity-30  bg-blend-difference"></div> -->
    <div class=" flex lg:mt-24 mt-28  justify-center   w-full items-center  ">
    <div class=" hero-section flex flex-col justify-center items-center gap-2  sm:mb-6">
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
            <h1 class=" text-color font-extrabold lg:text-6xl text-3xl font-urbanist "> I'm Badmus Damola Taiwo</h1>
            <p class=" text-color font-overlock sm:text-xs"> Empowering the web, One line of code at a time.</p>
             <div class=" lg:mt-6 mt-16 w-[76px] h-[73px]"><img src="assets/HeroScroll.gif"></div>
         
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