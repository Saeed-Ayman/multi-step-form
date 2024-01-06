<template>
    <div class="flex flex-col">
        <div class="flex justify-between items-center md:my-1">
            <label class="text-blue-1 text-xs md:text-base capitalize whitespace-nowrap" :for="labelName">
                {{ labelName }}
            </label>
            <div v-if="inputError" class="font-bold text-red text-sm text-right">{{ inputError }}</div>
        </div>
        <input
            class="rounded-md px-4 py-2 border md:rounded-lg focus:ring-0 focus:border-blue-2 font-bold text-blue-1 placeholder:font-normal"
            :class="[$attrs.class, { 'border-gray-1 ': inputError, 'border-red': inputError }]" v-model="model" type="text"
            :id="labelName" :placeholder="inputHolder">
    </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps(['labelName', 'inputHolder', 'inputError'])

// eslint-disable-next-line no-undef
const model = defineModel();
</script>