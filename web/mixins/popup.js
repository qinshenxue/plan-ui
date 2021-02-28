export default {
    mounted() {
        window.addEventListener('resize', this._handleResize)
    },
    beforeDestroy() {
        if (this.scroller) {
            console.log('pupup removeEventListener')
            this.scroller.removeEventListener('scroll', this._handleResize)
        }
        window.removeEventListener('resize', this._handleResize)
    },
    methods: {
        _initPopup(el) {
            let scroller = this._getScrollParent(el)
            if (scroller) {
                if (
                    scroller === window.document.body ||
                    scroller === window.document.documentElement
                ) {
                    scroller = window
                }
                scroller.addEventListener('scroll', this._handleResize)
                console.log('scroller: ', scroller)

                this.scroller = scroller
            }
        },
        _handleResize() {
            this.$emit('pupup-update')
        },
        _getStyleComputedProperty(element, property) {
            const css = window.getComputedStyle(element, null)
            return css[property]
        },
        _getScrollParent(element) {
            const parent = element.parentNode

            if (!parent) {
                return element
            }

            if (parent === window.document) {
                // Firefox puts the scrollTOp value on `documentElement` instead of `body`, we then check which of them is
                // greater than 0 and return the proper element
                if (window.document.body.scrollTop || window.document.body.scrollLeft) {
                    return window.document.body
                }
                return window.document.documentElement
            }
            // Firefox want us to check `-x` and `-y` variations as well
            if (
                ['scroll', 'auto'].indexOf(this._getStyleComputedProperty(parent, 'overflow')) !==
                    -1 ||
                ['scroll', 'auto'].indexOf(this._getStyleComputedProperty(parent, 'overflow-x')) !==
                    -1 ||
                ['scroll', 'auto'].indexOf(this._getStyleComputedProperty(parent, 'overflow-y')) !==
                    -1
            ) {
                // If the detected scrollParent is body, we perform an additional check on its parentNode
                // in this way we'll get body if the browser is Chrome-ish, or documentElement otherwise
                // fixes issue #65
                return parent
            }
            return this._getScrollParent(element.parentNode)
        },
    },
}
