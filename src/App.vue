<template>
  <div class="min-h-screen md:grid md:place-items-center md:py-6">
    <div
      class="h-screen flex flex-col justify-between max-w-5xl w-full md:bg-white-0 md:h-[592px] md:p-3 md:rounded-xl md:mx-6 md:shadow-lg md:border">
      <div class="flex flex-col md:flex-row">
        <StepsSection />
        <StepLayout />
      </div>
      <FooterSection />
    </div>
  </div>
</template>

<script setup>
import StepsSection from '@/views/StepsSection';
import FooterSection from '@/views/FooterSection';
import StepLayout from '@/components/StepLayout.vue';
</script>