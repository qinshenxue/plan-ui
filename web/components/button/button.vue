<template>
    <button class="w-button" @click='handleClick' :class="[
            type?'w-button--'+type:'',
            size?'w-button--'+size:'',
            round?'w-button--round':'',
            plain?'w-button--plain':'',
            ]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'w-button',
    props: {
        type: String,
        size: String,
        round: Boolean,
        block: Boolean,
        plain: Boolean,
    },
    data() {
        return {}
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        },
    },
}
</script>
