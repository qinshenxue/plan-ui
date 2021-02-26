<template>
    <div class="w-select-dropdown" :style="style">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            style: null,
        }
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
    },
    mounted() {
        document.body.append(this.$el)
        this.handleResize()
        this.select.popperElm = this.$el
    },
    methods: {
        handleResize() {
            const rect = this.select.$el.getBoundingClientRect()
            this.style = {
                top: `${rect.bottom}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
            }
        },
    },
}
</script>
