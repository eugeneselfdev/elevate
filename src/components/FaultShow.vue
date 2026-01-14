<script setup>
import data from '../data/lm_faults.json'

import { useRoute } from 'vue-router'

const route = useRoute()

const itemId = route.params.id
const item = data.find(fault => fault.id === itemId)

</script>
<template>
    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default p-4">
        <h1 class="text-2xl font-bold mb-4">{{ item.na }}</h1>
        <p class="mb-2"><strong>Ошибка:</strong> {{ item.co }}</p>
        <strong>Описание:</strong>
        <p v-html="item.de" class="mb-2"></p>
        <p class="mb-2"><strong>Решение:</strong> {{ item.so }}</p>
    </div>
</template>