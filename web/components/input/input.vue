<template>
    <div class="w-input" :class="[size?'w-input--'+size:'']">
        <input type="text" class="w-input__inner">
    </div>
</template>

<script>
export default {
    name: 'w-input',
    props: {
        size: String,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
