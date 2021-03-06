<template>
    <div class="w-select-tree">
        <tree :data="data" v-bind="$attrs" :multiple="isMultiple"
              :nodeDisabledMethod="nodeDisabledMethod" v-model="value">
            <template slot-scope="props">
                <slot :data="props.data"></slot>
            </template>
        </tree>
    </div>
</template>

<script>
import tree from '../tree/tree.vue'

export default {
    name: 'w-select-tree',
    components: {
        tree,
    },
    props: {
        data: Array,
        nodeDisabledMethod: Function,
    },
    data() {
        return {}
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
        isMultiple() {
            return this.select.multiple
        },
        value: {
            get() {
                return this.select.value
            },
            set(v) {
                this.select.$emit('select', v)
                console.log('select-tree set', v)
            },
        },
    },
    watch: {
        data(v) {
            this.select.$emit('add-option', this._flatTree(v))
        },
    },
    created() {
        if (this.data && this.data.length) {
            this.select.$emit('add-option', this._flatTree(this.data))
        }
    },
    methods: {
        _flatTree(data) {
            const flatNodes = []
            const _flat = (arr) => {
                arr.forEach((item) => {
                    flatNodes.push({
                        label: item[this.$attrs.nameKey],
                        value: item[this.$attrs.nodeKey],
                    })
                    if (item.children && item.children.length) {
                        _flat(item.children)
                    }
                })
            }
            _flat(data)
            return flatNodes
        },
        // _initValue(v) {
        //     if (this.isMultiple) {
        //         if (Array.isArray(v)) {
        //             return v
        //         }
        //         return []
        //     }
        //     return v
        // },
    },
}
</script>
