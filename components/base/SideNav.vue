<template>
    <nav
      class="fixed capitalize right-8 top-28  rounded-3xl dark:bg-black   bg-white w-5/6  z-50   py-4 flex flex-col justify-center items-center  shadow-md"
    >
      <div>
        <ul>
          <li
            v-for="link in navLinks"
            :key="link.label"
            @click="$emit('closeSideNav')"
          >
            <NuxtLink
              :to="link.to"
              class="block   text-center text-base dark:text-black-1  text-gray-3 hover:bg-gray-1 hover:bg-opacity-30 hover:rounded-full  py-4 px-5 "
              
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>


        <!-- <li
        class="flex   hover:bg-gray-100 px-5 py-4 "
      >
        <p class="">Switch Mode</p>
      </li> -->
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref, watch } from "vue";
  import { useRouter, useRoute } from "vue-router";

  
  const router = useRouter();
  const route = useRoute();
  const emit = defineEmits<{
    (e: "closeSideNav"): void;
  }>();
  function closeSideNav() {
    emit("closeSideNav");
  }

  const navLinks = ref([
  {
    label: "About",
    to: "/#about-me",
  },
  {
    label: "Work",
    to: "/#work",
  },
  {
    label: "Contact",
    to: "/#contact",
  },
]);
  const isActive = ref("");
  
  watch(
    [() => route.to, () => route.hash],
    async ([to, hash]) => {
      await router.isReady();
      isActive.value = hash || to;
    },
    { immediate: true },
  );
  </script>
  
  <style scoped>
  .header-container {
    background: rgba(227, 225, 225, 0.25);
  }
</style>
  