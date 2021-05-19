<template>
  <v-app-bar app flat clipped-left>
    <v-app-bar-nav-icon @click.stop="$root.mini = !$root.mini"></v-app-bar-nav-icon>
    <img class="mr-3" :src="require('../assets/app_icon.png')" height="40"/>
    <h3>AppName</h3>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>

    <v-btn icon>
      <v-avatar  color="accent" size="32">VJ</v-avatar>
    </v-btn>

  </v-app-bar>
</template>

<script>

  export default {
    name: 'AppBar',
  }


</script>
