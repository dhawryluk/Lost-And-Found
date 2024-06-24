<template>
  <div class="h-[700px]">
    <div
      class="bg-[url('/assets/images/heroImage.jpg')] h-full bg-center flex flex-col justify-center"
      alt="tree on a lake"
    >
      <div
        class="w-3/4 md:w-1/2 lg:w-1/3 m-auto md:ml-20 bg-black bg-opacity-70 p-6 rounded-xl"
      >
        <h1
          class="font-titleText text-3xl md:text-4xl lg:text-6xl xl:text-8xl text-clip text-primeColor"
        >
          Lost & Found Creations
        </h1>
        <h3 class="text-secondary font-bodyText my-2 text-wrap">
          Welcome to Lost & Found Creations! We create custom live edge wood
          tables, benches, and other pieces. When we're not working with wood,
          we breathe new life into old objects. Sometimes vintage, sometimes
          retro, sometimes trash to treasure... always unique!
        </h3>
        <div class="flex mt-4 gap-4">
          <PrimaryButton>Projects</PrimaryButton>
          <SecondaryButton>About Us</SecondaryButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SecondaryButton from "./SecondaryButton.vue";
</script>
