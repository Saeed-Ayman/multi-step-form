<template>
  <button
    class="font-semibold hover:text-blue-1"
    :class="{ 'text-blue-1': active, 'text-gray-1': !active }"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps(["active"]);
</script>
