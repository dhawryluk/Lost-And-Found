<template>
  <div class="md:h-[500px] bg-primeColor grid md:grid-cols-2">
    <div class="justify-center m-auto w-5/6">
      <div class="text-3xl font-titleText text-center mb-6 font-semibold">
        <slot name="title"></slot>
      </div>
      <div class="font-body text-2xl text-justify">
        <slot name="bodyText"></slot>
      </div>
    </div>
    <div class="m-auto p-4">
      <slot name="proImage"></slot>
    </div>
  </div>
</template>

<script setup></script>
