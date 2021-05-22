<template>
  <v-card outlined>
    <v-card-title class="justify-center">
      Настройки
    </v-card-title>
    <v-list>
      <v-divider></v-divider>
      <v-subheader inset>Уведомления</v-subheader><!--  Notifications -->
      <v-list-item link @click="notification_switch = !notification_switch">
        <v-list-item-icon>
          <v-icon>mdi-bell-ring</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Уведомления</v-list-item-title><!--  Notifications -->
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="notification_switch" title="Уведомления" color="accent" inset readonly></v-switch>
        </v-list-item-action>
      </v-list-item>
      <!-- <v-list-item
        v-for="(item, i) in items2"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item> -->
      <v-divider></v-divider>
      <v-subheader inset>Внешний вид</v-subheader><!--  Appearance -->
      <v-list-item link @click="ChangeTheme()" :disabled="local_theme">
        <v-list-item-icon>
          <v-icon>mdi-brightness-4</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Темная тема</v-list-item-title><!--  Appearance -->
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="$vuetify.theme.dark" title="DarkMode" color="accent" inset readonly></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item link @click="SystemTheme()">
        <v-list-item-icon>
          <!-- <v-icon>mdi-brightness-4</v-icon> -->
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Тема как на устройстве</v-list-item-title><!--  Follow System Theme -->
        </v-list-item-content>
        <v-list-item-action>
          <v-checkbox v-model="local_theme" color="accent" class="px-lg-4 px-md-2 px-1" readonly></v-checkbox>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>

  export default {
    name: 'SettingsCard',
    data: function () {
      return {
        notification_switch: true,
        local_theme: false,
      }
    },
    methods: {
      SystemTheme(){
        localStorage.setItem('key_systheme', !(localStorage.key_systheme == 'true'));
        //console.log(localStorage.key_systheme);
        this.local_theme = (localStorage.key_systheme == 'true');
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.$vuetify.theme.dark = true;
        }
        else{
          this.$vuetify.theme.dark = false;
        }
      },    
      ChangeTheme(){
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        console.log("$vuedark: " + this.$vuetify.theme.dark);
        localStorage.setItem('key_darktheme', this.$vuetify.theme.dark);
        console.log("locstor: " + localStorage.key_darktheme);
      }, 
    },
    created(){
      console.log(localStorage.key_systheme);
      this.local_theme = (localStorage.key_systheme == 'true');
    }
  }


</script>
