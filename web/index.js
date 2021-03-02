import Vue from 'vue'
import button from './components/button/button.vue'
import input from './components/input/input.vue'
import select from './components/select/select.vue'
import progress from './components/progress/progress.vue'
import selectOption from './components/select/select-option.vue'
import radioGroup from './components/radio/radio-group.vue'
import radioButton from './components/radio/radio-button.vue'

function install() {
    Vue.component(button.name, button)
    Vue.component(input.name, input)
    Vue.component(progress.name, progress)
    Vue.component(radioGroup.name, radioGroup)
    Vue.component(radioButton.name, radioButton)
    Vue.component(select.name, select)
    Vue.component(selectOption.name, selectOption)
}

export default install
