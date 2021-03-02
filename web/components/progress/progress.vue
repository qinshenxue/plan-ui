<template>
    <div class="w-progress" :class="{
    'w-progress--circle':type==='circle',
    'w-progress--gradient':gradient
    }">
        <div v-if="type==='circle'" class="w-progress-circle">
            <svg viewBox="0 0 100 100"
                 :style="{height: width + 'px', width: width + 'px'}">
                <defs v-if="gradient">
                    <linearGradient x1="1" y1="0" x2="0" y2="0" id="gradient">
                        <stop offset="0%" :stop-color="gradient[0]" />
                        <stop offset="100%" :stop-color="gradient[1]" />
                    </linearGradient>
                </defs>
                <path :d="trackPath" :stroke-width="relativeStrokeWidth"
                      fill="none" class="w-progress-circle__track"
                      :style="trailPathStyle">
                </path>
                <path :d="trackPath" fill="none" stroke-linecap="round"
                      :stroke="gradient?'url(#gradient)':null"
                      :stroke-width="value ? relativeStrokeWidth : 0"
                      :class="gradient?'':'w-progress-circle__path--stroke'"
                      :style="circlePathStyle">
                </path>
            </svg>
        </div>
        <div v-else class="w-progress-bar" :style="barStyle">
            <div class="w-progress-bar-inner" :style="barInnerStyle"></div>
        </div>
        <div class="w-progress__text" v-if="showText">
            <slot>{{value}}%</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'w-progress',
    props: {
        /**
         * circle 圆形进度
         */
        type: String,
        strokeWidth: {
            type: Number,
            default: 6,
        },
        showText: Boolean,
        value: Number,
        width: {
            type: Number,
            default: 126,
        },
        /**
         * 渐变配置
         * [#FF2900，#FFAA26]
         */
        gradient: Array,
    },
    computed: {
        barStyle() {
            if (this.strokeWidth) {
                return {
                    height: `${this.strokeWidth}px`,
                }
            }
            return null
        },
        barInnerStyle() {
            const style = {}
            if (this.value != null) {
                style.width = `${this.value}%`
            }
            if (this.strokeWidth) {
                style.height = `${this.strokeWidth}px`
            }
            return style
        },
        relativeStrokeWidth() {
            return ((this.strokeWidth / this.width) * 100).toFixed(1)
        },
        radius() {
            if (this.type === 'circle') {
                return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10)
            }
            return 0
        },
        trackPath() {
            const radius = this.radius
            return `
          M 50 50
          m 0 -${radius}
          a ${radius} ${radius} 0 1 1 0 ${radius * 2}
          a ${radius} ${radius} 0 1 1 0 -${radius * 2}
          `
        },
        perimeter() {
            return 2 * Math.PI * this.radius
        },

        trailPathStyle() {
            return {
                strokeDasharray: `${this.perimeter}px, ${this.perimeter}px`,
            }
        },
        circlePathStyle() {
            return {
                strokeDasharray: `${this.perimeter * (this.value / 100)}px, ${this.perimeter}px`,
                transition: 'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease',
            }
        },
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
