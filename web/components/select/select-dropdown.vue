<template>
    <div class="w-select-dropdown" v-z-index="visible" v-show="visible"
         :style="style">
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
                if (this.select.plain) {
                    //  fix 滚动条宽度问题
                    this.$nextTick(() => {
                        const rect = this.$el.getBoundingClientRect()
                        this.style.minWidth = `${rect.width}px`
                    })
                }
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
            document.body.appendChild(this.$el)
            this.select.popperElm = this.$el
            this.domPositionWatcher = new DomPositionWatcher(this.select.$el, this.handleResize)
        },
        handleResize() {
            if (!this.visible) {
                return
            }
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

            if (this.select.plain) {
                style.right = `${window.innerWidth - rect.right}px`
                style.minWidth = `${rect.width}px`
                style.maxWidth = `${this.select.dropdownWidth}px`
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
