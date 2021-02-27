<template>
    <div class="w-select-option" :class="{
        'is-active':isSelected
    }" @click="handleClick">
        <slot>{{label}}</slot>
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
        isMultiple() {
            return this.select.multiple
        },
        isSelected() {
            if (!this.isMultiple) {
                return this.select.value === this.value
            }
            return this.select.value.indexOf(this.value) > -1
        },
    },
    created() {
        this.select.$emit('add-option', {
            label: this.label,
            value: this.value,
        })
    },
    beforeDestroy() {
        this.select.$emit('remove-option', this.value)
    },
    methods: {
        handleClick() {
            this.select.$emit('select', this.value)
        },
    },
}
</script>
