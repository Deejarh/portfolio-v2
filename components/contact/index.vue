
<script setup lang="ts">
    import ChatIcon from "@/assets/icons/ChatIcon";
    import EmailIcon from "@/assets/icons/EmailIcon";
    import LinkedIcon from "@/assets/icons/LinkedIn";
    // import IgIcon from "@/assets/icons/IgIcon";
    import TwitterIcon from "@/assets/icons/TwitterIcon";

</script>

<template>
    <section id="contact" class=" text-gray-1 lg:mt-32 pt-8 lg:pt-0  mb-10 mx-6">
   <h1 class="flex justify-center items-center header-font mt-8 mb-14 w-full text-center"> Care to Know more about me?</h1>

   <div class=" flex justify-center lg:flex-row flex-col items-center lg:gap-20 gap-12 ">
    <div class="flex items-center  lg:px-4 lg:py-3 py-2 px-3 text-sm  border border-gray-1 rounded-full cursor-pointer">
      <a href="https://deejarhbot.netlify.app/" target="_blank" class="cursor-pointer flex items-center gap-3">
      <chat-icon/> <span>Chat with Deejarh Bot </span> </a></div>
    <div class=" lg:border-l max-md:border-t max-md:w-36   lg:h-32  "> </div>

    <div class="cursor-pointer text-start  flex  flex-col  items-center  gap-y-2">
      <div class="flex items-center gap-3"> <email-icon/> <span>Email:</span></div>
      <p class=" flex items-center my-1 ">KhadijahBadmus024@gmail.com</p> 
      <div class="flex gap-x-3 items-center my-3 ">
        
        <a href="https://twitter.com/kha_deejarh" target="_blank" class="cursor-pointer">
          <twitter-icon/>
        </a>
        <a href="https://www.linkedin.com/in/badmus-damola-taiwo-643438158/" target="_blank"  rel="noopener noreferrer" class="cursor-pointer">
          <linked-icon/>
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