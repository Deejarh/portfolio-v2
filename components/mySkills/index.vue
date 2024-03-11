<script setup lang="ts">
import HtmlIcon from '@/assets/icons/HtmlIcon'
import JavascriptIcon from '@/assets/icons/JsIcon'
import VueIcon from '@/assets/icons/VueIcon'
import GitIcon from '@/assets/icons/GitIcon'


const buttons = ref([
  {
    name: "Html",
    icon: HtmlIcon,
  },
  {
    name: "CSS 3",
    icon: HtmlIcon,
  },
  {
    name: "Javascript",
    icon: JavascriptIcon,
  },
  {
    name: "VUE JS",
    icon: VueIcon,
  },
  {
    name: "GIT",
    icon: GitIcon,
  },
//   {
//     name: "NUXT",
//     icon: "assets/icon/HtmlIcon.vue",
//   },
//   {
//     name: "REST API",
//     icon: "assets/icon/HtmlIcon.vue",
//   },
//   {
//     name: "REACT",
//     icon: "assets/icon/HtmlIcon.vue",
//   }
]
);
</script>

<template>
  <section class="my-14 mx-32">
    <div
      class="bg-no-repeat relative h-[300px] bg-cover bg-purple img-frame rounded-3xl border"
    >
      <div class="overlay rounded-3xl"></div>
      <h4 class="text-gray-1 text-xs flex justify-center my-9 items-center">
        I AM SKILLED IN
      </h4>
      <div class="flex  gap-7 px-10">

      <div class="  bg-gray-300  px-3 py-2 rounded-2xl  " v-for="(button, index) in buttons" :key="button.name">
       
        <div class="  uppercase  text-white font-bold flex items-center gap-3  ">  {{ button.name }}</div>
      </div>
    </div>
    </div>
  </section>
</template>

<style scoped>
.img-frame {
  background-image: url("assets/LightCode.png");
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #cb98d8;
  opacity: 10%;
}
</style>
