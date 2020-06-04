import Vue from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneAlt,faAngleDown, faCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'

 
library.add(faFacebookF, faInstagram, faTwitter, faEnvelope, faPhoneAlt, faAngleDown, faCircle, faUser, faHeart, faShoppingBag)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
