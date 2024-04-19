<script setup>
import { ref } from "vue";
import StepDescription from "../components/StepDescription.vue";
import StepTitle from "../components/StepTitle.vue";

const active = ref(false);

setTimeout(() => (active.value = true), 10);
</script>

<template>
  <div class="h-full overflow-hidden py-4 md:py-0">
    <div
      class="h-full flex flex-col text-center justify-center items-center gap-4"
      :class="{ active: active, 'scale-150 translate-y-20': !active }"
    >
      <img src="../assets/images/icon-thank-you.svg" />
      <div>
        <StepTitle>Thank you!</StepTitle>
        <StepDescription
          class="opacity-0 translate-y-4 cursor-default"
          :class="{ 'cursor-text': active }"
        >
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </StepDescription>
      </div>
    </div>
  </div>
</template>

<style scoped>
.active {
  transition: all 0.5s 1s ease-in;
  scale: 100% !important;
}

.active .opacity-0 {
  transition: all 0.5s 1.7s ease-in;
  opacity: 1;
  transform: translateY(0);
}
</style>
