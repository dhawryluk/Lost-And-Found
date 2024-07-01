<template>
  <div class="bg-accent2">
    <div
      class="flex flex-col md:flex-row md:w-5/6 md:justify-between m-auto md:items-center"
    >
      <img
        src="/assets/images/lfLogo.png"
        alt="Lost & Found Creations Logo"
        class="w-48 md:w-60 self-center"
      />
      <p class="flex justify-center md:self-end pb-4">
        2024&#169; Lost & Found Creations
      </p>
      <ul class="flex justify-center gap-6 md:gap-8 text-2xl md:self-end pb-4">
        <li class="hover:text-secondary ease-in-out duration-300">
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li class="hover:text-secondary ease-in-out duration-300">
          <NuxtLink to="/products">Projects</NuxtLink>
        </li>
        <li class="hover:text-secondary ease-in-out duration-300">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="hover:text-secondary ease-in-out duration-300">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>
