
<script setup lang="ts">
    import ChatIcon from "@/assets/icons/ChatIcon";
    import EmailIcon from "@/assets/icons/EmailIcon";
    import LinkedIcon from "@/assets/icons/LinkedIn";
    // import IgIcon from "@/assets/icons/IgIcon";
    import TwitterIcon from "@/assets/icons/TwitterIcon";

</script>

<template>
    <section id="contact" class=" text-gray-1 lg:mt-32 mb-10 mx-6">
   <h1 class="flex justify-center items-center header-font mt-8 mb-14 w-full text-center"> Care to Know more about me?</h1>

   <div class=" flex justify-center lg:flex-row flex-col items-center gap-8 ">
    <div class="flex items-center gap-3 px-5 py-3 mb-8 lg:mb-0 border border-gray-1 rounded-full cursor-pointer"> <chat-icon/> <span>Chat with Deejarh Bot </span></div>
    <div class=" lg:border-l border-t w-36   lg:h-32  "> </div>

    <div class="cursor-pointer text-start mt-8 lg:mt-0 flex  max-md:flex-col  max-md:items-center  max-md:gap-y-2">
      <div class="flex items-center gap-3"> <email-icon/> <span>Email:</span></div>
      <p class=" flex items-center my-1 ">KhadijahBadmus024@gmail.com</p> 
      <div class="flex gap-x-3 items-center my-3 "><twitter-icon/>  <linked-icon/> </div>
    </div>
   </div>
</section>
</template>



<style lang="scss" scoped>
.border-bg {


}
</style>