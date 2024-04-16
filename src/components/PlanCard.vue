<template>
  <div
    class="border rounded-lg w-full p-4 flex md:flex-col md:justify-between items-center md:items-start gap-4 cursor-pointer hover:border-blue-2"
    :class="{ 'border-blue-2 bg-white-2 cursor-default': selected }"
  >
    <div>
      <img :src="planImg" />
    </div>

    <div class="">
      <div class="text-blue-1 font-bold capitalize">{{ planTitle }}</div>
      <div class="text-gray-1 text-sm">
        ${{ per == "yr" ? yearly : monthly }}/{{ per }}
      </div>
      <div v-if="per == 'yr'" class="text-sm text-blue-1">2 month free</div>
    </div>
  </div>
</template>

<script setup>
defineProps(["planTitle", "planImg", "monthly", "yearly", "per", "selected"]);
</script>
