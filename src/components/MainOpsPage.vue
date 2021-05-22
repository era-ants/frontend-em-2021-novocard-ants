<template>
  <v-app>
      <v-app-bar app clipped-left color="primary" dark elevate-on-scroll>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <img class="mr-lg-3 mr-md-2 mr-1 d-none d-sm-block" :src="require('../assets/app_icon.png')" height="48"/>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя и гостя</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 16px;">Карта жителя и гостя</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- <v-btn outlined color="white" class="ma-2">
          <v-icon>mdi-eye-outline</v-icon> 
          <p class="ml-2 mt-4 d-none d-lg-block">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
        </v-btn> -->

        <v-tooltip bottom>
          <template v-slot:activator="{ on2, attrs2 }">
            <v-btn icon v-bind="attrs2" v-on="on2" href="/info">
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-btn>
          </template>
          <span>О карте</span>
        </v-tooltip>
        <!-- <v-btn icon href="#/main/settings">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn> -->

        <v-menu style="z-index: 1000" offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-badge bordered color="red" dot offset-x="16" offset-y="16" :content="badge_avatar" :value="badge_avatar" >
              <v-btn icon v-bind="attrs" v-on="on">
                <v-avatar color="accent2" size="32">A</v-avatar>
              </v-btn>
            </v-badge>
          </template>
          <v-list>
            <v-list-item href="/main/personal" link>
              <v-list-item-title>Аккаунт</v-list-item-title>
            </v-list-item>
            <v-list-item v-for="(item, index) in accmenu" :key="index" :href="item.link" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="LogOut()" href="/login" link>
              <v-list-item-title>Выйти</v-list-item-title>
            </v-list-item>
            <v-list-item href="/main/settings" link>
              <v-list-item-title>Настройки</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <!-- <v-toolbar color="primary" dark prominent>
        <v-spacer></v-spacer>
        <v-tabs v-model="tab" align-with-title >
          <v-tabs-slider color="accent"></v-tabs-slider>

          <v-tab v-for="item in tab_items" :to="item.link" :key="item.title" >
            {{ item.title }}
          </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
      </v-toolbar> -->

      <v-main>
        <v-navigation-drawer app clipped class="d-none d-lg-block" >
          <v-list nav dense v-for="item in tab_items" :key="item.title">
            <v-list-item link :to="item.link">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.title}}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-container class="d-flex flex-xl-row flex-lg-column pa-2">
            <router-view style="width: 100%"></router-view>
        </v-container>
      </v-main>

      <v-fade-transition>
        <v-bottom-navigation app class="d-lg-none" v-model="bn_value" v-show="bn_show" :background-color="colorbn" dark shift fixed hide-on-scroll>
          <v-btn v-for="item in bot_items" :to="item.link" :key="item.title">
            <span>{{item.title}}</span>
            <v-icon>{{item.icon}}</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-fade-transition>

      <v-fade-transition>
        <v-btn id="appsfab" color="accent" elevation="2" bottom right fixed fab class="d-lg-none ma-md-8 ma-sm-4 ma-2" v-show="!bn_show" key="appsfab" href="/main/map">
          <v-icon dark> mdi-apps </v-icon>
        </v-btn>
      </v-fade-transition>
  </v-app>
</template>

<script>

export default {
  name: 'MainOps',
  data: () => ({
    bn_value: 0,
    bn_show: true,
    badge_avatar: 0,
    mini: false,
    navbar: true,
    group: null,
    on2: null,
    attr2: null,
    accmenu:[
      { title: 'Сменить Фото', link: '/login' },
      // { title: 'Ред. профиль', link: '/login' },
    ],
    tab: null,
    tab_items: [
      { title: 'Места', link: '/main/map', icon: 'mdi-map-marker-outline' },
      // { title: 'Галерея', link: '/main/lgcard', icon: 'mdi-apps-box' },
      // { title: 'Сканер', link: '/main/scan', icon: 'mdi-qrcode-scan' },
      { title: 'Пропуск', link: '/main/access', icon: 'mdi-id-card' },
      // { title: 'Настройки', link: '/main/settings', icon: 'mdi-cog-outline' },
      // { title: 'Debug', link: '/main/debug', icon: 'mdi-android-debug-bridge' },
    ],
    bot_items: [
      { title: 'Места', link: '/main/map', icon: 'mdi-map-marker-outline' },
      // { title: 'Сканер', link: '/main/scan', icon: 'mdi-qrcode-scan' },
      // { title: 'Галерея', link: '/main/lgcard', icon: 'mdi-apps-box' },
      { title: 'Пропуск', link: '/main/access', icon: 'mdi-id-card' },
      // { title: 'Настройки', link: '/main/settings', icon: 'mdi-cog-outline' },
    ],
  }),
  watch: {
    group () {
      this.navbar = false
    },
  },
  
  methods: {
    LogOut(){
      sessionStorage.setItem("logged_in", "");
    },   
  },
  mounted(){
    //exception pages
    if (location.pathname == "/main/settings"){
      this.bn_show = false;
    }
    if (location.pathname == "/main/personal"){
      this.bn_show = false;
    }
    if (location.pathname == "/main/paycard"){
      this.bn_show = false;
    }

  },
  computed: {
    colorbn () {
      switch (this.bn_value) {
        case 0: return 'green'
        case 1: return 'blue'
        case 2: return 'red'
        case 3: return 'teal'
        default: return 'black'
      }
    },
  },
}


</script>
