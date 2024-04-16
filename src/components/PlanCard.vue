<template>
  <div
    class="border rounded-lg w-full p-4 flex md:flex-col md:justify-between items-center md:items-start gap-4 cursor-pointer hover:border-blue-2"
    :class="{ 'border-blue-2 bg-white-2 cursor-default': selected }"
  >
    <div>
      <img :src="img" :key="img" alt="plan_img" />
    </div>

    <div>
      <div class="text-blue-1 font-bold capitalize">{{ title }}</div>
      <div class="text-gray-1 text-sm">
        ${{ short_per == "yr" ? yearly : monthly }}/{{ short_per }}
      </div>
      <div v-if="short_per == 'yr'" class="text-sm text-blue-1">
        2 month free
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "img", "monthly", "yearly", "short_per", "selected"]);
</script>
