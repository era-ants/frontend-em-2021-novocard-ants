<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      Login
    </v-card-title>
    <v-text-field id="card_number_field" class="ma-16" color="accent" label="Card Number" placeholder="Placeholder" outlined single-line ></v-text-field>
    <v-card-actions>
      <v-btn color="accent" class="ma-16" right elevation="0" @click="LogInByCardNumber()" >
        Log In
      </v-btn>
      <v-btn color="accent" class="ma-16" right elevation="0" @click="GetClients()" >
        Get Clients
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

  export default {
    name: 'LoginCard',
    /* data: function () {
      return {
        pics: [
        ],
      }
    }, */
    methods:{
      LogInByCardNumber(){
        let login_allowed = true;
        let card_number = document.getElementById("card_number_field").outerHTML;
        console.log(card_number);
        
        if (login_allowed){
          fetch('http://178.154.254.162:8000/Clients/'+ card_number, {
              method: 'GET',
              // mode: 'no-cors',
              headers: {
                "Access-Control-Allow-Origin": "*",
                // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
              },
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
              //console.log(dataJson.access_token);
              //saving token
              localStorage.setItem('token', dataJson.access_token);

          })
        }else{
          alert("пуста!!!ууу!");
        }
      },

      GetClients(){
        fetch('http://178.154.254.162:8000/Clients', {
            method: 'GET',
            // mode: 'no-cors',
            headers: {
              "Access-Control-Allow-Origin": "*",
              // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
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
            //console.log(dataJson.access_token);
            //saving token
            //localStorage.setItem('token', dataJson.access_token);
            console.log(dataJson.firstName);

        })
      }
    }

  }


</script>
