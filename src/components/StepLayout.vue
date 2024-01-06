<template>
    <div class="bg-white-0 mx-4 my-1 md:w-full rounded-lg p-6 shadow-lg md:shadow-none lg:px-16">
        <StepTitle>{{ form.step.title }}</StepTitle>
        <StepDescription>{{ form.step.description }}</StepDescription>

        <component :is="form.step.component" v-bind="form.step.bind" />
    </div>
</template>

<script setup>
import StepTitle from "@/components/StepTitle.vue";
import StepDescription from "@/components/StepDescription.vue";

import { useFormStore } from "@/stores/useFormStore";

const form = useFormStore();
</script> 