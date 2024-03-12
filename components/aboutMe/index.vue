<script setup lang="ts">
import GradientImg from "assets/icons/GradientImg";

const downloadResume = () => {
  const resumePath = '@/assets/DamolaTaiwo.pdf';
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'DamolaTaiwo.pdf';
      link.click();
}
</script>

<template>
  <section id="about-me" class=" -mt-24 w-full h-screen">
    <div class="  mix-blend-hard-light"><gradient-img /></div>
    <div class=" lg:flex justify-between items-start  px-10 mx-20 gap-x-10  ">
      <div class="relative">
          <div class=" img-frame  rounded-b  bg-primary mt-28  opacity-35 h-[352px] w-[497px] z-0 "></div>
       <img class=" z-50 absolute  -top-24 mt-3 ml-4" src="/images/Deejarh.png" />
      </div>
      <div class=" w-full max-w-[700px] px-14 ml-10 ">
        <h1 class=" mb-10 header-font">About Me</h1>
        <p class="  pt-8">
          Hi!, i'm Damola K. Badmus, a budding frontend Developer based in
          London, United Kingdom, with core strength in creating simple and
          elegant user interfaces for the web platform using technologies like
          HTML5, CSS3, Javascript and Git.Also continuously improving on my
          skills to ensure that my websites remain legible and visually
          appealing across a variety of devices.</p>
          <p class=" my-8">
          In my funtime, i catch up on
          latest trends in fashion. I love nature, so i find myself always
          wanting to visit the beach to enjoy the cool breeze and appreciate
          nature. Check out some of my Project
        </p>
        <div @click="downloadResume" class="border hover:bg-primary hover:bg-opacity-30  rounded-full py-4 px-5 mt-10 w-48 flex items-center justify-center cursor-pointer font-oxygen">Download Resume</div>
      </div>
    </div>
  </section>
</template>

<style scoped>

.img-frame {
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-image: radial-gradient(circle, #FFFFFF 100%, #C9C9C9 0%)
}
</style>
