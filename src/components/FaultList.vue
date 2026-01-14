<script setup>
import { onMounted, ref, computed } from 'vue'
import { initFlowbite } from 'flowbite'

import data from '../data/lm_faults.json'

const searchTerm = ref('')

const items = computed(() => {
    return data.filter(item => 
        ['co', 'na', 'de'].some(key => item[key].toLowerCase().includes(searchTerm.value.toLowerCase()))
    )
})

</script>
<template>
    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <div class="p-4">
                <label for="input-group-1" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/></svg>
                    </div>
                    <input v-model="searchTerm" type="text" id="input-group-1" class="block w-full max-w-96 ps-9 pe-3 py-2 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="Search">
                </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium hidden md:table-header-group">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Code
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Fault Name
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Description
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.id" class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium flex flex-col md:table-row mb-4 md:mb-0">
                        <td class="px-6 py-2 flex-none md:table-cell md:w-auto before:font-bold before:mr-2 before:block md:before:hidden font-bold">
                                {{ item.co }}
                        </td>
                        <td class="px-6 py-2 md:py-6 flex-1 md:table-cell  before:font-bold before:mr-2 before:block md:before:hidden font-bold">
                            <RouterLink :to="`/fault/${item.id}`">
                                {{ item.na }}
                            </RouterLink>
                        </td>
                        <td v-html="item.de" class="px-6 md:px-4 py-2 md:py-6 block md:table-cell  before:font-bold before:mr-2 before:block md:before:hidden">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>