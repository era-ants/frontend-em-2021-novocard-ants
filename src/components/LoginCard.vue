<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      Login
    </v-card-title>
    <v-text-field id="card_number_field" class="ma-16" color="accent" label="Card Number" placeholder="0000-0000-0000-0000" outlined single-line ></v-text-field>
    <v-card-actions>
      <v-btn color="accent" class="ma-16" right elevation="0" @click="LogInByCardNumber()" >
        Log In
      </v-btn>
    </v-card-actions>
    <v-snackbar v-model="snackbar" :timeout="timeout" >
      {{snack_text}}
    </v-snackbar>
  </v-card>
</template>

<script>

  export default {
    name: 'LoginCard',
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
                  return Promise.reject("server")
              }
          })
          .then(dataJson => {
              this.snack_text = "Logged In!: " + dataJson.firstName + " " + dataJson.lastName;
              this.snackbar = true;
          })
        }else{
          // alert("пуста!!!ууу!");
        }
      },
    }

  }


</script>
