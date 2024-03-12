
<script setup lang="ts">

import UpArrow from "@/assets/icons/UpArrow";

const projects = ref([
  {
    title: "Deejarh Bot",
    imgUrl: "/images/Bot.png",
    description:
      "Explore my life and career journey interactively with this Nuxt.js and TypeScript-powered chatbot.Utilizing OpenAI API, it responds to inquiries about my experiences, offering insights and reflections. Engage in a personalized, conversational exploration of my professional trajectory.",
    url: "https://deejarhbot.netlify.app/",
    tools: ["Nuxt", "Typescript", "NodeJS", "vue", "Html", "CSS", "firebase"],
  },
  {
    title: "Drag and Drop Trello Clone",
    imgUrl: "/images/Bot.png",
    description:  "Experience the convenience of organization with my Nuxt-powered Trello clone. Mimicking Trello's core functionalities, this intuitive app allows seamless drag-and-drop task management. Effortlessly create, organize, and prioritize tasks in a user-friendly interface, enhancing productivity and collaboration.",
    url: "https://deejarh-trello-clone.netlify.app/",
    tools: ["Nuxt", "Typescript", "vue", "Html", "CSS", "vueUse"],
  },
]);
</script>

<template>
  <section id="work" class="mt-14 mx-32">
    <h1 class="header-font my-12">My Work</h1>
    <div>
      <div v-for="project in projects" :key="project.title">
        <div
          class="flex shadow-transparent hover:shadow-xl p-6 rounded-3xl items-center text-gray-1 my-12 border border-gray-3 border-opacity-25"
        >
          <nuxt-img :src="project.imgUrl" class="" />
          <div class="px-6">
            <h3 class="font-bold my-4 font-urbanist">{{ project.title }}</h3>
            <p class="my-3">{{ project.description }}</p>
            <div class="flex gap-x-3 text-xs capitalize my-3">
              <div
                v-for="(tool, index) in project.tools"
                :key="index"
                class="px-3 py-1 rounded-full bg-gray-2 bg-opacity-20"
              >
                {{ tool }}
              </div>
            </div>

            <div > <a class="flex items-center my-5 " :href="project.url" target="_blank">Explore <span><up-arrow/></span> </a>  </div>
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
