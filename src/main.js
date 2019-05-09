import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCircle, faMobileAlt, faEnvelope, faEllipsisH, faTrashAlt,
  faStar, faFileAlt, faCalendarAlt, faEdit
} from '@fortawesome/free-solid-svg-icons'
import {
  faCalendarCheck, faCommentDots
} from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap' // Import js file
import 'bootstrap/dist/css/bootstrap.min.css' // Import css file
import 'vue-datetime/dist/vue-datetime.css'

library.add(
  faCalendarCheck, faCommentDots, faCircle, faMobileAlt, faEnvelope, faGithub, faEllipsisH,
  faTrashAlt, faStar, faFileAlt, faCalendarAlt, faEdit
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
