<template>
    <div class="">
        <p>
            <w-button type="primary" @click="$message.success('成功消息')">
                成功消息</w-button>
        </p>
        <p>
            <w-button type="primary" @click="$message.error('错误消息')">
                错误消息</w-button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {},
}
</script>
