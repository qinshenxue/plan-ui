<template>
    <div class="w-select-dropdown" v-show="visible" :style="style"
         v-z-index="visible">
        <slot></slot>
    </div>
</template>

<script>
import DomPositionWatcher from '../../utils/domPositionWatcher'
import zIndex from '../../directives/z-index'

export default {
    directives: {
        zIndex,
    },
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
                if (!this.domPositionWatcher) {
                    this.init()
                }
                this.handleResize()
                this.domPositionWatcher.init(this.select.$el)
            }
        },
    },
    mounted() {
        if (this.visible) {
            this.init()
        }
    },
    methods: {
        init() {
            document.body.append(this.$el)
            this.select.popperElm = this.$el
            this.domPositionWatcher = new DomPositionWatcher(this.select.$el, this.handleResize)
        },
        handleResize() {
            const rect = this.select.$el.getBoundingClientRect()
            const style = {}
            const topSpace = rect.top
            const winHeight = window.innerHeight
            const bottomSpace = winHeight - rect.bottom
            if (bottomSpace < 200 && bottomSpace < topSpace) {
                style.bottom = `${winHeight - rect.top}px`
            } else {
                style.top = `${rect.bottom}px`
            }
            style.maxHeight = `${Math.min(200, Math.max(topSpace, bottomSpace))}px`

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
