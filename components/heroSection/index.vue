 <script setup lang="ts">
    import DeejarhJSON from '@/assets/lottie/deejarh.json'
    import HeroImage from 'assets/icons/HeroImage'
</script>


<template>
  <section class=" h-screen ">
    <div class=" relative flex justify-center items-center h-full  -mt-28 "><hero-image/></div>
    <div class=" absolute   top-52 w-full items-center pr-8 ">
    <div class=" hero-section flex flex-col justify-center items-center ">
        <client-only>
            <Vue3Lottie
              :animation-data="DeejarhJSON "
              :loop="true"
              :autoPlay="true"
              :width="200"
              :height="200"
            />
        </client-only>
    
            <div class=" greetings   text-sm px-5 mt-6 py-1 rounded-full border border-gray-200">👋 Hi </div>
            <h1 class=" font-extrabold text-6xl"> I'm Damola Taiwo</h1>
            <p> Empowering the web, One line of code at a time.</p>
            <div></div>
         
    </div>
  </div>
  </section>
</template>

<style scoped>
.greetings {
  background: rgba(123, 74, 226, 0.1);

}
</style>