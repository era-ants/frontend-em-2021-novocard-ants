<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      Пропуск
    </v-card-title>
    <v-img :src="require('../assets/qr-access.png')" class="d-none d-lg-block" max-height="70vh" contain :aspect-ratio="1/1" ></v-img>
    <v-img :src="require('../assets/qr-access.png')" class="d-lg-none" contain :aspect-ratio="1/1" ></v-img>
  </v-card>
</template>

<script>

  export default {
    name: 'AccessIDCard',
    /* data: function () {
      return {
        pics: [
          { src: require('../assets/f1.jpg'), },
        ],
      }
    }, */

  }


</script>
