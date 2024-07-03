<template>
  <div class="bg-primeColor grid md:grid-cols-2 p-4">
    <div class="justify-center m-auto w-5/6">
      <div class="text-3xl font-titleText text-center mb-6 font-semibold">
        <slot name="title"></slot>
      </div>
      <div class="font-body text-2xl text-justify">
        <slot name="bodyText"></slot>
      </div>
    </div>
    <div class="m-auto">
      <slot name="proImage"></slot>
    </div>
  </div>
</template>

<script setup></script>
