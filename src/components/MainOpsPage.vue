<template>
  <v-app>
      <v-app-bar app clipped-left color="primary" dark prominent elevate-on-scroll shrink-on-scroll>
        <img class="mr-3" :src="require('../assets/app_icon.png')" height="40"/>
        <v-toolbar-title class="font-weight-medium">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn icon>
          <v-icon>mdi-human</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>

        <v-btn icon href="#/main/settings">
          <v-icon>mdi-cog-outline</v-icon>
          <!-- <router-link to="/settings"></router-link> -->
        </v-btn>

        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-badge bordered bottom color="accent2" dot offset-x="16" offset-y="16" >
              <v-btn icon v-bind="attrs" v-on="on">
                <v-avatar  color="accent" size="32">VJ</v-avatar>
              </v-btn>
            </v-badge>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in accmenu" :key="index" link>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        
      </v-app-bar>

      <v-main>
        
            <v-container>
              <v-row dense>
                <router-view></router-view>
                <!-- <SettingsCard/> -->
              </v-row>
            </v-container>

      </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'MainOps',
  data: () => ({
    mini: false,
    navbar: true,
    group: null,
    accmenu:[
      { title: 'Change Photo' },
      { title: 'Edit profile' },
      { title: 'Logout' },
    ]
  }),
  watch: {
    group () {
      this.navbar = false
    },
  },
  
  methods: {
    Test1: function(){
      alert("hello");
      this.mini = true;
    },    
  }
}


</script>
