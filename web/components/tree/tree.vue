<template>
    <div class="w-tree">
        <tree-node class="root-node" v-for="(nodeData,i) in treeData"
                   :data="nodeData" :key="nodeKey && nodeData[nodeKey] || i">
        </tree-node>
    </div>
</template>

<script>
import treeNode from './tree-node.vue'

export default {
    name: 'w-tree',
    components: {
        treeNode,
    },
    props: {
        value: [String, Number, Array],

        nodeKey: String,

        nameKey: String,

        showCheckbox: Boolean,

        // 数据源
        data: Array,
        // 层级间距
        gap: {
            type: Number,
            default: 20,
        },

        // 展开所有
        expandAll: Boolean,

        expandLevel: {
            type: Number,
            default: 1,
        },
        // 树节点是否可以点击
        nodeDisabledMethod: Function,

        // 多选
        multiple: Boolean,

        renderContent: Function,

        checkStrictly: Boolean,
    },
    data() {
        return {
            treeData: this.data || [],
            isTree: true,
            selected: this._initValue(this.value),
        }
    },
    created() {
        if (this.checkStrictly) {
            this._checkData()
        }
    },
    watch: {
        value(v) {
            this.selected = this._initValue(v)
            if (this.checkStrictly) {
                this._checkData()
            }
        },
        data(v) {
            this.treeData = v || []
        },
    },
    methods: {
        _initValue(v) {
            if (this.multiple) {
                if (Array.isArray(v)) {
                    return v
                }
                return []
            }
            return v
        },
        _checkData() {
            this.$nextTick(function nextTick() {
                const check = (arr) => {
                    arr.forEach((item) => {
                        if (item.isTreeNode && item.checked) {
                            this._checkStrictly(item)
                        } else if (item.$children.length) {
                            check(item.$children)
                        }
                    })
                }

                check(this.$children)
            })
        },
        _handleNodeClick(node, nodeVm) {
            if (this.nodeDisabledMethod && this.nodeDisabledMethod(node)) {
                return
            }
            if (this.multiple) {
                const val = node[this.nodeKey]

                const index = this.selected.indexOf(val)
                if (index > -1) {
                    this.selected.splice(index, 1)
                } else {
                    this.selected.push(val)
                }
            } else {
                const nodeVal = node[this.nodeKey]
                if (this.showCheckbox) {
                    let selected = null
                    if (this.showCheckbox && this.selected !== nodeVal) {
                        selected = nodeVal
                    }
                    this.selected = selected
                } else {
                    this.selected = nodeVal
                }
            }
            if (this.checkStrictly) {
                this._checkStrictly(nodeVm)
            }
            this.$emit('input', this.selected)
            this.$emit('node-click', node)
        },

        _checkStrictly(nodeVm) {
            const checked = nodeVm.checked
            if (checked) {
                nodeVm.isHalfChecked = false
            }

            const _syncChildren = (arr) => {
                arr.forEach((item) => {
                    if (item.isTreeNode) {
                        const index = this.selected.indexOf(item.data[this.nodeKey])
                        if (checked) {
                            // 子节点全选中
                            if (index === -1) {
                                this.selected.push(item.data[this.nodeKey])
                                item.isHalfChecked = false
                            }
                        } else if (index > -1) {
                            // 子节点全删除
                            this.selected.splice(index, 1)
                        }
                        if (item.$children && item.$children.length) {
                            _syncChildren(item.$children)
                        }
                    }
                })
            }

            if (nodeVm.$children && nodeVm.$children.length) {
                _syncChildren(nodeVm.$children)
            }

            let parent = nodeVm.$parent

            while (parent && !parent.isTree && parent.isTreeNode) {
                const nodeValue = parent.data[this.nodeKey]

                const index = this.selected.indexOf(nodeValue)
                const checkedNodes = []
                const halfCheckedNodes = []
                const children = parent.$children

                children.forEach((child) => {
                    if (child.checked) {
                        checkedNodes.push(child)
                    } else if (child.isHalfChecked) {
                        halfCheckedNodes.push(child)
                    }
                })

                const checkedCount = checkedNodes.length
                const childrenCount = children.length
                const halfCheckedCount = halfCheckedNodes.length

                if (checked) {
                    if (index === -1 && checkedCount === childrenCount) {
                        this.selected.push(nodeValue)
                    }
                } else if (index > -1) {
                    this.selected.splice(index, 1)
                }
                parent.isHalfChecked =
                    halfCheckedCount > 0 || (checkedCount > 0 && checkedCount !== childrenCount)
                parent = parent.$parent
            }
        },

        getCheckedNodes() {
            if (this.multiple) {
                const nodes = []
                if (this.selected.length) {
                    const recursion = (arr) => {
                        arr.forEach((item) => {
                            if (this.selected.indexOf(item[this.nodeKey]) > -1) {
                                nodes.push(item)
                            }
                            if (item.children) {
                                recursion(item.children)
                            }
                        })
                    }
                    recursion(this.data)
                }
                return nodes
            }

            let node = null

            const recursion = (arr) => {
                const result = arr.some((item) => {
                    if (item[this.nodeKey] === this.selected) {
                        node = item
                        return true
                    }
                    if (item.children) {
                        return recursion(item.children)
                    }
                    return false
                })
                return result
            }
            recursion(this.data)
            return node
        },
    },
}
</script>
