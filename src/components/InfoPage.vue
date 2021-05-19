<template>
  <v-app>
    <v-app-bar app clipped-left color="transparent" dark prominent shrink-on-scroll flat>
        
        <img class="mr-3" :src="require('../assets/app_icon_info.png')" height="40"/>
        <v-toolbar-title class="font-weight-medium">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn icon>
          <v-icon>mdi-human</v-icon>
        </v-btn>

    </v-app-bar>
          <v-img src="../assets/f2.jpg"></v-img>
          <v-container>
            <v-spacer></v-spacer>
            <scroll-y-reverse-transition>
              <v-row dense>
                <v-col cols="6">
                  <v-card elevation="0">
                    <!-- <v-card-title class="text-h5">
                      Settings
                    </v-card-title> -->
                    <h1>About Title 1</h1>
                    <h3>About Subtitle 1</h3>
                    <p class=".text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card elevation="0">
                    <v-img src="../assets/f1.jpg"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </scroll-y-reverse-transition>
            
            <v-spacer></v-spacer>
            <scroll-y-reverse-transition>
              <v-row dense>
                <v-col cols="6">
                  <v-card elevation="0">
                    <v-img src="../assets/f2.jpg"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card elevation="0">
                    <!-- <v-card-title class="text-h5">
                      Settings
                    </v-card-title> -->
                    <h1 class="text-right">About Title 2</h1>
                    <h3 class="text-right">About Subtitle 2</h3>
                    <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </v-card>
                </v-col>
              </v-row>
            </scroll-y-reverse-transition>

            <v-spacer></v-spacer>
            <v-row dense transition="scroll-y-reverse-transition">
              <v-col cols="6">
                <v-card elevation="0">
                  <!-- <v-card-title class="text-h5">
                    Settings
                  </v-card-title> -->
                  <h1>About Title 3</h1>
                  <h3>About Subtitle 3</h3>
                  <p class=".text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card elevation="0">
                  <v-img src="../assets/f3.jpg"></v-img>
                </v-card>
              </v-col>
            </v-row>

            <v-spacer></v-spacer>
            <v-row dense transition="scroll-y-reverse-transition">
              <v-col cols="6">
                <v-card elevation="0">
                  <v-img src="../assets/f4.jpg"></v-img>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card elevation="0">
                  <!-- <v-card-title class="text-h5">
                    Settings
                  </v-card-title> -->
                  <h1 class="text-right">About Title 4</h1>
                  <h3 class="text-right">About Subtitle 4</h3>
                  <p class="text-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </v-card>
              </v-col>
            </v-row>

            <v-row dense transition="scroll-y-reverse-transition">
              <v-col cols="12">
                <v-btn block rounded elevation="0" color="accent">begin!</v-btn>
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
