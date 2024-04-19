<template>
  <div class="space-y-4 mt-6 my-2">
    <TextInput
      v-for="(bind, i) in personalInfo.info"
      v-bind="bind"
      v-model="personalInfo.refs[i]"
      @valid="form.unlock"
      @un-valid="form.lockStep"
    />
  </div>
</template>

<script setup>
import TextInput from "../components/TextInput.vue";
import { useFormStore } from "../stores/useFormStore";
import { usePersonalInfoStore } from "../stores/usePersonalInfoStore";

const personalInfo = usePersonalInfoStore();
const form = useFormStore();
</script>
