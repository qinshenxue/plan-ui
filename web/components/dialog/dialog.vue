<template>
    <transition name="w-dialog-fade" @after-enter="afterEnter"
                @after-leave="afterLeave">
        <div v-show="visible" class="w-dialog__wrapper" v-z-index="visible">
            <div :style="style" :key="key" :class="['w-dialog',  customClass]"
                 ref="dialog">
                <div class="w-dialog__header">
                    <slot name="title">
                        <span class="w-dialog__title">{{ title }}</span>
                    </slot>
                    <button type="button" class="w-dialog__headerbtn"
                            v-if="showClose" @click="handleClose">
                        <i class="w-dialog__close"></i>
                    </button>
                </div>
                <div class="w-dialog__body" v-if="rendered">
                    <slot></slot>
                </div>
                <div class="w-dialog__footer" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import zIndex from '../../directives/z-index'

export default {
    name: 'w-dialog',
    directives: { zIndex },
    props: {
        title: String,
        width: {
            type: [String, Number],
            default: 500,
        },
        visible: Boolean,
        showClose: {
            type: Boolean,
            default: true,
        },
        customClass: {
            type: String,
            default: '',
        },
        destroyOnClose: Boolean,
    },
    data() {
        return {
            key: 0,
            closed: false,
            rendered: true,
        }
    },
    computed: {
        style() {
            const style = {
                width: `${this.width}px`,
            }
            if (typeof this.width === 'string') {
                style.width = this.width
            }

            return style
        },
    },
    watch: {
        visible(val) {
            if (val) {
                this.closed = false
            } else {
                if (!this.closed) this.$emit('close')
                if (this.destroyOnClose) {
                    this.$nextTick(() => {
                        this.key += 1
                    })
                }
            }
        },
    },
    mounted() {
        document.body.appendChild(this.$el)
    },

    methods: {
        handleClose() {
            this.$emit('update:visible', false)
            this.$emit('close')
            this.closed = true
        },
        afterEnter() {
            this.$emit('opened')
        },
        afterLeave() {
            this.$emit('closed')
        },
    },
    destroyed() {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
    },
}
</script>
