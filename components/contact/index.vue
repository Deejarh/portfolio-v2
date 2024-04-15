<script setup lang="ts">
import mixpanel from "mixpanel-browser";
import ChatIcon from "@/assets/icons/ChatIcon";
import EmailIcon from "@/assets/icons/EmailIcon";
import LinkedIcon from "@/assets/icons/LinkedIn";
import GitIcon from "@/assets/icons/GitIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";

const projectToken = ref(process.env.NUXT_PROJECT_TOKEN);
mixpanel.init(projectToken, {
  debug: true,
  track_pageview: true,
  ignore_dnt: true,
});
mixpanel.set_config({ persistence: "localStorage" });
if (typeof document !== 'undefined') {
  const referrer = document.referrer;
mixpanel.track_links("#nav a", "click nav link", {
  referrer: referrer,
});
}
</script>

<template>
  <section id="contact" class="text-gray-1 lg:mt-32 pt-8 lg:pt-0 mb-10 mx-6">
    <h1
      class="flex justify-center items-center header-font mt-8 mb-14 w-full text-center"
    >
      Care to Know more about me?
    </h1>

    <div
      class="dark:text-black-1 flex justify-center lg:flex-row flex-col items-center lg:gap-20 gap-12"
    >
      <div
        class="flex items-center lg:px-4 lg:py-3 py-2 px-3 text-sm border border-gray-1 rounded-full cursor-pointer hover hover:opacity-70 hover:rounded-full"
      >
        <a
          href="https://deejarhbot.netlify.app/"
          target="_blank"
          class="cursor-pointer flex items-center gap-3"
        >
          <chat-icon /> <span>Chat with Deejarh Bot </span>
        </a>
      </div>
      <div class="lg:border-l max-md:border-t max-md:w-36 lg:h-32"></div>

      <div
        class="cursor-pointer text-start flex flex-col lg:items-start items-center gap-y-2"
      >
        <div class="flex items-center gap-3">
          <email-icon /> <span>Email:</span>
        </div>
        <p class="flex my-1">KhadijahBadmus024@gmail.com</p>
        <div id="nav" class="flex gap-x-3 items-center my-3">
          <a
            href="https://github.com/Deejarh/"
            aria-label="Git link"
            target="_blank"
            class="cursor-pointer hover:opacity-70 hover:rounded-full"
          >
            <git-icon />
          </a>
          <a
            href="https://www.linkedin.com/in/badmus-damola-taiwo-643438158/"
            aria-label="Linkedin link"
            target="_blank"
            rel="noopener noreferrer"
            class="cursor-pointer hover:opacity-70 hover:rounded-full"
          >
            <linked-icon />
          </a>
          <a
            href="https://twitter.com/kha_deejarh"
            aria-label="Twitter link"
            target="_blank"
            class="cursor-pointer hover:opacity-70 hover:rounded-full"
          >
            <twitter-icon />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.border-bg {
}
</style>
