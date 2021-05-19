<template>
  <v-navigation-drawer app v-model="$root.navbar" :mini-variant.sync="$root.mini" clipped hide-overlay persistent>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-list >
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon x-large dark>mdi-account-circle</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item dark link>
          <v-list-item-content >
            <v-list-item-title class="title">
              Account Name
            </v-list-item-title>
            <v-list-item-subtitle >example.mail@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-img>
    <v-divider></v-divider> -->

    <v-list nav >
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-folder-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Item 1</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Item 2</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-star-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Item 3</v-list-item-title>
      </v-list-item>
    </v-list>
    
    <v-list nav>
      <v-list-item >
        <v-divider ></v-divider>
      </v-list-item>
      <v-list-item link @click="$vuetify.theme.dark = !$vuetify.theme.dark" >
        <v-icon >mdi-brightness-4</v-icon>
        
          <v-switch v-model="$vuetify.theme.dark" title="DarkMode" color="accent" inset></v-switch>
        
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>

  export default {
    name: 'NavDrawer',
  }


</script>
