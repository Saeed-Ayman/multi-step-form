<template>
    <div class="relative md:min-w-[274px]">
        <div class="block md:hidden absolute w-full -z-10">
            <img class="w-full object-cover" src="@/assets/images/bg-sidebar-mobile.svg" />
        </div>

        <div class="hidden md:block absolute w-full">
            <img class="w-full object-cover" src="@/assets/images/bg-sidebar-desktop.svg" />
        </div>

        <div class="relative flex justify-center items-center md:flex-col gap-4 md:gap-8 md:items-start py-8 md:pl-8">
            <div v-for="{ stepTitle }, i in form.steps" :key="`step${i}`" class="flex gap-4">
                <span class="text-sm font-semibold flex justify-center items-center w-8 h-8 rounded-full"
                    :class="{ 'text-white-0 border-2': !form.stepIs(stepTitle), 'text-blue-1 bg-blue-4': form.stepIs(stepTitle) }">
                    {{ i + 1 }}
                </span>

                <div class="hidden uppercase md:flex flex-col text-xs">
                    <span class="text-blue-3">step {{ i + 1 }}</span>
                    <span class="text-white-0 font-bold">{{ stepTitle }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useFormStore } from "@/stores/useFormStore";

const form = useFormStore();
</script>