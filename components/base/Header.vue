<script setup>
import DeejarhLogo from "@/assets/icons/DeejarhLogo.vue";
import DarkIcon from 'assets/icons/DarkIcon'


const navLinks = reactive([
  {
    label: "About",
    to: "/#about-me",
  },
  {
    label: "Work",
    to: "/#projects",
  },
  {
    label: "Contact",
    to: "/#contact",
  },
]);
</script>

<template>
  <header
    class="header-container  flex justify-between items-center py-1 mt-8 mx-14 rounded-full px-2 border  shadow"
  >
    <NuxtLink to="/#hero">
      <deejarh-logo class=" cursor-pointer ml-2" />
    </NuxtLink>
    <div class="flex  items-center gap-8">
    <nav class="max-md:hidden">
      <ul class="flex gap-8">
        <li
          v-for="(link, index) in navLinks"
          :key="index"
          class="cursor-pointer"
        >
          <NuxtLink :to="link.to">
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <dark-icon/>
</div>

  </header>
</template>

<style lang="scss" scoped>
.header-container {
  background: rgba(227, 225, 225, 0.25);
  border-image: radial-gradient(circle at center, rgba(118, 115, 115, 0.5), rgba(188, 179, 179, 0)) 1;
}
</style>
