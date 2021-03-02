import Vue from 'vue'
import Main from './main.vue'
import ZIndexManager from '../../utils/zIndexManager'

const MessageConstructor = Vue.extend(Main)
let instance
const instances = []
let seed = 1

const Message = function Message(options) {
    if (Vue.prototype.$isServer) return
    options = options || {}
    if (typeof options === 'string') {
        options = {
            message: options,
        }
    }
    const userOnClose = options.onClose
    const id = `message_${seed}`
    seed += 1

    options.onClose = function messageOnClose() {
        Message.close(id, userOnClose)
    }
    instance = new MessageConstructor({
        data: options,
    })
    instance.id = id
    instance.$mount()
    document.body.appendChild(instance.$el)
    let verticalOffset = options.offset || 20
    instances.forEach((item) => {
        verticalOffset += item.$el.offsetHeight + 16
    })
    instance.verticalOffset = verticalOffset
    instance.visible = true
    instance.$el.style.zIndex = ZIndexManager.nextZIndex()
    instances.push(instance)
    return instance
}
const types = ['success', 'warning', 'info', 'error']

types.forEach((type) => {
    Message[type] = (options) => {
        if (typeof options === 'string') {
            options = {
                message: options,
            }
        }
        options.type = type
        return Message(options)
    }
})

Message.close = function messageClose(id, userOnClose) {
    const len = instances.length
    let index = -1
    let removedHeight
    for (let i = 0; i < len; i += 1) {
        if (id === instances[i].id) {
            removedHeight = instances[i].$el.offsetHeight
            index = i
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i])
            }
            instances.splice(i, 1)
            break
        }
    }
    if (len <= 1 || index === -1 || index > instances.length - 1) return
    for (let i = index; i < len - 1; i += 1) {
        const dom = instances[i].$el
        dom.style.top = `${parseInt(dom.style.top, 10) - removedHeight - 16}px`
    }
}

Message.closeAll = function messageCloseAll() {
    for (let i = instances.length - 1; i >= 0; i -= 1) {
        instances[i].close()
    }
}

export default Message
