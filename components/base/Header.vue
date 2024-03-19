<script setup>
import DeejarhLogo from "@/assets/icons/DeejarhLogo.vue";
import DarkIcon from 'assets/icons/DarkIcon'
import HamburgerIcon from '@/assets/icons/HamburgerIcon'
import SideNav from '@/components/base/SideNav'
import CloseIcon from 'assets/icons/CloseIcon'



const showSidenav = ref(false);
const isActive = ref("");

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

const toggleSideNav = () => {
  showSidenav.value = !showSidenav.value;
};
</script>

<template>
  <header
    class="header-container custom-max-width backdrop-blur-[14px]  flex justify-between  items-center h-[71px]  lg:h-[86px] rounded-full px-6 border font-oxygen  shadow"
  >
    <NuxtLink to="/#hero">
      <deejarh-logo class=" cursor-pointer mx-4" />
    </NuxtLink>
    <div class="flex  items-center gap-4 md:gap-8 mx-4">
    <nav class="">
      <ul class="flex gap-8 max-md:hidden">
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

      <div
      class="md:hidden cursor-pointer "
      @click="toggleSideNav"
    >
      <close-icon  v-if="showSidenav"   />
   <hamburger-icon v-else  />
    </div>
    </nav>
    <div v-if="showSidenav" class="lg:hidden ">
      <side-nav @close-side-nav="toggleSideNav" />
    </div>
    <!-- <dark-icon/> -->
</div>

  </header>
</template>

<style lang="scss" scoped>
.header-container {
  background: rgba(227, 225, 225, 0.25);
  border-image: radial-gradient(circle at center, rgba(118, 115, 115, 0.5), rgba(188, 179, 179, 0)) 1;
}
</style>
