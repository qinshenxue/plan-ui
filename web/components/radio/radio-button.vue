<template>
    <label class="w-radio-button"
           :class="[ size ? 'w-radio-button--' + size : '',]">
        <input type="radio" :value="value" v-model="val"
               class="w-radio-button__input" @change="handleChange">
        <div class="w-radio-button__inner">
            <slot></slot>
        </div>

    </label>
</template>

<script>
export default {
    name: 'w-radio-button',
    props: {
        value: [String, Number, Boolean],
    },
    data() {
        return {}
    },
    computed: {
        val: {
            get() {
                return this.radioGroup.value
            },
            set(v) {
                this.radioGroup.$emit('input', v)
            },
        },
        radioGroup() {
            let parent = this.$parent
            while (parent) {
                if (parent.$options.name !== 'w-radio-group') {
                    parent = parent.$parent
                } else {
                    return parent
                }
            }
            return false
        },
        size() {
            return this.radioGroup.size
        },
    },
    methods: {
        handleChange() {
            this.radioGroup.$emit('change', this.value, this.val)
        },
    },
}
</script>
