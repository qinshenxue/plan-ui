<template>
    <div class="w-select" :class="[{
        'w-select--dropdown':dropdownVisible,
        'w-select--plain':plain,
        'w-select--placeholder':isEmptyValue
    },size?'w-select--'+size:'']" v-clickoutside="handleClose">
        <div class="w-select__label" @click="handleClick">
            <div class="w-select__label-inner">{{selectedLabel}}
            </div>
            <div class="w-selet__label-multiple"
                 v-if="multiple && value.length>1">等{{value.length}}个</div>
            <div class="w-select__arrow"></div>
        </div>
        <selectDropdown ref="dropdown" :class="dropdownClass"
                        :visible.sync="dropdownVisible">
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
        dropdownWidth: [Number],
        dropdownClass: [String, Array],
        placeholder: String,
        value: [String, Number, Array],
        multiple: Boolean,
        plain: Boolean,
        size: String,
    },
    data() {
        return {
            options: [],
            dropdownVisible: false,
            selectedValue: this.initSelectedValue(this.value),
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
            this.selectedValue = this.initSelectedValue(v)
            // if (this.plain) {
            //     this.$nextTick(function () {
            //         this.$refs.dropdown.handleResize()
            //     })
            // }
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
            if (Array.isArray(option)) {
                this.options = option
            } else {
                this.options.push(option)
            }
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
                if (Array.isArray(val)) {
                    this.selectedValue = val
                } else {
                    const valIndex = this.selectedValue.indexOf(val)
                    if (valIndex > -1) {
                        this.selectedValue.splice(valIndex, 1)
                    } else {
                        this.selectedValue.push(val)
                    }
                }
            } else {
                this.selectedValue = val
                this.handleClose()
            }
            this.$emit('input', this.selectedValue)
            this.$emit(
                'change',
                this.selectedValue,
                this.multiple ? this.value.slice() : this.value
            )
        })
    },
    methods: {
        initSelectedValue(v) {
            if (this.multiple) {
                if (Array.isArray(v)) {
                    return v.slice()
                }
                return []
            }
            if (typeof v === 'string' || typeof v === 'number') {
                return v
            }
            return ''
        },
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
