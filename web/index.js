import Vue from 'vue'
import button from './components/button/button.vue'
import radioGroup from './components/radio/radio-group.vue'
import radioButton from './components/radio/radio-button.vue'

function install() {
    Vue.component(button.name, button)
    Vue.component(radioGroup.name, radioGroup)
    Vue.component(radioButton.name, radioButton)
}

export default install
