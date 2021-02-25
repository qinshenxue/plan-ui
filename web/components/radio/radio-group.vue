<template>
    <div class="w-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'w-radio-group',
    props: {
        size: String,
        value: [String, Number, Boolean],
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
