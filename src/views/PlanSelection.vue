<template>
  <div
    class="flex flex-col md:flex-row justify-stretch items-stretch mt-6 my-2 md:h-44 gap-4 w-full"
  >
    <PlanCard
      v-for="(_plan, i) in plan.allPlans"
      v-bind="_plan"
      :short_per="plan.short_per"
      :key="_plan"
      :selected="plan.planIsSelected(i)"
      @click="plan.selectPlan(i)"
    />
  </div>

  <div class="bg-white-2 py-2 mt-8 flex justify-center items-center gap-6">
    <SimpleButton @click="plan.switchTime" :active="plan.isMonthly">
      Monthly
    </SimpleButton>
    <SwitchButton @click="plan.switchTime" :active="plan.isMonthly" />
    <SimpleButton @click="plan.switchTime" :active="!plan.isMonthly">
      Yearly
    </SimpleButton>
  </div>
</template>

<script setup>
import PlanCard from "../components/PlanCard.vue";
import SwitchButton from "../components/SwitchButton.vue";
import SimpleButton from "../components/SimpleButton.vue";
import { usePlanStore } from "../stores/usePlanStore.js";

const plan = usePlanStore();
</script>
