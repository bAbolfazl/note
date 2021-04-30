import Vue from 'vue'
import Router from 'vue-router'

import Index from '../views/index.vue'
import Add from '../views/add.vue'
import Edit from '../views/edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/edit/:id',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/add',
            name: 'Add',
            component: Add
        },
    ]
})