<script setup lang="ts">
import mixpanel from 'mixpanel-browser' 

const projectToken = ref(process.env.NUXT_PROJECT_TOKEN)
mixpanel.init(projectToken, { track_pageview: true, ignore_dnt: true,});
mixpanel.set_config({ persistence: "localStorage" });
const appDescription = "Badmus Damola Taiwo is a highly proficient frontend developer with over three years of invaluable experience in the fintech/credit Industry, consistently delivering exceptional user experiences for a range of web applications"

mixpanel.track_pageview()
definePageMeta({
  colorMode: 'dark',
})
useHead({
  htmlAttrs: {
      lang: 'en'
    },
      title: 'Badmus Damola Taiwo',
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