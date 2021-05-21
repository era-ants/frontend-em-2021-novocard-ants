import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueQrcodeReader from "vue-qrcode-reader";

import InfoPage from './components/InfoPage.vue'
import MainOps from './components/MainOpsPage.vue'
import DevDebugCard from './components/DevDebugCard.vue' //debug-card
import SettingsCard from './components/SettingsCard.vue'
import MapCard from './components/MapCard.vue'
import LargeCard from './components/LargeCard.vue'
import LoginCard from './components/LoginCard.vue'
import RegistrationCard from './components/RegistrationCard.vue'
import QRScanCard from './components/QRScanCard.vue'

import VueScrollReveal from 'vue-scroll-reveal'
import YmapPlugin from 'vue-yandex-maps'

const routes = [
  // { path: '/settings', component: SettingsCard },
  { path: '/info', component: InfoPage },
  {
    path: '/main/',
    component: MainOps,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'login',
        component: LoginCard
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'register',
        component: RegistrationCard
      },
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: 'map',
        component: MapCard,
      },
      {
        path: 'settings',
        component: SettingsCard
      },
      {
        path: 'lgcard',
        component: LargeCard
      },
      {
        path: 'debug',
        component: DevDebugCard
      },
      {
        path: 'scan',
        component: QRScanCard
      },
    ]
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

const settings = {
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(YmapPlugin, settings)

Vue.use(VueQrcodeReader);

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false,
  reset: false
});

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
