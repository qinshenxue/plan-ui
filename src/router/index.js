import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/components-demo.vue'
import Tree from '../views/tree.vue'
import Progress from '../views/progress.vue'
import Select from '../views/select.vue'
import Button from '../views/button.vue'
import Dialog from '../views/dialog.vue'
import Message1 from '../views/message.vue'
import Input from '../views/input.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/components/button',
    },
    {
        path: '/components',
        component: Demo,
        children: [
            {
                path: 'tree',
                component: Tree,
            },
            {
                path: 'progress',
                component: Progress,
            },
            {
                path: 'select',
                component: Select,
            },
            {
                path: 'button',
                component: Button,
            },
            {
                path: 'message',
                component: Message1,
            },
            {
                path: 'dialog',
                component: Dialog,
            },
            {
                path: 'input',
                component: Input,
            },
        ],
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
]

const router = new VueRouter({
    routes,
})

export default router
