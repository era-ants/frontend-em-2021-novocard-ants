<template>
  <v-app>
      <v-app-bar color="primary" dark absolute flat app>
        <img class="mr-lg-3 mr-md-2 mr-1 d-none d-sm-block" :src="require('../assets/app_icon.png')" height="48"/>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Вход в систему</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 16px;">Вход в систему</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn icon href="#/info">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>

      </v-app-bar>

      <v-main>
        <v-container class="d-flex flex-xl-row flex-lg-column pa-2">
          <div style="width: 100%">
            <v-card outlined>
              <v-text-field id="card_number_field" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mt-16" color="accent" label="Card Number" placeholder="0000-0000-0000-0000" outlined single-line ></v-text-field>
              <v-card-actions>
                <v-btn color="accent" class="ml-lg-16 ml-md-8 ml-sm-2 ml-1 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" @click="LogInByCardNumber()" >
                  Вход
                </v-btn>
                <v-btn outlined color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" href="#/main/personal" >
                  Аккаунт
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
        snackbar: false,
        snack_text: '',
        timeout: 2000,
      }
    },
    methods:{
      LogInByCardNumber(){
        let card_number = document.getElementById("card_number_field").value;
        console.log(card_number);
        

        if (card_number != ''){
          fetch('http://178.154.254.162:8002/Clients/'+ card_number, {
              method: 'GET',
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
          }).then(resp => {
              console.log("Status: " + resp.status);
              if (resp.status === 200) {
                  return resp.json()
              } else {
                  this.snack_text = "Не залогинен";
                  this.snackbar = true;
                  return Promise.reject("server")
              }
          })
          .then(dataJson => {
              this.snack_text = "Залогинен!: " + dataJson.firstName + " " + dataJson.lastName;
              this.snackbar = true;
          })
        }else{
          // alert("пуста!!!ууу!");
        }

      },
    }

  }


</script>
