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
            this.style = {
                top: `${rect.bottom}px`,
                left: `${rect.left}px`,
                width: `${rect.width}px`,
            }
        },
    },
    beforeDestroy() {
        if (this.domPositionWatcher) {
            this.domPositionWatcher.destroy()
        }
    },
}
</script>
