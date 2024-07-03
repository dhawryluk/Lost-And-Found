<template>
  <div class="bg-secondary grid md:grid-cols-2 p-4">
    <div class="m-auto">
      <slot name="proImage"></slot>
    </div>
    <div class="content-center w-5/6 m-auto">
      <div class="text-3xl font-titleText text-center mb-6 font-semibold">
        <slot name="title"></slot>
      </div>
      <div class="font-body text-2xl text-justify">
        <slot name="bodyText"></slot>
      </div>
    </div>
  </div>
</template>

<script setup></script>
