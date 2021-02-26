<template>
    <div class="el-select" v-clickoutside="handleClose">
        <div class="el-select__value" @click="handleClick">
            <div class="el-select__value-content">{{value}}</div>
            <div class="el-select__value-icon"></div>
        </div>
        <selectDropdown v-show="dropdownVisible">
            <slot></slot>
        </selectDropdown>
    </div>
</template>

<script>
import selectDropdown from './select-dropdown.vue'
import clickoutside from '../../directives/clickoutside'

export default {
    name: 'w-select',
    directives: {
        clickoutside,
    },
    components: { selectDropdown },
    props: {
        value: [String, Number],
    },
    data() {
        return {
            dropdownVisible: false,
        }
    },
    methods: {
        handleClick() {
            this.dropdownVisible = true
        },
        handleClose() {
            this.dropdownVisible = false
        },
    },
}
</script>
