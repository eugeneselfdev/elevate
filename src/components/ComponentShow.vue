<script setup>
import data from '../data/components.json'

import { useRoute } from 'vue-router'

const route = useRoute()

const itemId = route.params.id
const item = data.find(fault => fault.id === itemId)

</script>
<template>
    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default p-4">
        <h1 class="text-xl mb-4">{{ item.na }}</h1>
        <p class="mb-2 font-semibold">{{ item.co }}</p>
        <p v-html="item.de" class="mb-2"></p>

        <img class="h-auto max-w-md rounded-base dark:shadow-gray-800" src="../images/lm_fst-2xt/RIO-2.png" alt="image description">

    </div>
</template>