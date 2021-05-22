<template>
  <v-app>
    <v-app-bar app clipped-left color="transparent" dark flat src="../assets/dark_semitransparent_bg.png">
        
        <img class="mr-lg-3 mr-md-2 mr-1 d-none d-sm-block" :src="require('../assets/app_icon_info.png')" height="48"/>
        <v-spacer></v-spacer>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя и гостя</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 16px;">Карта жителя и гостя</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn :outlined="$vuetify.breakpoint.lg" :icon="!($vuetify.breakpoint.lg)" color="white" @click="accessibility_eyes()" class="ma-lg-1">
          <v-icon >mdi-eye-outline</v-icon> 
          <p class="d-none d-lg-block ml-2 mt-4">ВЕРСИЯ ДЛЯ СЛАБОВИДЯЩИХ</p>
        </v-btn>

    </v-app-bar>
          <v-img src="../assets/preview.jpg" min-width="100vw" max-height="100vh"></v-img>

          <v-container>

            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-flex flex-column ma-lg-8 ma-md-4 ma-2" color="transparent">
                <h1 class="my-8">Оплата проезда</h1>
                <p class="text-body-1">Используя данные карты «НовоКарта», пассажиры могут быстро оплачивать проезд на общественном транспорте, получая скидку согласно выбранному тарифному плану.</p>
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
                <h1 class="text-right my-8">Туризм</h1>
                <p class="text-right text-body-1">Сервис «Места» НовоКарты предоставляет возможность подробнее узнать о культурно-досуговых возможностях города, а также выбрать один из подготовленных туристических маршрутов для приятной прогулки. </p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f2.jpg"></v-img>
              </v-card>
            </div>

            <v-spacer></v-spacer>

            <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card elevation="0" class="d-flex flex-column ma-lg-8 ma-md-4 ma-2" color="transparent">
                <h1 class="my-8">Бонусная система</h1>
                <p class="text-body-1">Оплачивая расходы картой «НовоКарта» и выполняя различные задания, Вы накапливаете бонусные баллы, которые в дальнейшем сможете потратить на скидки в магазинах, музеях и театрах, оплату проезда в общественном транспорте. </p>
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
                <h1 class="text-right my-8">Пополнение карты</h1>
                <p class="text-right text-body-1">Используйте наш сервис для быстрого и удобного пополнения карты «НовоКарта» через любой удобный для Вас банк</p>
              </v-card>
              <v-spacer></v-spacer>
              <v-card elevation="0" class="d-lg-none" color="transparent">
                <v-img class="ma-lg-8 ma-md-4 ma-2" src="../assets/f4.jpg"></v-img>
              </v-card>
            </div>



            <!-- <div style="height: 80vh;"> -->
              <v-spacer></v-spacer>
              <div id="infobtn" style="width:100%; height: 2px;">
               </div>
              <v-scroll-y-reverse-transition appear hide-on-leave>
                <div class="d-flex">
                  <v-btn block rounded elevation="0" v-show="!logged" color="accent" href="/register" class="my-lg-16 my-md-6 my-3" :x-large="$vuetify.breakpoint.lg" :large="$vuetify.breakpoint.md" :small="$vuetify.breakpoint.xs">НАЧАТЬ</v-btn>
                </div>
              </v-scroll-y-reverse-transition>

              <v-spacer></v-spacer>

              <v-scroll-y-reverse-transition appear hide-on-leave>
                <div class="d-flex">
                  <v-btn block outlined rounded elevation="0" v-show="!logged" color="text_color" href="/login" class="my-lg-16 my-md-6 my-3" :x-large="$vuetify.breakpoint.lg" :large="$vuetify.breakpoint.md" :small="$vuetify.breakpoint.xs">Уже пользуетесь картой?</v-btn>
                </div>
              </v-scroll-y-reverse-transition>
              <v-spacer></v-spacer>
            <!-- </div> -->

              <v-fade-transition>
                <v-btn color="accent" elevation="3" :x-large="($vuetify.breakpoint.lg || $vuetify.breakpoint.xl)" :large="$vuetify.breakpoint.md" :small="$vuetify.breakpoint.xs" bottom right fixed rounded class="ma-lg-12 ma-md-6 ma-3" v-show="infofab" href="/register">
                    НАЧАТЬ
                    <v-icon right dark > mdi-arrow-right </v-icon>
                </v-btn>
              </v-fade-transition>

              <v-fade-transition>
                <v-btn color="accent" elevation="3" style="z-index: 50;" :x-large="($vuetify.breakpoint.lg || $vuetify.breakpoint.xl)" :large="$vuetify.breakpoint.md" :small="$vuetify.breakpoint.xs" bottom right fixed rounded class="ma-lg-12 ma-md-6 ma-3" v-show="logged" href="/main/map">
                    СЕРВИСЫ
                    <v-icon right dark > mdi-arrow-right </v-icon>
                </v-btn>
              </v-fade-transition>
        </v-container>
      <v-footer padless>
        <!-- link to administration -->
        <v-col class="text-center" cols="12" >
          <a href="https://admnvrsk.ru/" style="font-weight: 500;" class="text-decoration-underline" >Официальный сайт администрации и городской Думы Муниципального Образования "Город-Герой Новороссийск" </a>
        </v-col>
        <v-col class="text-center" cols="12" >
          <strong>Карта жителя Новороссийска</strong> — {{ new Date().getFullYear() }}
        </v-col>
      </v-footer>
      <v-snackbar v-model="snackbar_info" :timeout="timeout" >
        {{snack_text}}
        <!-- <template v-slot:action="{ attrs }">
          <v-btn color="accent2" text v-bind="attrs" @click="accessibility_eyes()">
            Отмена
          </v-btn>
        </template> -->
      </v-snackbar>
  </v-app>
</template>

<script>
  export default {
    name: 'InfoPage',
    data: () => ({
        infofab: false,
        logged: false,
        snackbar_info: false,
        snack_text: '',
        timeout: 2000,
    }), 
    methods:{
      updateDataX(bool) {
        this.infofab = bool ;
        if(this.logged){
          this.infofab = false;
        }
      },
      accessibility_eyes() {
        sessionStorage.setItem('acc_eye', (sessionStorage.acc_eye == "false"));
        if(sessionStorage.acc_eye == "true"){
          this.snack_text = "Включен режим для слабовидящих";
        }
        else{
          this.snack_text = "Выключен режим для слабовидящих";
        }
        // console.log("acc_eye: "+sessionStorage.acc_eye);
        this.snackbar_info = true;
      },
    },
    updated(){
      this.logged = ((typeof sessionStorage.logged_in != 'undefined')&&(sessionStorage.logged_in != ""));
      // if ((typeof sessionStorage.logged_in != 'undefined')&&(sessionStorage.logged_in != "")) {
        // location.href = "/main/map";
      // }
    },
    mounted(){
      var vm = this;
      if(!this.logged){
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

  }
</script>
