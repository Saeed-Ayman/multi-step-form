<template>
    <div class="flex flex-col justify-stretch items-stretch mt-6 my-2 gap-4 w-full">
        <CheckboxCard v-for="add, i in addons" :key="add.addonsTitle" v-bind="add" :per="form.per"
            @click="form.updateAddons(i)" :selected="form.addonsIsSelected(i)" />
    </div>
</template>

<script setup>
import CheckboxCard from '@/components/CheckboxCard.vue';
import { useFormStore } from '@/stores/useFormStore';

defineProps(['addons']);

const form = useFormStore();
</script>