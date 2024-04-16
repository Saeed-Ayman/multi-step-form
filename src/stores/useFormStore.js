import { defineStore } from "pinia";
import { computed, ref } from "vue";
import PersonalInfo from "../views/PersonalInfo.vue";
import PlanSelection from "../views/PlanSelection.vue";
import AddonsSelection from "../views/AddonsSelection.vue";
import DoubleCheckInfo from "../views/DoubleCheckInfo.vue";
import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";

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
      bind: {
        plans: [
          {
            planTitle: "arcade",
            planImg: IconArcade,
            monthly: 9,
            yearly: 90,
          },
          {
            planTitle: "advanced",
            planImg: IconAdvanced,
            monthly: 12,
            yearly: 120,
          },
          {
            planTitle: "pro",
            planImg: IconPro,
            monthly: 15,
            yearly: 150,
          },
        ],
      },
    },
    {
      title: "Pick add-ons",
      description: "Add-ons help enhance your gaming experience.",
      stepTitle: "add-ons",
      component: AddonsSelection,
      bind: {
        addons: [
          {
            addonsTitle: "Online service",
            addonsDescription: "Access to multiplayer games",
            monthly: 1,
            yearly: 10,
          },
          {
            addonsTitle: "Larger storage",
            addonsDescription: "Extra 1TB of cloud save",
            monthly: 2,
            yearly: 20,
          },
          {
            addonsTitle: "Customizable profile",
            addonsDescription: "Custom theme on your profile",
            monthly: 2,
            yearly: 20,
          },
        ],
      },
    },
    {
      title: "Finishing up",
      description: "Double-check everything looks OK before confirming",
      stepTitle: "summary",
      component: DoubleCheckInfo,
    },
  ];

  const stepIndex = ref(0);
  const isMonthly = ref(true);
  const selectedPlan = ref(steps[1].bind.plans[0]);
  const _selectedAddons = ref(
    new Array(steps[2].bind.addons.length).fill(false)
  );

  const total = computed(() =>
    isMonthly.value
      ? selectedAddons()
          .map((v) => v.monthly)
          .reduce((v1, v2) => v1 + v2, selectedPlan.value.monthly)
      : selectedAddons()
          .map((v) => v.yearly)
          .reduce((v1, v2) => v1 + v2, selectedPlan.value.yearly)
  );
  const step = computed(() => steps[stepIndex.value]);
  const isFirstStep = computed(() => stepIndex.value == 0);
  const isLastStep = computed(() => stepIndex.value == steps.length - 1);
  const per = computed(() => (isMonthly.value ? "mo" : "yr"));

  function nextStep() {
    stepIndex.value++;
  }
  function prevStep() {
    stepIndex.value--;
  }
  function stepIs(stepTitle) {
    return step.value.stepTitle == stepTitle;
  }
  function toStep(step) {
    return (stepIndex.value = step);
  }

  function updateAddons(ons) {
    _selectedAddons.value[ons] = !_selectedAddons.value[ons];
  }
  function addonsIsSelected(ons) {
    return _selectedAddons.value[ons];
  }
  function selectedAddons() {
    return _selectedAddons.value
      .map((value, i) => (value ? steps[2].bind.addons[i] : undefined))
      .filter((value) => value !== undefined);
  }

  function selectedPlanIs(plan) {
    return selectedPlan.value.planTitle == steps[1].bind.plans[plan].planTitle;
  }
  function selectPlan(plan) {
    return (selectedPlan.value = steps[1].bind.plans[plan]);
  }
  function switchPlan(choice) {
    switch (choice) {
      case "yr":
        isMonthly.value = false;
        break;
      case "mo":
        isMonthly.value = true;
        break;
      default:
        isMonthly.value = !isMonthly.value;
        break;
    }
  }

  return {
    total,
    selectedAddons,
    step,
    steps,
    selectedPlan,
    per,
    nextStep,
    prevStep,
    toStep,
    isMonthly,
    isFirstStep,
    isLastStep,
    switchPlan,
    stepIs,
    selectedPlanIs,
    selectPlan,
    updateAddons,
    addonsIsSelected,
  };
});
