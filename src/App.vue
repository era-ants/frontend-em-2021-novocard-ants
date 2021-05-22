<template>
  <div>
      <!-- <router-link to="/info"> START </router-link>   -->
    <router-view>
    </router-view> 
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
  created(){
    // location.href = "/info";
  },
  mounted() {
    if (typeof sessionStorage.acc_eye == 'undefined') {
      sessionStorage.setItem('acc_eye', false);
    }

    if (typeof sessionStorage.logged_in == 'undefined') {
      sessionStorage.setItem('logged_in', "");

      sessionStorage.setItem('logged_name', "");
      sessionStorage.setItem('logged_fam', "");
      sessionStorage.setItem('logged_otch', "");
      sessionStorage.setItem('logged_type', false);

      sessionStorage.setItem('logged_email', "");
      sessionStorage.setItem('logged_phone', "");
    }

    //dark-theme
    if (typeof localStorage.key_darktheme == 'undefined') {
      localStorage.setItem('key_darktheme', false);
    }
    if (typeof localStorage.key_systheme == 'undefined') {
      localStorage.setItem('key_systheme', false);
    }

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