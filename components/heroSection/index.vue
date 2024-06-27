<script setup lang="ts">
import DeejarhJSON from "@/assets/lottie/deejarh.json";

const heroImage = ref({
  title: "Hero image",
  url: "/images/HeroLight.png",
});
</script>

<template>
  <section
    id="hero"
    class="  h-screen flex justify-center items-center"
  >
    <!-- <nuxt-img :src="heroImage.url" class=" max-md:rounded-t-3xl " /> -->
    <!-- <div class=" flex justify-center items-center h-auto    bg opacity-30  bg-blend-difference"></div> -->

    <div class="flex justify-center w-full items-center">
      <div
        class="hero-section flex flex-col justify-center items-center gap-2 lg:mt-24 mt-20  mb-6"
      >
      <div class=" w-[210px] h-[210px]">
        <client-only>
          <Vue3Lottie
            :animation-data="DeejarhJSON"
            :loop="true"
            :autoPlay="true"
            :width="200"
            :height="200"
            speed="0.5"
          />
        </client-only>
      </div>
        <div
          class="greetings dark:text-white dark:bg-purple-4 dark:bg-opacity-10 dark:border-purple-4 dark:border-opacity-20 lg:text-sm font-semibold px-5 my-6 lg:my-4 py-1 rounded-full border border-gray-200 font-urbanist"
        >
          👋<span class="ml-2 lg:ml-1"> Hi</span>
        </div>
        <h1
          class="text-black-3 dark:text-white-1 lg:font-extrabold font-bold lg:text-6xl text-2xl font-urbanist"
        >
          I'm Badmus Damola Taiwo
        </h1>
        <p
          class="text-black-3 dark:text-black-1 font-overlock text-xs xl:text-sm lg:text-sm lg:-mt-1"
        >
          Crafting impactful web application, one line of code at a time.
        </p>
        <div class="lg:mt-8 mt-10 ">
          <NuxtLink to="#about-me" aria-label="About me"
            ><img src="assets/HeroScroll.gif" class=" w-20 h-20" alt="Arrow down gif"
          /></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.greetings {
  background: rgba(123, 74, 226, 0.1);
}


.text-color {
  color: rgba(44, 45, 63, 1);
}
</style>
