<template>
  <v-app>
    <v-app-bar app clipped-left color="transparent" fixed dark shrink-on-scroll scroll-threshold="700" flat src="../assets/dark_semitransparent_bg.png">
        
        <img class="mr-lg-3 mr-md-2 mr-1 d-none d-sm-block" :src="require('../assets/app_icon_info.png')" height="48"/>
        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя Новороссийска</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 16px;">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn outlined color="white" class="ma-lg-1 d-none d-lg-block">
          <v-icon class="mt-n2">mdi-eye-outline</v-icon> 
          <p class="ml-2 mt-2">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
        </v-btn>

        <v-btn icon color="white" class="ma-lg-1 d-lg-none">
          <v-icon>mdi-eye-outline</v-icon> 
        </v-btn>

    </v-app-bar>
          <v-img src="../assets/f2.jpg" style="width: 100vw; height: 100vh; filter: blur(2px);"></v-img>

          <v-container>

            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-flex flex-column ma-lg-8 ma-md-4 ma-2" color="transparent">
                <h1 class="my-8">About Title 1</h1>
                <p class="text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f1.jpg"></v-img>
              </v-card>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f1.jpg"></v-img>
              </v-card>
            </div>
            
            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f2.jpg"></v-img>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-flex flex-column ma-lg-8 ma-md-4 ma-2" color="transparent">
                <h1 class="text-right my-8">About Title 2</h1>
                <p class="text-right text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f2.jpg"></v-img>
              </v-card>
            </div>

            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-flex flex-column ma-lg-8 ma-md-4 ma-2" color="transparent">
                <h1 class="my-8">About Title 3</h1>
                <p class="text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f3.jpg"></v-img>
              </v-card>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f3.jpg"></v-img>
              </v-card>
            </div>
            
            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f4.jpg"></v-img>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-flex flex-column ma-lg-8 ma-md-4 ma-2" color="transparent">
                <h1 class="text-right my-8">About Title 4</h1>
                <p class="text-right text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f4.jpg"></v-img>
              </v-card>
            </div>



            <!-- <div style="height: 80vh;"> -->
              <v-spacer></v-spacer>
              <div id="infobtn" style="width:100%; height: 2px; background: #ff0000;">
               </div>
              <v-scroll-y-reverse-transition appear hide-on-leave>
                <div class="d-flex">
                  <v-btn block rounded elevation="0" color="accent" href="#/register" class="d-lg-none my-md-6 my-3">НАЧАТЬ</v-btn>
                  <v-btn block rounded elevation="0" color="accent" href="#/register" class="d-none d-lg-block my-lg-16" x-large>НАЧАТЬ</v-btn>
                </div>
              </v-scroll-y-reverse-transition>
              <v-spacer></v-spacer>
              <v-scroll-y-reverse-transition appear hide-on-leave>
                <div class="d-flex">
                  <v-btn block outlined rounded elevation="0" color="text_color" href="#/login" class="d-lg-none my-md-6 my-3">Уже пользуетесь картой?</v-btn>
                  <v-btn block outlined rounded elevation="0" color="text_color" href="#/login" class="d-none d-lg-block my-lg-16" x-large>Уже пользуетесь картой?</v-btn>
                </div>
              </v-scroll-y-reverse-transition>
              <v-spacer></v-spacer>
            <!-- </div> -->

              <v-fade-transition>
                <v-btn id="infofab" color="accent" elevation="2" bottom right fixed rounded class="d-lg-none ma-md-6 ma-3" v-show="infofab1" key="infofabx" href="#/register">
                    НАЧАТЬ
                    <v-icon right dark > mdi-arrow-right </v-icon>
                </v-btn>
              </v-fade-transition>
              <v-fade-transition>
                <v-btn id="infofab" color="accent" elevation="2" x-large bottom right fixed rounded class="d-none d-lg-block ma-lg-12" v-show="infofab2" key="infofabx" href="#/register">
                    НАЧАТЬ
                    <v-icon right dark > mdi-arrow-right </v-icon>
                </v-btn>
              </v-fade-transition>
        </v-container>
      <v-footer padless>
        <!-- link to administration -->
        <v-col class="text-center" cols="12" >
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'InfoPage',
    data: () => ({
        infofab1: true,
        infofab2: true,
    }), 
    methods:{
      updateDataX(bool) {
        this.infofab1 = bool ;
        this.infofab2 = bool ;
      },
    },
    mounted(){
      var vm = this;
      window.addEventListener('scroll', function() {
        
        var rectx = this.document.getElementById("infobtn").getBoundingClientRect();
        var htmlx = this.document.documentElement;
        if (
          rectx.top >= 0 &&
          rectx.left >= 0 &&
          rectx.bottom <= (window.innerHeight || htmlx.clientHeight) &&
          rectx.right <= (window.innerWidth || htmlx.clientWidth)
        ){
          vm.updateDataX(false);
        }else{
          vm.updateDataX(true);
        }
        
      });
    }

  }
</script>
