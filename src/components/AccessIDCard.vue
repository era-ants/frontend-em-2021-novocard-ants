<template>
  <v-card outlined>
    <v-card-title class="justify-center-lg">
      Пропуск
      <v-btn color="accent" href="/main/scan" text absolute right style="text-transform: none !important;" > Сканировать QR </v-btn>
    </v-card-title>

    <v-img :src="require('../assets/qr-access.png')" class="d-none d-lg-block" max-height="70vh" contain :aspect-ratio="1/1" ></v-img>
    <v-img :src="require('../assets/qr-access.png')" class="d-lg-none" contain :aspect-ratio="1/1" ></v-img>
    <v-spacer></v-spacer>
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
