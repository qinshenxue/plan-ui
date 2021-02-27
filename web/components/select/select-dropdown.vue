<template>
    <div class="w-select-dropdown" v-show="visible" :style="style">
        <slot></slot>
    </div>
</template>

<script>
import popup from '../../mixins/popup'

export default {
    mixins: [popup],
    data() {
        return {
            visible: false,
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
        this.select.popperElm = this.$el
        this.$on('pupup-update', this.handleResize)
    },
    methods: {
        show() {
            this.handleResize()
            this._initPopup(this.select.$el)
            this.visible = true
        },
        hide() {
            this.visible = false
        },
        handleResize() {
            const rect = this.select.$el.getBoundingClientRect()
            console.log('rect: ', rect)
            this.style = {
                top: `${rect.bottom}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
            }
        },
    },
}
</script>
