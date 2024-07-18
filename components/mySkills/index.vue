<script setup lang="ts">
const colorMode = useColorMode();
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
    name: "REACT",
    url: "/images/React.png",
  },
  {
    name: "VUE JS",
    url: "/images/Vue.png",
  },
  {
    name: "NODE",
    url: "/images/Node.png",
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
  <section id="skills" class="lg:mx-32 mt-14 mx-4">
    <div
      class="dark:border-gray border-gray border-opacity-50  dark:border-opacity-20  border bg-no-repeat font-passion relative max-md:max-w-[400px] w-full pb-3 min-h-[300px] lg:min-h-[300px] bg-purple dark:bg-[#000000] dark:bg-opacity-10 bg-cover bg-[url('/images/LightCode.png')] dark:bg-[url('/images/DarkCode.png')] rounded-3xl"
    >
      <div v-show="colorMode.preference === 'light' " class="overlay rounded-3xl"></div>
      <div v-show="colorMode.preference === 'dark' " class="overlay2 rounded-3xl"></div>
      <p
        class="text-gray-1 dark:text-black-1 font-bold text-opacity-40 font-oxygen text-xs flex justify-center my-9 items-center"
      >
        I AM SKILLED IN 
      </p>
      <div
        class="flex flex-wrap lg:gap-7 gap-3 max-md:hidden items-center mb-6 justify-center cursor-text w-full"
      >
        <div
          class="dark:border-gray dark:hover:border-purple-2 dark:border-opacity-10 dark:text-white dark:bg-gradient-to-r dark:from-[rgba(154, 154, 154, 0.1)] dark:to-[rgba(47, 50, 75, 0.1)]  px-5 py-4 border bg-gray-1 bg-opacity-20 border-opacity-60 text-black border-purple-2 button hover:rounded-full z-30 rounded-xl"
          v-for="button in buttons.slice(0, 6)"
          :key="button.name"
        >
          <div class="font-medium flex items-center gap-3">
            <nuxt-img :src="button.url" class=" w-8 h-8" alt="icon" />
            <span class="uppercase text-2xl"> {{ button.name }}</span>
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap lg:gap-7 gap-3 max-md:hidden items-center justify-center cursor-text"
      >
        <div
        class="dark:border-gray dark:hover:border-purple-2 dark:border-opacity-10 dark:text-white dark:bg-gradient-to-r dark:from-[rgba(154, 154, 154, 0.1)] dark:to-[rgba(47, 50, 75, 0.1)]  px-5 py-4 border bg-gray-1 bg-opacity-20 border-opacity-60 text-black border-purple-2 button hover:rounded-full z-30 rounded-xl"
          v-for="button in buttons.slice(6)"
          :key="button.name"
        >
          <div class="font-medium flex items-center gap-3">
            <nuxt-img :src="button.url"  class=" w-8 h-8" alt="icon" />
            <span class="uppercase text-2xl"> {{ button.name }}</span>
          </div>
        </div>
      </div>

      <!-- mobile -->
      <div
        class="flex flex-wrap gap-3 md:hidden items-center px-2 justify-center cursor-text w-full"
      >
        <div
          class="bg-gray-1 bg-opacity-20 min-w-[81px] min-h-[76px] px-3 py-2 dark:border-gray dark:hover:border-purple-2 dark:border-opacity-10 dark:text-white border border-opacity-60 text-black border-purple-2 button hover:rounded-full z-30 rounded-xl"
          v-for="button in buttons"
          :key="button.name"
        >
          <div class="font-medium flex flex-col items-center gap-3">
            <nuxt-img :src="button.url" class=" w-6 h-6" alt="icon" />
            <span class="uppercase text-xs"> {{ button.name }}</span>
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
  transition: 0.6s ease-in-out;
}
.img-frame {
  background-image: url("/images/LightCode.png");
}
.img-frame2 {
  background-image: url("/images/DarkCode.png");
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
.overlay2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 10%;
}
</style>
