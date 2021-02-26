import Vue from 'vue'
import button from './components/button/button.vue'
import radioGroup from './components/radio/radio-group.vue'
import radioButton from './components/radio/radio-button.vue'
import select from './components/select/select.vue'
import selectOption from './components/select/select-option.vue'
import input from './components/input/input.vue'

function install() {
    Vue.component(button.name, button)
    Vue.component(radioGroup.name, radioGroup)
    Vue.component(radioButton.name, radioButton)
    Vue.component(select.name, select)
    Vue.component(selectOption.name, selectOption)
    Vue.component(input.name, input)
}

export default install
