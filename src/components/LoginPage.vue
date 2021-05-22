<template>
  <v-app>
      <v-app-bar color="primary" dark absolute app>
        <img class="mr-lg-3 mr-md-2 mr-1 d-none d-sm-block" :src="require('../assets/app_icon.png')" height="48"/>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя и гостя</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 16px;">Карта жителя и гостя</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn icon href="/info">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>

      </v-app-bar>

      <v-main>
        <v-container class="d-flex flex-xl-row flex-lg-column pa-2">
          <div style="width: 100%">
            <v-card outlined>
              <v-card-title class="justify-center">
                Вход в систему
              </v-card-title>


              <!-- <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                <span v-show="card_type" >Карта жителя?</span>
                <span v-show="!card_type" >Карта гостя?</span>
                <v-spacer></v-spacer>
                <v-switch v-model="card_type"></v-switch>
              </div> -->

              <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2 mt-lg-16 mt-md-8 mt-4">

                <!-- <v-list min-width="100%">
                  <v-list-item link @click="card_type = !card_type">
                    <v-list-item-content>
                      <v-list-item-title v-show="card_type">Карта жителя?</v-list-item-title>
                      <v-list-item-title v-show="!card_type">Карта гостя?</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-switch v-model="card_type" title="UserType" color="accent" inset readonly></v-switch>
                    </v-list-item-action>
                  </v-list-item>
                </v-list> -->
                <v-btn :outlined="card_type" tile  elevation="0" :disabled="card_type" width="50%" color="accent" @click="card_type = !card_type">
                  <span>Карта жителя</span>
                </v-btn>
                <v-btn :outlined="!card_type" tile  elevation="0" :disabled="!card_type" width="50%" color="accent" @click="card_type = !card_type" >
                  <span>Карта гостя</span>
                </v-btn>

              </div>


              <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2" v-show="!card_type" >
                <v-text-field v-model="phonenum" type="number" v-show="!card_type" class="mt-lg-16 mt-md-8 mt-4" color="accent" label="Номер телефона" placeholder="+7 800 555 35 35"  maxlength="11" :rules="chars11"></v-text-field>
              </div>
              <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2" v-show="card_type">
                <v-text-field v-model="email" type="email" v-show="card_type" class="mt-lg-16 mt-md-8 mt-4" color="accent" label="Почта" placeholder="example@mail.ru" :rules="not_empty"></v-text-field>
              </div>
              <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                <v-text-field v-model="passwrd" type="password" color="accent" label="Пароль" placeholder="" minlength="7" :rules="chars11"></v-text-field>
              </div>
              
              
              <v-card-actions>
                <!-- <v-btn outlined color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" href="/main/personal" >
                  Аккаунт
                </v-btn> -->
                <v-btn text color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" href="/register" >
                  Создать аккаунт
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="accent" class="mr-lg-16 mr-md-8 mr-sm-2 mr-1 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" @click="LogIn()" >
                  Вход
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout" >
          {{snack_text}}
        </v-snackbar>
      </v-main>
  </v-app>


</template>

<script>

  export default {
    name: 'LoginPage',
    data: function () {
      return {
        card_type: false, //
        email: null, 
        phonenum: null, 
        passwrd: null, 
        snackbar: false,
        snack_text: '',
        timeout: 2000,
        not_empty: [v => v.length != 0 || 'Поле не пустое'],
        chars11: [v => !!v || 'Поле не пустое', v => v.length == 11 || 'недостаточно'],
      }
    },
    methods:{
      LogIn(){
        let allow_login = true;
        var log_text;

        if(this.card_type){
          log_text = "Citizen/?email=" + this.email + "&password=" + this.passwrd;
        }
        else{
          log_text = "Guest/?phoneNumber=" + String(this.phonenum) + "&password=" + this.passwrd;

        }

        if (allow_login){
          fetch('http://178.154.254.162:8002/Authentication/' + log_text, {
              method: 'POST',
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
          }).then(resp => {
              console.log("Status: " + resp.status);
              if (resp.status === 200) {
                  if(this.card_type){
                    sessionStorage.setItem('logged_in', this.email);
                    this.snack_text = "Вход произведен " + this.email;
                  }
                  else{
                    sessionStorage.setItem('logged_in', String(this.phonenum));
                    this.snack_text = "Вход произведен " + String(this.phonenum);
                  }
                  location.href = "/main/personal";
                  //chatin' with server here

                  this.snackbar = true;
                  return resp.json()
              } else {
                  this.snack_text = "Вход не произведен";
                  this.snackbar = true;
                  return Promise.reject("server")
              }
          })
        }else{
          // alert("пуста!!!ууу!");
        }

      },
    }

  }


</script>
