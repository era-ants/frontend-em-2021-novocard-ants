<template>
  <v-col cols="12">
    <v-card outlined >
      <v-card-title class="text-h5">
        LargeCard
      </v-card-title>
      <v-img src="../assets/f1.jpg"></v-img>
      <v-img src="../assets/f2.jpg"></v-img>
      <v-img src="../assets/f3.jpg"></v-img>
      <v-img src="../assets/f4.jpg"></v-img>
      <v-img src="../assets/f1.jpg"></v-img>
      <v-img src="../assets/f2.jpg"></v-img>
      <v-img src="../assets/f3.jpg"></v-img>
      <v-img src="../assets/f4.jpg"></v-img>
    </v-card>
  </v-col>
</template>

<script>

  export default {
    name: 'LargeCard',
    data: function () {
      return {
        notification_switch: true
      }
    }

  }


</script>
