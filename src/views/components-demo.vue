<template>
    <div class="components-demo">
        <div class="nav">
            <router-link tag="div" class="nav-item" v-for="item in nav"
                         :key="item.path" :to="`/components/${item.path}`">
                {{item.name}}
            </router-link>

        </div>
        <div class="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nav: [
                {
                    name: '按钮',
                    path: 'button',
                },
                {
                    name: '输入框',
                    path: 'input',
                },
                {
                    name: '进度',
                    path: 'progress',
                },
                {
                    name: '下拉框',
                    path: 'select',
                },
                {
                    name: '树',
                    path: 'tree',
                },
                {
                    name: '消息提示',
                    path: 'message',
                },
                {
                    name: '对话框',
                    path: 'dialog',
                },
            ],
        }
    },
    methods: {},
}
</script>
