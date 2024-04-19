<template>
  <div
    class="bg-white-0 flex flex-row-reverse justify-between p-4 mt-4 md:w-[calc(100%-274px)] md:mr-6 lg:px-16 md:ml-auto"
    v-if="!form.isConfirmed"
  >
    <RegularButton
      :class="{
        'bg-blue-1/50 cursor-not-allowed': form.isLocked,
        'bg-blue-1 hover:bg-blue-1/90': !form.isLocked,
      }"
      v-show="!form.isLastStep"
      @click="form.nextStep"
    >
      Next Step
    </RegularButton>
    <RegularButton
      :class="{
        'bg-blue-2 hover:bg-blue-2/90': confirmButton,
        'bg-blue-2/50 cursor-progress': !confirmButton,
      }"
      v-if="form.isLastStep"
      @click="form.confirm"
      :disabled="!confirmButton"
    >
      Confirm
    </RegularButton>
    <SimpleButton
      class="md:ml-10"
      v-show="!form.isFirstStep"
      @click="form.prevStep"
    >
      Go Back
    </SimpleButton>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import RegularButton from "../components/RegularButton.vue";
import SimpleButton from "../components/SimpleButton.vue";

import { useFormStore } from "../stores/useFormStore.js";

const form = useFormStore();
const confirmButton = ref(false);

watch(form, () => {
  let time;

  if (form.isLastStep) {
    time = setTimeout(() => (confirmButton.value = true), 4000);
  } else {
    clearTimeout(time);
    confirmButton.value = false;
  }
});
</script>
