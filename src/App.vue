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
  // data: () => ({
    // follow_system_theme: false,
  // }),
  //  components: {
  //    MainOps,
  //  },
  mounted() {
    if (typeof localStorage.logged_in == 'undefined') {
      sessionStorage.setItem('logged_in', "");
    }

    //dark-theme
    if (typeof localStorage.key_darktheme == 'undefined') {
      localStorage.setItem('key_darktheme', false);
    }
    if (typeof localStorage.key_systheme == 'undefined') {
      localStorage.setItem('key_systheme', false);
    }
    else{
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.dark = true;
      }
      else{
        this.$vuetify.theme.dark = false;
      }
      localStorage.setItem('key_darktheme', this.$vuetify.theme.dark);
    }

    if(localStorage.key_darktheme == 'true') {
      this.$vuetify.theme.dark = true;
    }else{
      this.$vuetify.theme.dark = false;
    }
    

    //follow_system_theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if(localStorage.key_systheme == 'true') {
        this.$vuetify.theme.dark = e.matches ? "dark" : "light";
        // console.log(e.matches ? "dark" : "light");

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.$vuetify.theme.dark = true;
        }
        else{
          this.$vuetify.theme.dark = false;
        }
        localStorage.setItem('key_darktheme', this.$vuetify.theme.dark);
      }
    });
    
    // console.log("mounted-dark: "+(this.$vuetify.theme.dark == true));
  },
  updated(){
    if(localStorage.key_systheme == 'true') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.dark = true;
      }
      else{
        this.$vuetify.theme.dark = false;
      }
    }
    else{
      if(localStorage.key_darktheme == 'true') {
        this.$vuetify.theme.dark = true;
      }
      else{
        this.$vuetify.theme.dark = false;
      }
    }
    // console.log("updated-dark: "+(this.$vuetify.theme.dark == true));
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