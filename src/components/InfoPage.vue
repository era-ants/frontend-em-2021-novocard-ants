<template>
  <v-app>
    <v-app-bar app clipped-left color="transparent" fixed dark shrink-on-scroll flat src="../assets/tst.png">
        
        <img class="mr-3" :src="require('../assets/app_icon_info.png')" height="48"/>
        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя Новороссийска</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 14px;">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn outlined color="white" class="ma-1">
          <v-icon>mdi-eye-outline</v-icon> 
          <p class="ml-2 mt-4 d-none d-lg-block">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
        </v-btn>

    </v-app-bar>
          <v-img src="../assets/f2.jpg" style="width: 100vw; height: 100vh; filter: blur(2px);"></v-img>
          <v-container>


            <v-spacer></v-spacer>
              <v-row dense class="my-16">
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="5">
                  <v-scroll-y-reverse-transition appear hide-on-leave >
                  <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0" v-show="row1">
                    <!-- <v-card-title class="text-h5">
                      Settings
                    </v-card-title> -->
                    <v-spacer></v-spacer>
                    <h1>About Title 1</h1>
                    <h3>About Subtitle 1</h3>
                    <p class=".text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <v-spacer></v-spacer>
                  </v-card>
                    </v-scroll-y-reverse-transition>
                </v-col>
                <v-col cols="5">
                  <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0" v-show="row1">
                    <v-img src="../assets/f1.jpg"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
              </v-row>
            
            <v-spacer></v-spacer>
            <v-scroll-y-reverse-transition appear hide-on-leave>
              <v-row dense class="my-16">
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="5">
                  <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0" v-show="row2">
                    <v-img src="../assets/f2.jpg"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="5">
                  <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0" v-show="row2">
                    <!-- <v-card-title class="text-h5">
                      Settings
                    </v-card-title> -->
                    <h1 class="text-right">About Title 2</h1>
                    <h3 class="text-right">About Subtitle 2</h3>
                    <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </v-card>
                </v-col>
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
              </v-row>
            </v-scroll-y-reverse-transition>

            <v-spacer></v-spacer>
            <v-scroll-y-reverse-transition appear hide-on-leave>
            <v-row dense class="my-16">
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
              <v-col cols="5">
                <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0" v-show="row3">
                  <!-- <v-card-title class="text-h5">
                    Settings
                  </v-card-title> -->
                  <h1>About Title 1</h1>
                  <h3>About Subtitle 1</h3>
                  <p class=".text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0">
                  <v-img src="../assets/f1.jpg"></v-img>
                </v-card>
              </v-col>
            </v-row>
          
          <v-spacer></v-spacer>
            <v-row class="my-12">
              <v-col cols="6">
                <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0">
                  <v-img src="../assets/f2.jpg"></v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card v-scroll-reveal.reset="{ delay: 50 }" elevation="0">
                  <!-- <v-card-title class="text-h5">
                    Settings
                  </v-card-title> -->
                  <h1 class="text-right">About Title 2</h1>
                  <h3 class="text-right">About Subtitle 2</h3>
                  <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-card>
              </v-col>
            </v-row>
            </v-scroll-y-reverse-transition>

            <v-scroll-y-reverse-transition appear hide-on-leave>
              <v-row id="infobtn" dense>
              </v-row>
            </v-scroll-y-reverse-transition>
            <v-scroll-y-reverse-transition appear hide-on-leave>
              <v-row dense>
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="10">
                  <v-btn block rounded elevation="0" color="accent" href="#/main" class="my-12">НАЧАТЬ</v-btn>
                </v-col>
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
              </v-row>
            </v-scroll-y-reverse-transition>
            <v-scroll-y-reverse-transition appear hide-on-leave>
              <v-row dense>
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="10">
                  <v-btn block outlined rounded elevation="0" color="text_color" href="#/main" class="my-12">Уже пользуетесь картой?</v-btn>
                </v-col>
                <v-col cols="1">
                  <v-spacer></v-spacer>
                </v-col>
              </v-row>
            </v-scroll-y-reverse-transition>

          <v-row dense transition="scroll-y-reverse-transition">
            <v-col cols="12">
              <v-btn block rounded elevation="0" color="accent" href="#/main" class="my-12" >begin!</v-btn>
            </v-col>
          </v-row>
        </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'InfoPage',
  }
</script>
