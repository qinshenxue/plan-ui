class WatchDomResize {
    constructor(el, callback) {
        this._callback = callback
        this._scroller = null
        window.addEventListener('resize', callback)
        this.init(el)
    }

    init(el) {
        let scroller = this.getScrollParent(el)
        if (scroller) {
            if (scroller === window.document.body || scroller === window.document.documentElement) {
                scroller = window
            }
            if (!this._scroller || (this._scroller && this._scroller !== scroller)) {
                this._scroller = scroller
                scroller.addEventListener('scroll', this._callback)
            }
        }
    }

    getStyleComputedProperty = (element, property) => {
        const css = window.getComputedStyle(element, null)
        return css[property]
    }

    getScrollParent(element) {
        const parent = element.parentNode

        if (!parent) {
            return element
        }

        if (parent === window.document) {
            if (window.document.body.scrollTop || window.document.body.scrollLeft) {
                return window.document.body
            }
            return window.document.documentElement
        }

        if (
            ['scroll', 'auto'].indexOf(this.getStyleComputedProperty(parent, 'overflow')) !== -1 ||
            ['scroll', 'auto'].indexOf(this.getStyleComputedProperty(parent, 'overflow-x')) !==
                -1 ||
            ['scroll', 'auto'].indexOf(this.getStyleComputedProperty(parent, 'overflow-y')) !== -1
        ) {
            return parent
        }
        return this.getScrollParent(element.parentNode)
    }

    destroy() {
        if (this.scroller) {
            this.scroller.removeEventListener('scroll', this._callback)
        }
        window.removeEventListener('resize', this._callback)
    }
}

export default WatchDomResize
