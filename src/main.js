import Vue from 'vue'
import App from './App.vue'
import router from './router'
import planui from '../web/index'
import '../web/style/style.less'
import './assets/demo.less'

Vue.config.productionTip = false
Vue.use(planui)
new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
