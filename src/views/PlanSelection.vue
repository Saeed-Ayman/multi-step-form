<template>
    <div class="flex flex-col md:flex-row justify-stretch items-stretch mt-6 my-2 md:h-44 gap-4 w-full">
        <PlanCard v-for="plan, i in plans" v-bind="plan" :per="form.per" :key="plan" :selected="form.selectedPlanIs(i)"
            @click="form.selectPlan(i)" />
    </div>

    <div class="bg-white-2 py-2 mt-8 flex justify-center items-center gap-6">
        <SimpleButton @click="form.switchPlan('mo')" :active="form.isMonthly">Monthly</SimpleButton>
        <SwitchButton @click="form.switchPlan" :active="form.isMonthly" />
        <SimpleButton @click="form.switchPlan('yr')" :active="!form.isMonthly">Yearly</SimpleButton>
    </div>
</template>

<script setup>
import PlanCard from '@/components/PlanCard';
import SwitchButton from '@/components/SwitchButton';
import SimpleButton from '@/components/SimpleButton';
import { useFormStore } from '@/stores/useFormStore';

// eslint-disable-next-line no-undef
defineProps(['plans']);

const form = useFormStore();

</script>
