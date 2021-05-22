<template>
  <v-app>
      <v-app-bar color="primary" dark absolute app>
        <img class="mr-lg-3 mr-md-2 mr-1 d-none d-sm-block" :src="require('../assets/app_icon.png')" height="48"/>
        <v-toolbar-title class="font-weight-medium d-none d-lg-block">Карта жителя Новороссийска</v-toolbar-title>
        <v-toolbar-title class="font-weight-medium d-lg-none" style="font-size: 16px;">Карта жителя Новороссийска</v-toolbar-title>
        <v-spacer></v-spacer>


        <v-btn icon href="/info">
          <v-icon>mdi-help-circle-outline</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title class="mx-16 d-none d-lg-block" slider-color="yellow" fixed-tabs v-model="reg_tab">
            <v-tab key="reg_guest"><v-icon class="mr-4">mdi-account-circle-outline</v-icon>  Карта гостя </v-tab>
            <v-tab key="reg_citizen"><v-icon class="mr-4">mdi-account-circle</v-icon> Карта жителя </v-tab>
          </v-tabs>
          <v-tabs class="d-lg-none" centered slider-color="yellow" fixed-tabs v-model="reg_tab">
            <v-tab key="reg_guest"><v-icon class="mr-2">mdi-account-circle-outline</v-icon>   Карта гостя </v-tab>
            <v-tab key="reg_citizen"><v-icon class="mr-2">mdi-account-circle</v-icon> Карта жителя </v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      
      <v-main>
        <v-container class="d-flex flex-xl-row flex-lg-column pa-2">
          <div class="my-auto" style="width: 100%" >
              <v-tabs-items v-model="reg_tab">
                <v-tab-item key="reg_guest" >
                  <v-card outlined class="mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                    <!-- <v-img :src="require('../assets/card-bg.png')" contain> -->
                      <v-card-title class="text-h5 justify-center">
                        Зарегистрировать карту гостя
                      </v-card-title> 
                      

                      <v-text-field v-model="first_name" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mt-lg-8 mt-md-4 mt-sm-2 mt-1" color="accent" label="Имя" placeholder=" "  :rules="not_empty"></v-text-field>
                      <v-text-field v-model="last_name" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" color="accent" label="Фамилия" placeholder=" "  :rules="not_empty" ></v-text-field>

                      <!-- <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2"> -->
                      <v-checkbox color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" v-model="hasParentName" label="Есть Отчество?"></v-checkbox>
                      <v-text-field v-model="parent_name" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" color="accent" label="Отчество" placeholder=" " :disabled="!hasParentName" :rules="not_empty"></v-text-field>
                      <!-- </div> -->

                      <v-select v-model="sub" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" color="accent" :items="sub_items" item-text="title" item-value="int" label="Льготы" >

                      </v-select>
                      <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                        <v-text-field v-model="phonenum" type="number" class="mt-lg-16 mt-md-8 mt-4" color="accent" label="Номер телефона" placeholder="8(800)-555-35-35"  maxlength="11" :rules="chars11"></v-text-field>
                      </div>
                      <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                        <v-text-field v-model="passwrd"  type="password" color="accent" label="Пароль" placeholder="" minlength="11" :rules="chars11"></v-text-field>
                      </div>
                      <v-card-actions>
                        <v-btn text color="accent" class="ml-lg-16 ml-md-8 ml-sm-2 ml-1 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" elevation="0" href="/login" >
                          Войти
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="accent" class="mr-lg-16 mr-md-8 mr-sm-2 mr-1 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" @click="RegisterClient(0)" >
                          Зарегистрироваться
                        </v-btn>
                      </v-card-actions>
                    <!-- </v-img> -->
                  </v-card>
                </v-tab-item>
                <v-tab-item key="reg_citizen" >
                  <v-card outlined class="mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                    <v-card-title class="text-h5 justify-center">
                      Зарегистрировать карту жителя
                    </v-card-title> 
                    <v-text-field v-model="first_name" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" color="accent" label="Имя" placeholder=" " :rules="not_empty" ></v-text-field>
                    <v-text-field v-model="last_name" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mb-lg-16 mb-md-8 mb-sm-4 mb-2" color="accent" label="Фамилия" placeholder=" " :rules="not_empty" ></v-text-field>
                    
                    <v-checkbox color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" v-model="hasParentName" label="Есть Отчество?"></v-checkbox>
                    <v-text-field v-model="parent_name" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" color="accent" label="Отчество" placeholder=" " :disabled="!hasParentName" :rules="not_empty"></v-text-field>
                    
                    
                    <v-select v-model="sub" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2" color="accent" :items="sub_items" item-text="title" item-value="int" label="Льготы" >

                    </v-select>

                    <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                      <v-text-field v-model="email" type="email" class="mt-lg-16 mt-md-8 mt-4" color="accent" label="Почта" placeholder=" @mail.ru" :rules="not_empty"></v-text-field>
                    </div>
                    <div class="d-flex mx-lg-16 mx-md-8 mx-sm-4 mx-2">
                      <v-text-field v-model="passwrd" type="password" color="accent" label="Пароль" placeholder="" minlength="11" :rules="chars11"></v-text-field>
                    </div>



                    <v-card-actions>
                      <v-btn text color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" elevation="0" href="/login" >
                        Войти
                      </v-btn>
                      <v-spacer></v-spacer>
                      <v-btn color="accent" class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mb-lg-16 mb-md-8 mb-sm-4 mb-2 px-lg-8 px-md-4 px-sm-2 px-1" right elevation="0" @click="RegisterClient(1)" >
                        Зарегистрироваться
                      </v-btn>
                    </v-card-actions>

                  </v-card>
                </v-tab-item>
              </v-tabs-items>
          </div>
        </v-container>
        <v-snackbar v-model="snackbar" :timeout="timeout" >
          {{snack_text}}
          <template v-slot:action="{ attrs }">
            <v-btn color="accent2" text v-bind="attrs" href="/login" >
              Логин
            </v-btn>
          </template>
        </v-snackbar>
      </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'RegistrationPage',
  data: () => ({
    reg_tab: null,
    first_name: null, 
    last_name: null, 
    hasParentName: true,
    parent_name: null, 
    sub: null,
    email: null, 
    phonenum: null, 
    passwrd: null, 

    sub_items: [
      { title: 'Без льгот', int: '0' },
      { title: 'Пожилой', int: '1' },
      { title: 'Инвалид', int: '2' },
      { title: 'Ветеран', int: '3' },
    ],
    snackbar: false,
    snack_text: '',
    timeout: 2000,
    not_empty: [v => v.length != 0 || 'Поле не пустое'],
    chars6: [v => !!v || 'Поле не пустое', v => v.length == 6 || '6 sym'],
    chars4: [v => !!v || 'Поле не пустое', v => v.length == 4 || '4 sym'],
    chars11: [v => !!v || 'Поле не пустое', v => v.length == 11 || 'недостаточно'],
  }),

  methods: {
    RegisterClient(typeint){
      // 0-guest, 1-citizen
      let allow_registration = true;

      var type = "RegisterGuest";
      var dataToSend;

      if(typeint == 0){
        // console.log(this.sub);
        dataToSend = JSON.stringify({
          "firstName": this.first_name, 
          "lastName": this.last_name,
          "parentName": this.parent_name,
          "hasParentName": this.hasParentName,
          "cardGuid": "4fa85f64-5817-4562-b3fc-2c963f66afa8",
          "cardValidFrom": "2021-05-21T12:31:24.039Z",
          "cardValidUntil": "2026-05-21T12:31:24.039Z",
          "clientSubtypeId": this.sub,
          "phoneNumber": this.phonenum,
          "password": this.passwrd
        });
      }
      else{
        type = "RegisterCitizen";
        dataToSend = JSON.stringify({
          "firstName": this.first_name, 
          "lastName": this.last_name,
          "parentName": this.parent_name,
          "hasParentName": this.hasParentName,
          "cardGuid": "4fa85f64-5817-4562-b3fc-2c963f66afa9",
          "cardValidFrom": "2021-05-21T12:31:24.039Z",
          "cardValidUntil": "2026-05-21T12:31:24.039Z",
          "clientSubtypeId": this.sub,
          "email": this.email,
          "password": this.passwrd
        });
      }


      
      if (allow_registration){
        fetch('http://178.154.254.162:8002/Clients/'+type, {
            method: 'POST',
            headers: {
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json'
            },
            body: dataToSend,
        }).then(resp => {
            console.log("Status: " + resp.status);
            if (resp.status === 200) {
                return resp.json()
            } else {
                return Promise.reject("server")
            }
            //console.log(resp);
        })
        .then(dataJson => {
            this.snack_text = "Зарегистрирован: " + this.first_name + " " + this.last_name + " " + dataJson.clientGuid;
            this.snackbar = true;
        })
      }else{
        // alert("пуста!!!ууу!");
        this.snack_text = "Не Зарегистрирован";
        this.snackbar = true;
      }

    }
  },
}


</script>
