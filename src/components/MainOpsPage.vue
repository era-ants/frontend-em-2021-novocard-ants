<template>
  <v-app>
      <v-app-bar app clipped-left color="primary" dark elevate-on-scroll>
        <img class="mr-3" :src="require('../assets/app_icon.png')" height="48"/>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя Новороссийска</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 14px;">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- <v-btn outlined color="white" class="ma-2">
          <v-icon>mdi-eye-outline</v-icon> 
          <p class="ml-2 mt-4 d-none d-lg-block">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
        </v-btn> -->

        <!-- <v-btn icon href="#/main/map">
          <v-icon>mdi-map-outline</v-icon>
        </v-btn> -->

        <v-btn icon href="#/info">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>

        <!-- <v-btn icon href="#/main/settings">
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn> -->

        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-badge bordered bottom color="accent2" dot offset-x="16" offset-y="16" >
              <v-btn icon v-bind="attrs" v-on="on">
                <v-avatar  color="accent" size="32">VJ</v-avatar>
              </v-btn>
            </v-badge>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in accmenu" :key="index" :href="item.link" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-list-item @click="LogOut()" link>
              <v-list-item-title>Logout</v-list-item-title>
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
        
            <v-container class="d-flex flex-xl-row flex-lg-column pa-8">
                <router-view style="width: 100%"></router-view>
            </v-container>

      </v-main>
      <v-bottom-navigation v-model="bn_value" :background-color="colorbn" dark shift fixed hide-on-scroll>
        <v-btn v-for="item in tab_items" :to="item.link" :key="item.title">
          <span>{{item.title}}</span>
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
      </v-bottom-navigation>
  </v-app>
</template>

<script>

export default {
  name: 'MainOps',
  data: () => ({
    bn_value: 1,
    mini: false,
    navbar: true,
    group: null,
    accmenu:[
      { title: 'Login', link: '#/main/login' },
      { title: 'Change Photo', link: '#/main/login' },
      { title: 'Edit profile', link: '#/main/login' },
    ],
    tab: null,
    tab_items: [
      { title: 'Map', link: '/main/map', icon: 'mdi-map-outline' },
      { title: 'Settings', link: '/main/settings', icon: 'mdi-cog-outline' },
      { title: 'LargeCard', link: '/main/lgcard', icon: 'mdi-apps-box' },
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
    Test1: function(){
      alert("hello");
      this.mini = true;
    },    
  },
  computed: {
    colorbn () {
      switch (this.bn_value) {
        case 0: return 'green'
        case 1: return 'grey'
        case 2: return 'red'
        default: return 'gray'
      }
    },
  },
}


</script>
