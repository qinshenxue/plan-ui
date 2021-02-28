<template>
    <div class="w-input" :class="[
        size?'w-input--'+size:'',{
        'w-input--prefix':$slots.prefix,
        'w-input--suffix':$slots.suffix,
    }]">
        <div class="w-input__prefix" v-if="$slots.prefix">
            <div class="w-input__prefix-inner">
                <slot name="prefix"></slot>
            </div>
        </div>
        <input type="text" class="w-input__inner">
        <div class="w-input__suffix" v-if="$slots.suffix">
            <div class="w-input__suffix-inner">
                <slot name="suffix"></slot>
            </div>
        </div>
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
