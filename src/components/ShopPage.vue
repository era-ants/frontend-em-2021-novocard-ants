<template>
  <v-container>
    <v-row>
      <v-col
        v-for="n in 24"
        :key="n"
        cols="4"
      >
          <v-card @click="chooseItem(n)" height="200"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
      methods: {
        chooseItem: function (numItem){
          console.log(numItem);
      },
    //
    },
  }
</script>