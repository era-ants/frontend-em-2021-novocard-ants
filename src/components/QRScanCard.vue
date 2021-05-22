<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      QR Сканер
    </v-card-title>
    <v-card outlined>
      <QrcodeStream/>
      <!-- <QrcodeDropZone/> -->
      <!-- <QrcodeCapture/> --> 
    </v-card>
  </v-card>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

  export default {
    name: 'QRScanCard',
    components: {
      QrcodeStream,
      // QrcodeDropZone,
      // QrcodeCapture
    },
    /* data: function () {
      return {
        pics: [
          { src: require('../assets/f1.jpg'), },
        ],
      }
    }, */

  }


</script>
