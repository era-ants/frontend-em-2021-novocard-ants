<template>
  <div>
    <router-view>
    </router-view> 
  
    <!-- <v-btn id="testfab" color="red" elevation="2" large bottom left fixed rounded class="ma-12">
        0
    </v-btn> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  //  components: {
  //    MainOps,
  //  },
  /* mounted() {
    window.addEventListener('resize', function() {
      document.getElementById("testfab").innerHTML = this.$vuetify.breakpoint.name;
    }, true);
  } */
};
</script>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hidden::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge add Firefox */
  .scrollbar-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
  }
</style>