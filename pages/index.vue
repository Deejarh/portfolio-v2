<script setup lang="ts">
import ArrowUp from "@/assets/icons/ArrowUpIcon";

const show = ref(false);

const handleScroll = () => {
  show.value = window.scrollY > 100;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <main class="custom-max-width overflow-hidden overscroll-x-none">
    <hero-section />
    <about-me class=" " />
    <my-skills />
    <my-work />
    <contact />
    <div v-if="show" @click="scrollToTop" class="fixed-arrow">
      <arrow-up />
    </div>
  </main>
</template>

<style scoped>
.fixed-arrow {
  position: fixed;
  bottom: 20px;
  right: 10px;
  background-color: #ffc1c9;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 99999;
}
</style>
