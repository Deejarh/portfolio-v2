<script setup lang="ts">
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
  <section id="about-me" class="2 -mt-12 w-full">
    <div class="w-full">
      <nuxt-img
        src="/images/GradientDark.png"
        class="w-full lg:h-44 h-20 xl:h-56"
        alt="icon"
      />
    </div>
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
          alt="Damola Taiwo's picture"
        />
      </div>
      <div
        class="w-full lg:max-w-[700px] lg:px-14 lg:ml-10 px-6 mt-4 text-sm lg:text-base"
      >
        <h1 class="lg:mb-4 header-font my-4 lg:my-0">About Me</h1>
        <p class="lg:pt-2">
          I am a highly skilled software engineer with over four years of
          experience in the fintech and credit industries, consistently
          delivering exceptional user experiences with a strong emphasis on
          <strong> performance </strong>, <strong> accessibility</strong>, and <strong>responsiveness</strong>. I have successfully
          harnessed an impressive array of cutting-edge technologies, including
          JavaScript,Typescript, VueJs, React, NodeJs, GraphQL, REST, CSS, and
          HTML, to fulfill complex functional requirements across a diverse
          spectrum of Fintech/credit products.
        </p>

        <p class="mt-4 lg:mt-4">
          I possess excellent people skills which allows me to effectively
          communicate, collaborate and build positive relationships with
          others.I have great aspirations and firmly believe that
          <q class="italic">lady luck favors the one who tries</q> .
        </p>
        <p class="my-4 lg:my-4">
          In my funtime, i catch up on latest trends in fashion. I love nature,
          so i find myself always wanting to visit the beach to enjoy the cool
          breeze and appreciate nature.
        </p>
        <div
          @click="downloadResume"
          class="border dark:text-white dark:hover:bg-gray-3 dark:bg-white dark:bg-opacity-10 dark:border-gray-3 hover:bg-primary hover:bg-opacity-30 text-xs rounded-full px-4 py-3 mt-6 w-44 lg:w-48 flex items-center justify-center cursor-pointer font-oxygen gap-2"
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
