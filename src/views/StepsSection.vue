<template>
  <div class="relative md:min-w-[274px]">
    <div class="absolute w-full -z-10 md:z-0">
      <img
        src="../assets/images/bg-sidebar-mobile.svg"
        class="md:hidden w-full object-cover"
      />

      <img
        src="../assets/images/bg-sidebar-desktop.svg"
        class="md:block hidden w-full object-cover"
      />
    </div>

    <div
      class="relative flex justify-center items-center md:flex-col gap-4 md:gap-8 md:items-start py-8 md:pl-8"
    >
      <div
        v-for="({ stepTitle }, i) in form.steps"
        :key="`step${i}`"
        class="flex gap-4"
      >
        <span
          class="transition-all border-2 duration-500 text-sm font-semibold flex justify-center items-center w-8 h-8 rounded-full"
          :class="{
            'text-white-0 ': !form.stepIs(i),
            'text-blue-1 border-blue-4 bg-blue-4 delay-100': form.stepIs(i),
          }"
        >
          {{ i + 1 }}
        </span>

        <div class="hidden uppercase md:flex flex-col text-xs">
          <span class="text-blue-3">step {{ i + 1 }}</span>
          <span class="text-white-0 font-bold">{{ stepTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/useFormStore.js";

const form = useFormStore();
</script>
