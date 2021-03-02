import ZIndexManager from '../utils/zIndexManager'

const store = []

let modal = null

function createModal() {
    if (!modal) {
        const div = document.createElement('div')
        div.classList.add('w-modal')
        div.style.display = 'none'
        document.body.appendChild(div)
        modal = div
    }
}

export default {
    bind(el, binding) {
        const zIndex = ZIndexManager.nextZIndex()
        el.style.zIndex = zIndex
        const storeItem = {
            el,
            visible: binding.value,
            zIndex,
        }
        createModal()
        store.push(storeItem)
    },
    update(el, binding) {
        store.some((item) => {
            if (item.el === el) {
                item.visible = binding.value
                if (binding.value) {
                    modal.style.display = ''
                    modal.style.zIndex = item.zIndex - 1
                } else {
                    let modalVisible = 'none'
                    for (let i = store.length - 1; i >= 0; i -= 1) {
                        const storeItem = store[i]
                        if (storeItem.visible === true) {
                            modal.style.zIndex = storeItem.zIndex - 1
                            modalVisible = ''
                            break
                        }
                    }
                    modal.style.display = modalVisible
                }

                return true
            }
            return false
        })
    },
    unbind(el) {
        store.some((item, i) => {
            if (item.el === el) {
                store.splice(i, 1)
                return true
            }
            return false
        })
    },
}
