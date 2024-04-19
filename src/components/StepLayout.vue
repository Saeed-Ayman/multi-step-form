<template>
  <div
    class="bg-white-0 mx-4 my-1 md:w-full rounded-lg p-6 shadow-lg md:shadow-none lg:px-16"
  >
    <transition mode="out-in">
      <div class="h-full" :key="form.step.title">
        <StepTitle v-if="form.step.title">{{ form.step.title }}</StepTitle>
        <StepDescription v-if="form.step.description">
          {{ form.step.description }}
        </StepDescription>

        <!-- ssr -->
        <!-- <component :is="comp(form.step.component)" /> -->

        <!-- static -->
        <component :is="form.step.component" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import StepTitle from "./StepTitle.vue";
import StepDescription from "./StepDescription.vue";

import { useFormStore } from "../stores/useFormStore.js";
import { /* ssr defineAsyncComponent ,*/ ref, watch } from "vue";

const form = useFormStore();
const d = ref("20px");

let oldStepIndex = form.stepIndex;

watch(form, () => {
  d.value = form.stepIndex >= oldStepIndex ? "20px" : "-20px";
  oldStepIndex = form.stepIndex;
});

// ssr
// const comp = (component) => defineAsyncComponent(() => import(component));
</script>

<style scoped>
.v-enter-from {
  transform: translateX(v-bind("d"));
  opacity: 0;
}

.v-enter-active {
  transition: all 0.3s ease-out;
}

.v-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-leave-to {
  transform: translateX(calc(-1 * v-bind("d")));
  opacity: 0;
}
</style>
