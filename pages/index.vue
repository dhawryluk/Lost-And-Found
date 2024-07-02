<template>
  <div>
    <Hero />
    <h1 class="text-6xl text-accent2 font-titleText text-center p-12">
      Our Unique Services
    </h1>
    <DescCard>
      <template #proImage>
        <img
          src="/assets/images/polsonPark.jpg"
          alt="Polson Park Vernon BC"
          class="h-[450px]"
      /></template>
      <template #title>
        <h1>Local Pop Ups</h1>
      </template>
      <template #bodyText>
        <h3>
          Come visit us at various pop-up locations around the area, including
          local festivals, farmers markets, trade shows, and more. At these
          events, you'll have the opportunity to see our unique, handcrafted
          pieces up close and meet the skilled carpenter behind them.
        </h3>
      </template>
    </DescCard>
    <div v-if="isMdOrAbove">
      <RevCard>
        <template #proImage>
          <img
            src="/assets/images/bench6.jpg"
            alt="Polson Park Vernon BC"
            class="h-[450px] w-[450px] bg-center"
        /></template>
        <template #title>
          <h1>Our Handcrafted Masterpieces</h1>
        </template>
        <template #bodyText>
          <h3>
            Explore our custom live edge wood tables, benches, and other
            creations, each reflecting the meticulous craftsmanship and over 40
            years of experience that go into every item. Discover how we breathe
            new life into vintage and retro finds, transforming them into
            one-of-a-kind treasures. Don't miss the chance to experience the
            artistry and passion of Lost & Found Creations in person!
          </h3>
        </template>
      </RevCard>
    </div>
    <div v-else>
      <DescCard>
        <template #proImage>
          <img
            src="/assets/images/bench6.jpg"
            alt="Polson Park Vernon BC"
            class="w-[450px] h-[450px] bg-center"
        /></template>
        <template #title>
          <h1>Our Handcrafted Masterpieces</h1>
        </template>
        <template #bodyText>
          <h3>
            Explore our custom live edge wood tables, benches, and other
            creations, each reflecting the meticulous craftsmanship and over 40
            years of experience that go into every item. Discover how we breathe
            new life into vintage and retro finds, transforming them into
            one-of-a-kind treasures. Don't miss the chance to experience the
            artistry and passion of Lost & Found Creations in person!
          </h3>
        </template>
      </DescCard>
    </div>
    <DescCard>
      <template #proImage>
        <img
          src="/assets/images/custom3.jpg"
          alt="Polson Park Vernon BC"
          class="h-[450px] w-[450px] bg-center"
      /></template>
      <template #title>
        <h1>Elegant Personalized Boards</h1>
      </template>
      <template #bodyText>
        <h3>
          We craft personalized serving and charcuterie boards that add elegance
          to any gathering. Each board is meticulously handcrafted from
          high-quality wood, ensuring a unique and durable piece. Customize your
          board with special engravings, unique shapes, or custom finishes.
          Perfect for entertaining guests or as a thoughtful gift, our boards
          blend functionality with artistry, making every occasion memorable.
        </h3>
      </template>
    </DescCard>
  </div>
  <div class="text-center mx-auto my-12">
    <h2 class="text-4xl font-titleText text-accent2 font-semibold p-4">
      Connect with Us
    </h2>
    <div class="flex gap-4 justify-center">
      <NuxtLink to="https://www.facebook.com/lostandfoundfurniturecreations"
        ><icon name="fa6-brands:facebook" class="text-6xl text-accent1"></icon
      ></NuxtLink>
      <NuxtLink to="https://www.facebook.com/lostandfoundfurniturecreations"
        ><icon name="fa6-brands:instagram" class="text-6xl text-accent1"></icon
      ></NuxtLink>
      <NuxtLink to="/contact"
        ><icon name="fa6-solid:envelope" class="text-6xl text-accent1"></icon
      ></NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const windowWidth = ref(0);

const isMdOrAbove = computed(() => {
  return windowWidth.value >= 768; // Adjust the breakpoint as needed
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  if (typeof window !== "undefined") {
    windowWidth.value = window.innerWidth;
    window.addEventListener("resize", handleResize);
  }
});

onBeforeUnmount(() => {
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", handleResize);
  }
});
</script>
