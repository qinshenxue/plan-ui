import Vue from 'vue'
import Button from './components/button/button.vue'
import Dialog from './components/dialog/dialog.vue'
import Input from './components/input/input.vue'
import Message from './components/message/message'
import Select from './components/select/select.vue'
import Progress from './components/progress/progress.vue'
import SelectOption from './components/select/select-option.vue'
import RadioGroup from './components/radio/radio-group.vue'
import RadioButton from './components/radio/radio-button.vue'

const components = [Button, Input, Dialog, Select, Progress, SelectOption, RadioGroup, RadioButton]

function install() {
    components.forEach((component) => {
        Vue.component(component.name, component)
    })

    Vue.prototype.$message = Message
}

export default {
    install,
    Message,
}
