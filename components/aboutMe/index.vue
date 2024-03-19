<script setup lang="ts">
import GradientImg from "assets/icons/GradientImg";
import resumePath from "assets/DamolaTaiwo.pdf";
import ArrowDown from "assets/icons/ArrowDownIcon";

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = resumePath;
  link.download = "DamolaTaiwo.pdf";
  link.click();
};
</script>

<template>
  <section id="about-me" class="lg:-mt-28 mt-20  w-full ">
    <div class="mix-blend-hard-light"><gradient-img /></div>
    <div
      class="flex lg:flex-row flex-col lg:justify-between lg:items-start items-center pt-8 mt-12 lg:pt-0 lg:mt-0 lg:px-10 lg:mx-20 lg:gap-x-10"
    >
      <div class="relative mx-6">
        <div
          class="img-frame rounded-b bg-primary lg:mt-28 mt-14 opacity-35 lg:h-[300px] h-[237px] lg:w-[455px] w-[350px] z-0"
        ></div>
        <nuxt-img
          class="z-40 absolute w-[300px] lg:w-[400px] lg:ml-4 -top-20 lg:-top-24 lg:mt-3 ml-6 lg:mx-0"
          src="/images/Deejarh.png"
        />
      </div>
      <div
        class="w-full lg:max-w-[700px] lg:px-14 lg:ml-10 px-6 mt-8 text-sm lg:text-base"
      >
        <h1 class="lg:mb-4 header-font my-4 lg:my-0">About Me</h1>
        <p class="lg:pt-4">
          I possess excellent people skills which allows me to effectively
          communicate, collaborate and build positive relationships with others.
        </p>
        <p class="mt-4 lg:mt-4">
          I am a highly proficient frontend developer with over three years of
          invaluable experience in the fintech/credit Industry, consistently
          delivering exceptional user experiences for a range of web
          applications. I have successfully harnessed an impressive array of
          cutting-edge technologies, including VueJs, React, JavaScript,
          Typescript, GraphQL, REST, NodeJs,Tailwind CSS, and HTML, to fulfill
          complex functional requirements across a diverse spectrum of
          Fintech/credit products.
        </p>
     
        <p class="mt-4 lg:mt-4">
          I have great aspirations and firmly believe that "lady luck favors the
          one who tries".
        </p>
        <p class="my-4 lg:my-4">
          In my funtime, i catch up on latest trends in fashion. I love nature,
          so i find myself always wanting to visit the beach to enjoy the cool
          breeze and appreciate nature.
        </p>
        <div
          @click="downloadResume"
          class="border hover:bg-primary hover:bg-opacity-30 text-xs rounded-full px-4 py-3 mt-8 w-44 lg:w-48 flex items-center justify-center cursor-pointer font-oxygen gap-2"
        >
          Download Resume <span><arrow-down /></span>
        </div>
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
  border-image: radial-gradient(circle, #ffffff 100%, #c9c9c9 0%);
}
</style>
