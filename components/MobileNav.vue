<template>
  <div class="md:hidden bg-accent2 text-secondary w-screen mt-0">
    <div class="flex">
      <button @click="toggleMenu">
        <Icon
          v-if="isMenuHidden"
          name="heroicons-outline:bars-3"
          class="w-8 h-8 ml-6 my-4"
        />
        <Icon
          v-else
          name="heroicons-outline:x-mark"
          class="w-8 h-8 ml-6 my-4"
        />
      </button>
      <img
        src="/assets/images/lfLogo.png"
        alt="Lost & Found Creations Logo"
        class="h-12 my-auto pl-2"
      />
    </div>
    <div>
      <ul
        :class="!isMenuHidden ? 'block' : 'hidden'"
        class="flex flex-col gap-4 bg-accent1 p-6 text-2xl"
      >
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Projects</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const isMenuHidden = useState("menuToggle", () => true);

function toggleMenu() {
  isMenuHidden.value = !isMenuHidden.value;
}
</script>

<style scoped></style>
