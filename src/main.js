import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import InfoPage from './components/InfoPage.vue'
import MainOps from './components/MainOpsPage.vue'
import SettingsCard from './components/SettingsCard.vue'
import MapCard from './components/MapCard.vue'
import LargeCard from './components/LargeCard.vue'


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
        path: 'map',
        component: MapCard
      },
      {
        path: 'settings',
        component: SettingsCard
      },
      {
        path: 'lgcard',
        component: LargeCard
      }
    ]
  }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router: router,
  render: h => h(App)
}).$mount('#app')
