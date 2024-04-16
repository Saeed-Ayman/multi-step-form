<template>
  <button class="w-12 h-6 bg-blue-1 rounded-full">
    <div
      class="w-4 h-4 bg-white-0 rounded-full mx-1 transition"
      :class="{ 'translate-x-6': !active }"
    ></div>
  </button>
</template>

<script setup>
defineProps(["active"]);
</script>
