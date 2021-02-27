<template>
    <div class="el-select" v-clickoutside="handleClose">
        <div class="el-select__value" @click="handleClick">
            <div class="el-select__value-content">{{selectedLabel}}
                <template
                          v-if="multiple && value.length>1">等{{value.length}}个</template>
            </div>
            <div class="el-select__value-icon"></div>
        </div>
        <selectDropdown ref="dropdown">
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
        value: [String, Number, Array],
        multiple: Boolean,
    },
    data() {
        return {
            options: [],
            selectedValue: this.value,
        }
    },
    computed: {
        selectedLabel() {
            let label = ''
            let val = this.value
            if (this.multiple && Array.isArray(this.value) && this.value.length) {
                val = this.value[0]
            }
            this.options.some((item) => {
                if (val === item.value) {
                    label = item.label
                    return true
                }
                return false
            })

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
            this.$refs.dropdown.show()
        },
        handleClose() {
            this.$refs.dropdown.hide()
        },
    },
}
</script>
