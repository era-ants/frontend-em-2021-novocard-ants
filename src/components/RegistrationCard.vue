<template>
  <v-card outlined>
    <v-card color="accent2">
      <v-card-title class="text-h5" dark>
        Регистрация
      </v-card-title>
    </v-card>
    <v-tabs grow class="mb-16" v-model="reg_tab" dark background-color="accent2">
      <v-tab key="reg_guest"> Гость </v-tab>
      <v-tab key="reg_citizen"> Житель </v-tab>
    </v-tabs>
    <v-tabs-items v-model="reg_tab">
      <v-tab-item key="reg_guest" >
        <v-text-field id="first_name_field" class="mx-16" color="accent" label="Имя" placeholder=" " outlined single-line ></v-text-field>
        <v-text-field id="last_name_field" class="mx-16" color="accent" label="Фамилия" placeholder=" " outlined single-line ></v-text-field>

        <v-checkbox class="ml-16" color="accent" v-model="hasParentName" label="Есть Отчество?"></v-checkbox>
        <v-text-field id="parent_name_field" class="mx-16" color="accent" label="Отчество" placeholder=" " outlined single-line :disabled="!hasParentName"></v-text-field>

        <v-text-field id="passport_ser_field" class="mx-16" color="accent" label="Серия Паспорта" placeholder="0000" outlined single-line ></v-text-field>
        <v-text-field id="passport_num_field" class="mx-16" color="accent" label="Номер Паспорта" placeholder="000000" outlined single-line ></v-text-field>

        <v-text-field id="passport_dep_field" class="mx-16" color="accent" label="Паспорт выдан" placeholder=" " outlined single-line ></v-text-field>
        <v-text-field id="passport_dcd_field" class="mx-16" color="accent" label="Код подразделения" placeholder="000000" outlined single-line ></v-text-field>
        <v-card-actions>
          <v-btn color="accent" class="mx-16 mb-16" right elevation="0" @click="RegisterClient()" >
            Зарегистрироваться
          </v-btn>
        </v-card-actions>
      </v-tab-item>
      <v-tab-item key="reg_citizen" >
        <v-text-field id="first_name_field2" class="mx-16" color="accent" label="Имя" placeholder=" " outlined single-line ></v-text-field>
        <v-text-field id="last_name_field2" class="mx-16" color="accent" label="Фамилия" placeholder=" " outlined single-line ></v-text-field>
        <v-card-actions>
          <v-btn color="accent" class="mx-16 mb-16" right elevation="0" @click="RegisterClient2()" >
            Зарегистрироваться через систему
          </v-btn>
        </v-card-actions>
      </v-tab-item>
    </v-tabs-items>
    
    <v-snackbar v-model="snackbar" :timeout="timeout" >
      {{snack_text}}
    </v-snackbar>
  </v-card>

</template>

<script>

  export default {
    name: 'RegistrationCard',
    data: function () {
      return {
        reg_tab: null,
        hasParentName: true,
        snackbar: false,
        snack_text: '',
        timeout: 2000,
      }
    },
    methods:{
      RegisterClient(){
        let allow_registration = true;
        let first_name = document.getElementById("first_name_field").value;
        let last_name = document.getElementById("last_name_field").value;
        let parent_name = document.getElementById("parent_name_field").value;
        let pasp_serial = document.getElementById("passport_ser_field").value;
        let pasp_number = document.getElementById("passport_num_field").value;
        let pasp_depart = document.getElementById("passport_dep_field").value;
        let pasp_depcode = document.getElementById("passport_dcd_field").value;


        const dataToSend = JSON.stringify({
          "firstName": first_name, 
          "lastName": last_name,
          "parentName": parent_name,
          "hasParentName": this.hasParentName,
          "cardGuid": "4fa85f64-5817-4562-b3fc-2c963f66afa8",
          "cardValidFrom": "2021-05-21T12:31:24.039Z",
          "cardValidUntil": "2026-05-21T12:31:24.039Z",
          "clientTypeId": 2,
          "clientSubtypeId": 1,
          "passportSeries": pasp_serial,
          "passportNumber": pasp_number,
          "passportDateOfIssue": "2020-05-21T12:31:24.039Z",
          "passportDepartmentName": pasp_depart,
          "passportDepartmentCode": pasp_depcode
        });
        if (allow_registration){
          fetch('http://178.154.254.162:8002/Clients', {
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
              this.snack_text = "Зарегистрирован: " + first_name + " " + last_name + " " + dataJson.clientGuid;
              this.snackbar = true;
          })
        }else{
          // alert("пуста!!!ууу!");
        }
      },
      
      RegisterClient2(){
        let first_name2 = document.getElementById("first_name_field2").value;
        let last_name2 = document.getElementById("last_name_field2").value;
        this.snack_text = "Зарегистрирован2: " + first_name2 + " " + last_name2;
        this.snackbar = true;
      }
    }

  }


</script>
