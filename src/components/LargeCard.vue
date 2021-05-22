<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      Галерея
    </v-card-title>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in pics" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition" ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>

  export default {
    name: 'LargeCard',
    data: function () {
      return {
        pics: [
          { src: require('../assets/f1.jpg'), },
          { src: require('../assets/f2.jpg'), },
          { src: require('../assets/f3.jpg'), },
          { src: require('../assets/f4.jpg'), },
        ],
      }
    },

  }


</script>
