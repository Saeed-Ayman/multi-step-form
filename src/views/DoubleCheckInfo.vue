<template>
  <div
    class="flex flex-col justify-stretch items-stretch mt-6 my-2 gap-4 w-full p-6 bg-white-2"
  >
    <div class="flex justify-between items-center gap-2">
      <div>
        <div class="text-blue-1 font-bold capitalize">
          {{ selectedPlan.title }}
          ({{ plan.per }})
        </div>
        <button
          @click="form.toStep(1)"
          class="text-gray-1 underline hover:text-blue-2"
        >
          Change
        </button>
      </div>
      <div class="text-blue-1 font-bold">
        ${{ plan.isMonthly ? selectedPlan.monthly : selectedPlan.yearly }}/
        {{ plan.short_per }}
      </div>
    </div>

    <hr v-if="addons?.length" />

    <div
      v-for="add in addons"
      :key="add"
      class="flex justify-between items-center gap-2 text-sm"
    >
      <div class="text-gray-1">{{ add.title }}</div>
      <div class="text-blue-1">
        +${{ plan.isMonthly ? add.monthly : add.yearly }}/{{ plan.short_per }}
      </div>
    </div>
  </div>

  <div class="flex justify-between items-center gap-2 px-6 py-4">
    <div class="text-sm text-gray-1">
      Total
      <span class="whitespace-nowrap"> (per {{ plan.per }}) </span>
    </div>
    <div class="text-blue-2 font-bold">
      +${{ plan.total }}/{{ plan.short_per }}
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../stores/useFormStore";
import { usePlanStore } from "../stores/usePlanStore.js";

const plan = usePlanStore();
const form = useFormStore();

const selectedPlan = plan.getSelectedPlan();
const addons = plan.getSelectedAddons();
</script>
