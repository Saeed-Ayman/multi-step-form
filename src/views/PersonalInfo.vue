<template>
  <div class="space-y-4 mt-6 my-2">
    <TextInput
      label-name="name"
      input-holder="e.g. Stephen King"
      class="capitalize placeholder:normal-case"
    />
    <TextInput
      label-name="email address"
      input-holder="e.g. stephenking@lorem.com"
    />
    <TextInput label-name="phone number" input-holder="e.g. +1 234 567 890" />
  </div>
</template>

<script setup>
import TextInput from "../components/TextInput.vue";
</script>
