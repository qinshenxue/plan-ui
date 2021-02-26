export const on = function on(element, event, handler) {
    if (element && event && handler) {
        element.addEventListener(event, handler, false)
    }
}

export const off = function off(element, event, handler) {
    if (element && event && handler) {
        element.addEventListener(event, handler, false)
    }
}
