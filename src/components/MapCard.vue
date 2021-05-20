<template>
  <div>
    <v-card outlined >
      <v-card-title class="text-h5">
        Map
      </v-card-title>
        <yandex-map 
          :coords="coords"
          :zoom="10" 
          @click="onClick"
        >
          <ymap-marker 
            :coords="coords" 
            marker-id="123" 
            hint-content="some hint" 
          />
        </yandex-map>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
    
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
    function () {
      return {
        notification_switch: true
      }
    }
    }),
    methods: {
      onClick(e) {
        this.coords = e.get('coords');
      },
    },
    name: 'MapCard',
  }
</script>

<style>
.ymap-container {
  height: 50vh;
}
</style>
