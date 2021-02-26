<template>
    <div class="w-select-option" :class="{
        'is-active':isSelected
    }" @click="handleClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'w-select-option',
    props: {
        label: [String],
        value: [String, Number, Boolean],
    },
    data() {
        return {}
    },
    computed: {
        select() {
            let parent = this.$parent
            while (parent) {
                if (parent.$options.name !== 'w-select') {
                    parent = parent.$parent
                } else {
                    return parent
                }
            }
            return false
        },
        isSelected() {
            return this.select.value === this.value
        },
    },
    methods: {
        handleClick() {
            this.select.$emit('input', this.value)
            this.select.handleClose()
        },
    },
}
</script>
