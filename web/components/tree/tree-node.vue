<template>
    <div class="w-tree-node">
        <div class="w-tree-node__content" :class="cls"
             :style="{paddingLeft:gap+'px'}">
            <div class="w-tree-node__icons">
                <div class="w-tree-node-fold-icon" :class="{'is-expand':expand}"
                     @click.stop="_handleExpandClick"></div>
                <div class="w-tree-node-checkbox" v-if="tree.showCheckbox"
                     @click="_handleCheckboxClick">
                    <div class="w-tree-node-checkbox__inner"></div>
                </div>
            </div>
            <div class="w-tree-node__name" @click="_handleNodeClick">
                <NodeContent :data="data"></NodeContent>
            </div>
        </div>
        <div class="w-tree-node__children" v-show="expand">
            <tree-node v-for="childData in data.children" :data="childData"
                       :key="childData[tree.nodeKey]">
            </tree-node>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tree-node',
    components: {
        NodeContent: {
            props: {
                data: {
                    type: Object,
                    required: true,
                },
            },
            render(h) {
                const parent = this.$parent
                const tree = parent.tree
                const data = this.data
                if (parent.renderContent) {
                    return parent.renderContent.call(parent._renderProxy, h, {
                        _self: tree.$vnode.context,
                        data,
                    })
                }
                if (tree.$scopedSlots.default) {
                    return tree.$scopedSlots.default({ data })
                }

                return <span>{data[tree.nameKey]}</span>
            },
        },
    },
    props: {
        data: Object,
        renderContent: Function,
    },
    data() {
        return {
            isTreeNode: true,
            gap: 0,
            level: 1,
            tree: null, // 根节点
            expand: false,
            isHalfChecked: false,
        }
    },
    computed: {
        cls() {
            return {
                'w-tree-node--leaf': this.isLeaf,
                'w-tree-node--checked': this.checked,
                'w-tree-node--checkbox': this.tree.showCheckbox,
                'w-tree-node--disabled': this.isDisabled,
                'w-tree-node--half-checked': this.isHalfChecked,
            }
        },
        checked() {
            const val = this.data[this.tree.nodeKey]
            return this.tree.multiple
                ? this.tree.selected.indexOf(val) > -1
                : this.tree.selected === val
        },
        // isHalfChecked() {
        //     if (!this.tree.checkStrictly) {
        //         return false
        //     }
        //     let checked = false
        //     if (!this.checked) {
        //         const checkedNodes = []

        //         const hasHalfCheckedChild = this.$children.some((item) => {
        //             if (item.isHalfChecked) {
        //                 return true
        //             }
        //             if (item.checked) {
        //                 checkedNodes.push(item)
        //             }
        //             return false
        //         })

        //         if (
        //             hasHalfCheckedChild ||
        //             (checkedNodes.length && checkedNodes.length !== this.$children.length)
        //         ) {
        //             checked = true
        //         }
        //     }
        //     console.count('isHalfChecked')
        //     return checked
        // },
        isRoot() {
            return this.$parent && this.$parent.isTree
        },
        isLeaf() {
            return !this.data.children || !this.data.children.length
        },
        isDisabled() {
            return this.tree.nodeDisabledMethod && this.tree.nodeDisabledMethod(this.data)
        },
        hasChildren() {
            return this.data.children && this.data.children.length
        },
    },

    created() {
        const parent = this.$parent
        if (parent.isTree) {
            this.tree = parent
            this.gap = 0
        } else {
            this.level = parent.level + 1
            this.tree = parent.tree
            this.gap = parent.gap + this.tree.gap
        }

        // if (this.checked) {
        //     this.syncParentExpand()
        // }
        this.expand = this.tree.expandAll || this.level < this.tree.expandLevel
    },
    updated() {
        // if (this.checked) {
        //     this.syncParentExpand()
        // }
    },
    methods: {
        // syncParentExpand() {
        //     // 选中的节点，父级全部要展开
        //     let _parent = this.$parent
        //     while (_parent.expand === false) {
        //         _parent.expand = true
        //         _parent = _parent.$parent
        //     }
        // },
        _handleCheckboxClick() {
            this.tree._handleNodeClick(this.data, this)
        },
        _handleExpandClick() {
            this.expand = !this.expand
        },
        _handleNodeClick() {
            if (this.isDisabled) {
                this._handleExpandClick()
            }
            this.tree._handleNodeClick(this.data, this)
        },
    },
}
</script>
