import { defineStore } from "pinia";
import { computed, ref } from "vue";
import PersonalInfo from "../views/PersonalInfo.vue";
import PlanSelection from "../views/PlanSelection.vue";
import AddonsSelection from "../views/AddonsSelection.vue";
import DoubleCheckInfo from "../views/DoubleCheckInfo.vue";

export const useFormStore = defineStore("form", () => {
  const steps = [
    {
      title: "Personal info",
      description: "Please provide your name, email address, and phone number.",
      stepTitle: "your info",
      component: PersonalInfo,
    },
    {
      title: "Select your plan",
      description: "You have the option of monthly or yearly billing.",
      stepTitle: "select plan",
      component: PlanSelection,
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
      stepTitle: "add-ons",
      component: AddonsSelection,
    },
    {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming",
      stepTitle: "summary",
      component: DoubleCheckInfo,
    },
  ];

  const stepIndex = ref(0);
  const step = computed(() => steps[stepIndex.value]);
  const isFirstStep = computed(() => stepIndex.value == 0);
  const isLastStep = computed(() => stepIndex.value == steps.length - 1);

  const nextStep = () => stepIndex.value++;
  const prevStep = () => stepIndex.value--;
  const stepIs = (stepTitle) => step.value.stepTitle == stepTitle;
  const toStep = (step) => (stepIndex.value = step);

  return {
    step,
    steps,
    nextStep,
    prevStep,
    toStep,
    isFirstStep,
    isLastStep,
    stepIs,
  };
});
