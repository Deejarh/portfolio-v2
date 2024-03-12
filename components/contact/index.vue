
<script setup lang="ts">
    import ChatIcon from "@/assets/icons/ChatIcon";
    import EmailIcon from "@/assets/icons/EmailIcon";
    import LinkedIcon from "@/assets/icons/LinkedIn";
    // import IgIcon from "@/assets/icons/IgIcon";
    import TwitterIcon from "@/assets/icons/TwitterIcon";

</script>

<template>
    <section id="contact" class=" text-gray-1">
   <h1 class="flex justify-center items-center header-font my-8"> Care to Know more about me?</h1>

   <div class=" flex justify-center items-center gap-8">
    <div class="flex items-center gap-3 px-5 py-3 border border-gray-1 rounded-full cursor-pointer"> <chat-icon/> <span>Chat with Deejarh Bot </span></div>
    <div class=" border-l   h-32  "> </div>

    <div class="cursor-pointer">
      <div class="flex items-center gap-3"> <email-icon/> <span>Email:</span></div>
      <p class=" flex items-center ">KhadijahBadmus024@gmail.com</p> 
      <div class="flex gap-x-3 items-center "><twitter-icon/>  <linked-icon/> </div>
    </div>
   </div>
</section>
</template>



<style lang="scss" scoped>
.border-bg {


}
</style>