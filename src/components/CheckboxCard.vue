<template>
  <div
    class="border rounded-lg w-full p-4 flex items-center gap-4 cursor-pointer hover:border-blue-2"
    :class="{ 'border-blue-2 bg-white-2': selected }"
  >
    <input
      class="w-4 h-4 m-2 border-gray-2 text-blue-2 rounded !ring-0"
      type="checkbox"
      :checked="selected"
    />

    <div class="flex-1">
      <div class="text-blue-1 font-bold capitalize">{{ title }}</div>
      <div class="text-gray-1 text-sm">{{ description }}</div>
    </div>

    <div class="text-sm text-blue-2">
      +${{ short_per == "yr" ? yearly : monthly }}/{{ short_per }}
    </div>
  </div>
</template>

<script setup>
defineProps([
  "title",
  "description",
  "monthly",
  "yearly",
  "short_per",
  "selected",
]);
</script>
