<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      D E B U G
    </v-card-title>
    <v-text-field id="card_number_field" class="ma-lg-16 ma-md-8 ma-sm-4 ma-2" color="accent" label="Card Number" placeholder="Placeholder" outlined single-line ></v-text-field>
    <v-card-actions>
      <v-btn color="accent" class="ma-lg-16 ma-md-8 ma-sm-4 ma-2" right elevation="0" @click="GetClients()" >
        Get Clients
      </v-btn>
      <v-btn color="accent" class="ma-lg-16 ma-md-8 ma-sm-4 ma-2" right elevation="0" @click="GetStatistics()" >
        Get Statistics
      </v-btn>
    </v-card-actions>
    <v-snackbar v-model="snackbar" :timeout="timeout" >
      {{snack_text}}
    </v-snackbar>
  </v-card>
</template>

<script>

  export default {
    name: 'DevDebugCard',
    data: function () {
      return {
        snackbar: false,
        snack_text: '',
        timeout: 2000,
      }
    },
    methods:{

      GetClients(){
        fetch('http://178.154.254.162:8002/Clients', {
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
            //console.log(resp);
        })
        .then(dataJson => {
            console.log(dataJson);

        })
      },

      GetStatistics(){
        fetch('http://178.154.254.162:8002/Statistics', {
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
            this.snack_text = "ClientsCount: " + dataJson.clientsCount;
            this.snackbar = true;
            console.log("clientsCount: "+dataJson.clientsCount);

        })
      }
    }

  }


</script>
