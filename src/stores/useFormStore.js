import { defineStore } from "pinia";
import { computed, ref } from "vue";

// ssr
// import steps from "../context/stepsContext.json";

// static
import PersonalInfo from "../views/PersonalInfo.vue";
import PlanSelection from "../views/PlanSelection.vue";
import AddonsSelection from "../views/AddonsSelection.vue";
import DoubleCheckInfo from "../views/DoubleCheckInfo.vue";
import FinalStep from "../views/FinalStep.vue";

export const useFormStore = defineStore("form", () => {
  // static
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
  const lockedStep = ref(null);
  const lockKeys = ref(new Set());
  const isConfirmed = ref(false);

  const step = computed(() =>
    isConfirmed.value
      ? { component: FinalStep } // static // ? { component: "../views/FinalStep.vue" } ssr
      : steps[stepIndex.value]
  );
  const isFirstStep = computed(() => stepIndex.value == 0);
  const isLastStep = computed(() => stepIndex.value == steps.length - 1);
  const isLocked = computed(() => lockedStep.value != null);

  const nextStep = () => {
    if (stepIndex.value !== lockedStep.value) stepIndex.value++;
  };

  const prevStep = () => stepIndex.value--;
  const stepIs = (stepId) => stepIndex.value == stepId;
  const toStep = (step) => (stepIndex.value = step);

  const lockStep = (key) => {
    lockKeys.value.add(key);
    lockedStep.value = stepIndex.value;
  };
  const unlock = (key) => {
    lockKeys.value.delete(key);

    if (lockKeys.value.size == 0) lockedStep.value = null;
  };
  const confirm = () => (isConfirmed.value = true);

  return {
    step,
    stepIndex,
    steps,
    nextStep,
    prevStep,
    toStep,
    isFirstStep,
    isLastStep,
    stepIs,
    isLocked,
    lockStep,
    unlock,
    confirm,
    isConfirmed,
  };
});
