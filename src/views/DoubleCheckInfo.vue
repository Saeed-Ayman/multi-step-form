<template>
    <div class="flex flex-col justify-stretch items-stretch mt-6 my-2 gap-4 w-full p-6 bg-white-2">
        <div class="flex justify-between items-center gap-2">
            <div>
                <div class="text-blue-1 font-bold capitalize">
                    {{ form.selectedPlan.planTitle }} ({{ form.isMonthly ? 'Monthly' : 'Yearly' }})
                </div>
                <button @click="form.toStep(1)" class="text-gray-1 underline hover:text-blue-2">Change</button>
            </div>
            <div class="text-blue-1 font-bold">
                ${{ form.isMonthly ? form.selectedPlan.monthly : form.selectedPlan.yearly }}/{{ form.per }}
            </div>
        </div>

        <hr v-if="addons?.length" />


        <div v-for="add in addons" :key="add" class="flex justify-between items-center gap-2 text-sm">
            <div class="text-gray-1">{{ add.addonsTitle }}</div>
            <div class="text-blue-1">+${{ form.isMonthly ? add.monthly : add.yearly }}/{{ form.per }}</div>
        </div>
    </div>

    <div class="flex justify-between items-center gap-2 px-6 py-4">
        <div class="text-sm text-gray-1">
            Total
            <span class="whitespace-nowrap">(per {{ form.isMonthly ? 'month' : 'year' }})</span>
        </div>
        <div class="text-blue-2 font-bold">+${{ form.total }}/{{ form.per }}</div>
    </div>
</template>

<script setup>
import { useFormStore } from "@/stores/useFormStore";

const form = useFormStore();
const addons = form.selectedAddons();
</script>