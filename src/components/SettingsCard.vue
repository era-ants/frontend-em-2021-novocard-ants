<template>
  <v-card outlined>
    <v-card-title class="text-h5">
      Settings
    </v-card-title>
    <v-list>
      <v-divider></v-divider>
      <v-subheader inset>Notifications</v-subheader>
      <v-list-item link @click="notification_switch = !notification_switch">
        <v-list-item-icon>
          <v-icon>mdi-bell-ring</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Notifications</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="notification_switch" title="Notifications" color="accent" inset readonly></v-switch>
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
      <v-subheader inset>Appearance</v-subheader>
      <v-list-item link @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-list-item-icon>
          <v-icon>mdi-brightness-4</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Dark Mode</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="$vuetify.theme.dark" title="DarkMode" color="accent" inset readonly></v-switch>
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
        notification_switch: true
      }
    }

  }


</script>
