<template>
  <div
    class="hidden md:flex justify-between md:items-center py-2 px-4 bg-accent2 text-secondary font-bodyText text-xl"
  >
    <img
      src="/assets/images/lfLogo.png"
      alt="Lost & Found Creations Logo"
      class="h-12"
    />
    <ul class="flex gap-8">
      <li class="hover:text-black ease-in-out duration-300">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="hover:text-black ease-in-out duration-300">
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
      <li class="hover:text-black ease-in-out duration-300">
        <NuxtLink to="/about">About</NuxtLink>
      </li>
      <li class="hover:text-black ease-in-out duration-300">
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup></script>
