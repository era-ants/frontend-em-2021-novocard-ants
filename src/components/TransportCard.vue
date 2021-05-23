<template>
  <v-card outlined>
    <v-card-title class="justify-center">
      Проездной
    </v-card-title>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <div class="d-flex flex-column justify-center" v-scroll-reveal>
			<v-card class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 my-md-6 my-sm-3 my-1 rounded-xl" width="40%" elevation="6" color="red">
				<v-img :src="require('../assets/card-example.png')" :aspect-ratio="3.37/2.125" contain >
				</v-img>
			</v-card>
		</div>
    <v-spacer></v-spacer>
    <v-divider></v-divider>
    <v-spacer></v-spacer>
    <v-card-text class="justify-center text-subtitle-1">
      <v-icon>mdi-bus</v-icon>
      Проездов осталось: 18
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="accent" text style="text-transform: none !important;">
        Пополнить проезды
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

  export default {
    name: 'TransportCard',
    data: function () {
      return {

      }
    },

  }


</script>
