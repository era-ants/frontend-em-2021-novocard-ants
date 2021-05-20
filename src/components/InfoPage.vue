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

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
                <h1 class="my-8">About Title 1</h1>
                <p class="text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-8" src="../assets/f1.jpg"></v-img>
              </v-card>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-8" src="../assets/f1.jpg"></v-img>
              </v-card>
            </div>
            
            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-8" src="../assets/f2.jpg"></v-img>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
                <h1 class="text-right my-8">About Title 2</h1>
                <p class="text-right text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-8" src="../assets/f2.jpg"></v-img>
              </v-card>
            </div>

            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
                <h1 class="my-8">About Title 3</h1>
                <p class="text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-8" src="../assets/f3.jpg"></v-img>
              </v-card>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-8" src="../assets/f3.jpg"></v-img>
              </v-card>
            </div>
            
            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
                <v-img class="ma-8" src="../assets/f4.jpg"></v-img>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
                <h1 class="text-right my-8">About Title 4</h1>
                <p class="text-right text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-8" src="../assets/f4.jpg"></v-img>
              </v-card>
            </div>



            <div id="infobtn" style="width:100%; height: 1px;"> </div>
            <v-scroll-y-reverse-transition appear hide-on-leave>
              <div class="d-flex">
                <v-btn block rounded elevation="0" color="accent" href="#/main" class="my-12" x-large>НАЧАТЬ</v-btn>
              </div>
            </v-scroll-y-reverse-transition>
            <v-scroll-y-reverse-transition appear hide-on-leave>
              <div class="d-flex">
                <v-btn block outlined rounded elevation="0" color="text_color" href="#/main" class="my-12" x-large>Уже пользуетесь картой?</v-btn>
              </div>
            </v-scroll-y-reverse-transition>

            <v-fade-transition>
              <v-btn id="infofab" color="accent" elevation="2" x-large bottom right fixed rounded class="ma-12" v-show="infofab1" key="infofabx" href="#/main">
                  НАЧАТЬ
                  <v-icon right dark > mdi-arrow-right </v-icon>
              </v-btn>
            </v-fade-transition>
        </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'InfoPage',
    data: () => ({
        infofab1: true,
    }), 
    methods:{
      updateDataX(bool) {
        this.infofab1 = bool ;
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
