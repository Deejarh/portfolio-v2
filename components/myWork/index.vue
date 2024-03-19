
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
    title: "Omni",
    imgUrl: "/images/Omni.png",
    description: "I played a pivotal role within the team in developing 'Omni,' a versatile payment solution with business and customer user interfaces. Omni enables business owners to generate payment links with customizable forms on the Torus dashboard, streamlining transactions. Leveraging third-party payment SDKs, customers can conveniently make payments using these links.With dynamic form capabilities and an intuitive user experience, Omni revolutionizes payments for businesses and customers, providing a streamlined solution.",
    url: "https://www.torusmara.com/e-commerce",
    tools: ["vue", "Typescript", "Rest API","Html", "TailwindCSS","Payment SDK"],
  },
  {
    title: "Send Money",
    imgUrl: "/images/SendMoney.png",
    description:"Collaborated within a team of four to develop the frontend interface for 'Send-Money,' a web application facilitating seamless currency transfers. The application enables users to initiate transactions, receive real-time exchange rates, designate beneficiaries, and execute payments to Torus Mara. Integration with REST APIs ensured efficient communication with backend systems, while adherence to design principles ensured an intuitive user experience.",
    url: "https://www.torusmara.com/global-settlement",
    tools: ["vue", "Javascript", "Rest API", "Html", "TailwindCSS", "Vuex", "Element UI","Axios"],
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
  <section id="work" class="mt-14 lg:mx-32 mx-4">
    <h1 class="header-font lg:mt-12  ">Selected Projects i've worked on</h1>
    <div>
      <div v-for="project in projects" :key="project.title">
        <div
          class="flex flex-col lg:flex-row lg:shadow-transparent lg:hover:shadow-xl lg:p-6 rounded-3xl lg:items-center text-gray-1 my-12 border border-gray-3 border-opacity-25"
        >
          <nuxt-img :src="project.imgUrl" class=" max-md:rounded-t-3xl " />
          <div class="px-6">
            <h3 class="font-bold my-4 text-base font-urbanist">{{ project.title }}</h3>
            <p class="lg:my-4 my-6 text-sm">{{ project.description }}</p>
            <div class="flex flex-wrap gap-3 text-xs capitalize my-4">
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
