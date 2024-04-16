import { defineStore } from "pinia";
import { ref } from "vue";
import plans from "../context/plansContext.json";
import addons from "../context/addonsContext.json";

export const usePlanStore = defineStore("form.plan", () => {
  const selectedPlan = ref(0);
  const selectedAddons = ref(new Array(addons.length).fill(false));

  const per = ref("monthly");
  const short_per = ref("mo");
  const total = ref(plans[0][per.value]);
  const isMonthly = ref(true);

  function selectPlan(planId) {
    // update total
    total.value -= plans[selectedPlan.value][per.value];
    total.value += plans[planId][per.value];

    // update plan
    selectedPlan.value = planId;
  }

  function planIsSelected(planId) {
    return planId == selectedPlan.value;
  }

  function getSelectedPlan() {
    return plans[selectedPlan.value];
  }

  function switchTime() {
    // update plan time
    isMonthly.value = !isMonthly.value;
    per.value = isMonthly.value ? "monthly" : "yearly";
    short_per.value = isMonthly.value ? "mo" : "yr";

    // update total
    total.value = 0;
    total.value += plans[selectedPlan.value][per.value];

    selectedAddons.value.map((bool, i) => {
      if (bool) total.value += addons[i][per.value];
    });
  }

  function updateAddons(onsId) {
    selectedAddons.value[onsId] = !selectedAddons.value[onsId];

    // update total
    let cost = addons[onsId][per.value];

    if (!selectedAddons.value[onsId]) cost *= -1;

    total.value += cost;
  }

  function getSelectedAddons() {
    return selectedAddons.value
      .map((value, i) => (value ? addons[i] : undefined))
      .filter((value) => value !== undefined);
  }

  function addonsIsSelected(ons) {
    return selectedAddons.value[ons];
  }

  return {
    total,
    allPlans: plans,
    allAddons: addons,
    per,
    short_per,
    selectPlan,
    planIsSelected,
    getSelectedPlan,
    switchTime,
    updateAddons,
    getSelectedAddons,
    addonsIsSelected,
    isMonthly,
  };
});
