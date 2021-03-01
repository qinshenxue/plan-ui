<template>
    <div class="el-select" :class="{
        'el-select--dropdown':dropdownVisible,
        'el-select--plain':plain,
        'el-select--placeholder':isEmptyValue
    }" v-clickoutside="handleClose">
        <div class="el-select__label" @click="handleClick">
            <div class="el-select__label-inner">{{selectedLabel}}
            </div>
            <div class="el-selet__label-multiple"
                 v-if="multiple && value.length>1">等{{value.length}}个</div>
            <div class="el-select__arrow"></div>
        </div>
        <selectDropdown :visible.sync="dropdownVisible">
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
        placeholder: String,
        value: [String, Number, Array],
        multiple: Boolean,
        plain: Boolean,
    },
    data() {
        return {
            options: [],
            dropdownVisible: false,
            selectedValue: this.value,
        }
    },
    computed: {
        isEmptyValue() {
            if (this.multiple) {
                return (Array.isArray(this.value) || true) && !this.value.length
            }
            return this.value == null || this.value === ''
        },
        selectedLabel() {
            let label = this.placeholder
            if (this.multiple && Array.isArray(this.value) && this.value.length) {
                this.options.some((item) => {
                    if (this.value.indexOf(item.value) > -1) {
                        label = item.label
                        return true
                    }
                    return false
                })
            } else {
                this.options.some((item) => {
                    if (this.value === item.value) {
                        label = item.label
                        return true
                    }
                    return false
                })
            }

            return label
        },
    },
    watch: {
        value(v) {
            this.selectedValue = v
        },
        options(v) {
            if (this.multiple) {
                let isChange = false
                for (let i = 0; i < this.selectedValue.length; i += 1) {
                    const val = this.selectedValue[i]
                    const isValid = v.some((item) => {
                        if (item.value === val) {
                            return true
                        }
                        return false
                    })
                    if (!isValid) {
                        isChange = true
                        this.selectedValue.splice(i, 1)
                        i -= 1
                    }
                }
                if (isChange) {
                    this.$emit('input', this.selectedValue)
                }
            } else {
                const isValid = v.some((item) => {
                    if (item.value === this.selectedValue) {
                        return true
                    }
                    return false
                })
                if (!isValid) {
                    this.selectedValue = null
                    this.$emit('input', this.selectedValue)
                }
            }
        },
    },
    created() {
        this.$on('add-option', (option) => {
            this.options.push(option)
        })
        this.$on('remove-option', (value) => {
            this.options.some((item, i) => {
                if (item.value === value) {
                    this.options.splice(i, 1)
                    return true
                }
                return false
            })
        })
        this.$on('select', (val) => {
            if (this.multiple) {
                const valIndex = this.selectedValue.indexOf(val)
                if (valIndex > -1) {
                    this.selectedValue.splice(valIndex, 1)
                } else {
                    this.selectedValue.push(val)
                }
            } else {
                this.selectedValue = val
                this.handleClose()
            }
            this.$emit('input', this.selectedValue)
        })
    },
    methods: {
        setSelectedLabel(text) {
            this.selectedLabel = text
        },
        handleClick() {
            this.dropdownVisible = !this.dropdownVisible
        },
        handleClose() {
            this.dropdownVisible = false
        },
    },
}
</script>
