import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',
            'component': () => import('./components/FaultList.vue')
        },
        {
            'path': '/fault/:id',
            'component': () => import('./components/FaultShow.vue')
        },
        {
            'path': '/components',
            'name': 'components',
            'component': () => import('./components/ComponentList.vue')
        },
        {
            'path': '/component/:id',
            'name': 'component',
            'component': () => import('./components/ComponentShow.vue')
        },
    ]
})
createApp(App).use(router).mount('#app')