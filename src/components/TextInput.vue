<template>
  <div class="flex flex-col">
    <div class="flex justify-between items-center md:my-1">
      <label
        class="text-blue-1 text-xs md:text-base capitalize whitespace-nowrap"
        :for="labelName"
      >
        {{ labelName }}
      </label>
      <div
        v-if="!inputValidate && firstFocus"
        class="font-bold text-red text-sm text-right !normal-case"
      >
        {{ inputError }}
      </div>
    </div>
    <input
      class="rounded-md px-4 py-2 border border-gray-1 md:rounded-lg focus:ring-0 focus:border-blue-2 font-bold text-blue-1 placeholder:font-normal"
      :class="[
        $attrs.class,
        { 'border-red focus:border-red': !inputValidate && firstFocus },
      ]"
      @change="firstFocus = true"
      v-model.trim="model"
      type="text"
      :id="labelName"
      :placeholder="inputHolder"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const firstFocus = ref(false);

const props = defineProps(["labelName", "inputHolder", "inputError", "regex"]);

const model = defineModel();

const emit = defineEmits(["valid", "unValid"]);

const regex = new RegExp(props.regex);

const inputValidate = computed(() => regex.test(model.value));

const validateAction = () =>
  emit(inputValidate.value ? "valid" : "unValid", props.labelName);

validateAction();

watch(model, validateAction);
</script>
