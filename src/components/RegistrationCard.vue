<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      Registration
    </v-card-title>
    <v-text-field id="first_name_field" class="ma-16" color="accent" label="First Name" placeholder=" " outlined single-line ></v-text-field>
    <v-text-field id="last_name_field" class="ma-16" color="accent" label="Last Name" placeholder=" " outlined single-line ></v-text-field>
    <v-checkbox v-model="hasParentName"></v-checkbox>
    <v-text-field id="parent_name_field" class="ma-16" color="accent" label="Last Name" placeholder="Placeholder" outlined single-line :disabled="!hasParentName"></v-text-field>
    <v-text-field id="passport_ser_field" class="ma-16" color="accent" label="Passport Serial" placeholder=" " outlined single-line ></v-text-field>
    <v-text-field id="passport_num_field" class="ma-16" color="accent" label="Passport Number" placeholder=" " outlined single-line ></v-text-field>
    <v-text-field id="passport_dep_field" class="ma-16" color="accent" label="Passport Department" placeholder=" " outlined single-line ></v-text-field>
    <v-text-field id="passport_dcd_field" class="ma-16" color="accent" label="Passport Code" placeholder=" " outlined single-line ></v-text-field>
    <v-card-actions>
      <v-btn color="accent" class="ma-16" right elevation="0" @click="RegisterClient()" >
        Register
      </v-btn>
    </v-card-actions>
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
              this.snack_text = "Registred!: " + first_name + " " + last_name + " " + dataJson.clientGuid;
              this.snackbar = true;
          })
        }else{
          // alert("пуста!!!ууу!");
        }
      },
    }

  }


</script>
