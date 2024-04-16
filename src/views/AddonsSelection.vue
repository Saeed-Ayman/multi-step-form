<template>
  <div
    class="flex flex-col justify-stretch items-stretch mt-6 my-2 gap-4 w-full"
  >
    <CheckboxCard
      v-for="(add, i) in plan.allAddons"
      :key="add"
      :short_per="plan.short_per"
      v-bind="add"
      @click="plan.updateAddons(i)"
      :selected="plan.addonsIsSelected(i)"
    />
  </div>
</template>

<script setup>
import CheckboxCard from "../components/CheckboxCard.vue";
import { usePlanStore } from "../stores/usePlanStore.js";

const plan = usePlanStore();
</script>
