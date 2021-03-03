<template>
    <div class="w-select-dropdown" v-show="visible" :style="style">
        <slot></slot>
    </div>
</template>

<script>
import DomPositionWatcher from '../../utils/domPositionWatcher'

export default {
    props: {
        visible: Boolean,
    },
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
    watch: {
        visible(v) {
            if (v) {
                this.handleResize()
                this.domPositionWatcher.init(this.select.$el)
            }
        },
    },
    mounted() {
        document.body.append(this.$el)
        this.select.popperElm = this.$el
        this.domPositionWatcher = new DomPositionWatcher(this.select.$el, this.handleResize)
    },
    methods: {
        handleResize() {
            const rect = this.select.$el.getBoundingClientRect()
            const maxHeight = window.innerHeight - rect.bottom
            const style = {
                top: `${rect.bottom}px`,
                maxHeight: `${Math.min(200, maxHeight - 20)}px`,
            }

            if (this.select.plain) {
                style.right = `${window.innerWidth - rect.right}px`
                style.width = `${this.select.dropdownWidth}px`
            } else {
                style.left = `${rect.left}px`
                style.width = `${rect.width}px`
            }
            this.style = style
        },
    },
    beforeDestroy() {
        if (this.domPositionWatcher) {
            this.domPositionWatcher.destroy()
        }
    },
}
</script>
