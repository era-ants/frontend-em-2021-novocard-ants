<template>
  <!-- ROUTER! -->
  <v-app>
      <v-app-bar app clipped-left color="primary" dark>
        <v-app-bar-nav-icon @click.stop="navbar = !navbar"></v-app-bar-nav-icon>
        <img class="mr-3" :src="require('./assets/app_icon.png')" height="40"/>
        <v-toolbar-title class="font-weight-medium">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn icon>
          <v-icon>mdi-human</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-cog-outline</v-icon>
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

      <v-navigation-drawer app v-model="navbar" :mini-variant.sync="mini" clipped hide-overlay>
        <!-- <v-img src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
          <v-list >
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-icon x-large dark>mdi-account-circle</v-icon>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item dark link>
              <v-list-item-content >
                <v-list-item-title class="title">
                  Account Name
                </v-list-item-title>
                <v-list-item-subtitle >example.mail@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-img>
        <v-divider></v-divider> -->

        <v-list nav>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Item 1</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Item 2</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Item 3</v-list-item-title>
          </v-list-item>
        </v-list>
        
        <!-- <v-list nav>
          <v-list-item >
            <v-divider ></v-divider>
          </v-list-item>
          <v-list-item link @click="$vuetify.theme.dark = !$vuetify.theme.dark" >
              <v-icon class="ma-auto">mdi-brightness-4</v-icon>
            <v-list-item-title class="ma-auto">Dark Mode</v-list-item-title>
            <v-switch v-model="$vuetify.theme.dark" title="DarkMode" color="accent" inset></v-switch>
            
          </v-list-item>
        </v-list> -->

      </v-navigation-drawer>

      <v-divider></v-divider>
      <v-main>
            <v-container>
              <v-row dense>
                <v-col cols="12">
                  <v-card outlined >
                    <v-card-title class="text-h5">
                      Map
                    </v-card-title>
                    <!-- <GoogleMap/> -->
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-card outlined >
                    <v-card-title class="text-h5">
                      Settings
                    </v-card-title>
                    <v-list>
                      <v-list-item-group v-model="selectedItem" color="primary" >
                        <v-list-item v-model="notification_switch">
                          <v-list-item-icon>
                            <v-icon>mdi-bell-ring</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>Notifications</v-list-item-title>
                          </v-list-item-content>
                          <v-switch v-model="notification_switch" title="Notifications" color="accent" inset></v-switch>
                        </v-list-item>
                        <v-list-item
                          v-for="(item, i) in items2"
                          :key="i"
                        >
                          <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>
                        <v-list-item v-model="$vuetify.theme.dark">
                          <v-list-item-icon>
                            <v-icon>mdi-brightness-4</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>Dark Mode</v-list-item-title>
                          </v-list-item-content>
                          <v-switch v-model="$vuetify.theme.dark" title="DarkMode" color="accent" inset></v-switch>
                        </v-list-item>
                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </v-col>

                <v-col cols="12">
                  <v-card outlined >
                    <v-card-title class="text-h5">
                      Unlimited music now
                    </v-card-title>

                    <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
                    <v-parallax height="400" src="./assets/post_94_hso2jvpcgd.jpg" ></v-parallax>
                    <!-- <v-checkbox class="mx-auto" v-model="mini"></v-checkbox> -->
                    <!-- <v-checkbox class="mx-auto" v-model="navbar"></v-checkbox> -->
                    <v-card-actions>
                      <v-btn text>
                        Listen Now
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>

                <v-col v-for="(item, i) in items" :key="i" cols="12" >
                  <v-card outlined >
                    <div class="d-flex flex-no-wrap justify-space-between">
                      <div>
                        <v-card-title class="text-h5" v-text="item.title" ></v-card-title>
                        <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                        <v-card-actions>
                          <v-btn v-if="item.artist === 'Ellie Goulding'" class="ml-2 mt-3" fab icon height="40px" right width="40px" >
                            <v-icon>mdi-play</v-icon>
                          </v-btn>
                          <v-btn v-else class="ml-2 mt-5" outlined rounded small >
                            START RADIO
                          </v-btn>
                        </v-card-actions>
                      </div>
                      <v-avatar class="ma-3" size="125" tile >
                        <v-img :src="item.src"></v-img>
                      </v-avatar>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
      </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   GoogleMap,
  // },

  data: () => ({
      mini: false,
      navbar: true,
      group: null,
      notification_switch: true,
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      items2: [
        {
          icon: 'mdi-cog',
          text: 'Item 1',
        },
        {
          icon: 'mdi-file-cog-outline',
          text: 'Item 2',
        },
      ],
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
};
</script>
