<template>
  <div class="min-h-svh md:grid md:place-items-center md:py-6 md:mx-2">
    <div
      class="h-svh flex flex-col justify-between max-w-5xl w-full md:bg-white-0 md:h-[592px] md:p-3 md:rounded-xl md:mx-6 md:shadow-lg md:border"
    >
      <div class="flex-1 flex flex-col md:flex-row">
        <StepsSection />
        <StepLayout />
      </div>
      <FooterSection />
    </div>
  </div>

  <div
    class="transition-all duration-700 fixed top-16 right-0 bg-blue-4 text-xs pr-2 rounded-l-full md:text-sm flex items-center justify-center gap-1"
    :class="{ 'translate-x-[9.25rem] md:translate-x-[10.5rem]': collapse }"
  >
    <SimpleButton
      class="relative bg-blue-2 p-1 aspect-square rounded-full"
      :class="{ 'rotate-180': collapse }"
      @click="collapse = !collapse"
    >
      <div
        class="absolute w-full h-full rounded-full top-0 left-0 bg-blue-3/90 animate-ping"
      ></div>
      <svg
        fill="#d6d9e6"
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="-107.52 -43.52 599.04 599.04"
      >
        <path
          d="M365.52 209.85L59.22 67.01c-16.06-7.49-35.15-.54-42.64 15.52L3.01 111.61c-7.49 16.06-.54 35.15 15.52 42.64L236.96 256.1 18.49 357.99C2.47 365.46-4.46 384.5 3.01 400.52l13.52 29C24 445.54 43.04 452.47 59.06 445l306.47-142.91a32.003 32.003 0 0018.48-29v-34.23c-.01-12.45-7.21-23.76-18.49-29.01z"
        ></path>
      </svg>
    </SimpleButton>
    Created by
    <SimpleButton
      class="underline"
      onclick="window.open('https://www.github.com/saeed-ayman', '_blank')"
    >
      Saeed Ayman
    </SimpleButton>
  </div>
</template>

<script setup>
import StepsSection from "./views/StepsSection.vue";
import FooterSection from "./views/FooterSection.vue";
import StepLayout from "./components/StepLayout.vue";
import SimpleButton from "./components/SimpleButton.vue";
import { ref } from "vue";

const collapse = ref(false);
</script>
