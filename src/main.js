import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueQrcodeReader from "vue-qrcode-reader";

import InfoPage from './components/InfoPage.vue'
import MainOps from './components/MainOpsPage.vue'
import LoginPage from './components/LoginPage.vue'
import RegistrationPage from './components/RegistrationPage.vue'

import DevDebugCard from './components/DevDebugCard.vue' //debug-card
import SettingsCard from './components/SettingsCard.vue'

import TransportCard from './components/TransportCard.vue'
import MapCard from './components/MapCard.vue'
import LargeCard from './components/LargeCard.vue'
import QRScanCard from './components/QRScanCard.vue'
import AccessIDCard from './components/AccessIDCard.vue'
import PersonalArea from './components/PersonalArea.vue'
import PaymentsCard from './components/PaymentsCard.vue'

import ShopPage from './components/ShopPage.vue'
import HistoryPage from './components/HistoryPage.vue'

import VueScrollReveal from 'vue-scroll-reveal'
import VueMask from 'v-mask'

const routes = [
  // { path: '/settings', component: SettingsCard },
  { path: '/info', component: InfoPage },
  { path: '/register', component: RegistrationPage },
  { path: '/login', component: LoginPage },
  {
    path: '/main/',
    component: MainOps,
    children: [
      {
        path: 'login',
        component: LoginPage
      },
      {
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
        component: QRScanCard,
      },
      {
        path: 'access',
        component: AccessIDCard,
      },
      {
        path: 'personal',
        component: PersonalArea
      },
      {
        path: 'paycard',
        component: PaymentsCard
      },
      {
        path: 'shop',
        component: ShopPage,
      },
      {
        path: 'history',
        component: HistoryPage,
      },
      {
        path: 'transport',
        component: TransportCard,
      },
    ]
  },
  { path: '', redirect: '/info'},
  { path: '/', redirect: '/info'}
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use(VueQrcodeReader);

Vue.use(VueQrcodeReader);

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false,
  reset: false
});

Vue.use(VueMask);

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')



