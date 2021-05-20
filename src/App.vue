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
  data: () => ({
    follow_system_theme: false,
  }),
  //  components: {
  //    MainOps,
  //  },
  mounted() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if(this.follow_system_theme) {
        this.$vuetify.theme.dark = e.matches ? "dark" : "light";
        console.log(e.matches ? "dark" : "light");
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.dark = true;
      }
      else{
        this.$vuetify.theme.dark = false;
      }
    });
  } 

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