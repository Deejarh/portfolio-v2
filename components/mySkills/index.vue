<script setup lang="ts">
const buttons = ref([
  {
    name: "HTML",
    url: "/images/Html.png",
  },
  {
    name: "CSS 3",
    url: "/images/Css.png",
  },
  {
    name: "JAVASCRIPT",
    url: "/images/JavaScript.png",
  },
  {
    name: "VUE JS",
    url: "/images/Vue.png",
  },
  {
    name: "GIT",
    url: "/images/Git.png",
  },
  {
    name: "REST API",
    url: "/images/Rest.png",
  },
  {
    name: "NUXT",
    url: "/images/Nuxt.png",
  },
  {
    name: "REACT",
    url: "/images/React.png",
  },
  {
    name: "GRAPHQL",
    url: "/images/Graphql.png",
  },
  {
    name: "POSTGRESQL",
    url: "/images/PostGress.png",
  },
]);
</script>

<template>
  <section id="skills" class=" my-20 mx-32">
    <div
      class="bg-no-repeat font-passion relative h-[300px] bg-purple bg-cover img-frame rounded-3xl border"
    >
      <div class="overlay rounded-3xl"></div>
      <h4 class="text-gray-1 font-bold text-opacity-40 font-oxygen text-xs flex justify-center my-9 items-center">
        I AM SKILLED IN
      </h4>
      <div class="flex gap-7 items-center mb-6 justify-center  cursor-text">
        <div
          class="bg-gray-300 px-5 py-4 border border-opacity-60 text-black-1  border-purple-2 button hover:rounded-full z-30 rounded-xl"
          v-for="(button) in buttons.slice(0, 6)"
          :key="button.name"
        >
          <div class="font-bold flex items-center gap-3">
            <nuxt-img :src="button.url" class="" />
            <span class="uppercase text-2xl"> {{ button.name }}</span>
          </div>
        </div>
      </div>
      <div class="flex gap-7 items-center justify-center cursor-text">
        <div
          class="bg-gray-300 px-5 py-4 border text-black-1  border-opacity-60 border-purple-2 z-30 button hover:rounded-full rounded-xl "
          v-for="(button) in buttons.slice(6)"
          :key="button.name"
        >
          <div class="font-bold flex items-center gap-3">
            <nuxt-img :src="button.url" class="" />
            <span class="uppercase text-2xl"> {{ button.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.button:hover {
  color: white;
  cursor: pointer;
  background: linear-gradient(109.62deg, #181818 11.08%, #141626 90.72%);
  transition:  0.6s ease-in-out;
}
.img-frame {
  background-image: url("/images/LightCode.png");
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
