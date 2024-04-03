<script setup lang="ts">
const appDescription = "Badmus Damola Taiwo is a highly proficient frontend developer with over three years of invaluable experience in the fintech/credit Industry, consistently delivering exceptional user experiences for a range of web applications"
definePageMeta({
  colorMode: 'dark',
})
useHead({
  htmlAttrs: {
      lang: 'en'
    },
      title: 'Badmus Damola Taiwo Website',
      meta: [
        { hid: 'description', name: 'description', content: appDescription },
      ],
  })

</script>

<template>
    <div class="min-h-screen relative">
      <base-header class="fixed top-4 left-0 right-0 m-auto  z-50" />
      <slot/>
      <base-footer />
    </div>
  </template>