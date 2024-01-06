<template>
    <div
        class="bg-white-0 flex flex-row-reverse justify-between p-4 mt-4 md:w-[calc(100%-274px)] md:mr-6 lg:px-16 md:ml-auto">
        <RegularButton class="bg-blue-1 hover:bg-blue-1/90" v-show="!form.isLastStep" @click="form.nextStep">
            Next Step
        </RegularButton>
        <RegularButton class="bg-blue-2 hover:bg-blue-2/50" v-show="form.isLastStep">
            Confirm
        </RegularButton>
        <SimpleButton class="md:ml-10" v-show="!form.isFirstStep" @click="form.prevStep">
            Go Back
        </SimpleButton>
    </div>
</template>

<script setup>
import RegularButton from '@/components/RegularButton';
import SimpleButton from '@/components/SimpleButton';

import { useFormStore } from "@/stores/useFormStore";

const form = useFormStore();
</script>