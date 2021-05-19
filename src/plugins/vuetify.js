import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi'
  
    },
  // this is the spot to modify
  
    theme: {
      themes: {
        light: {
            primary: '#041A3A',
            secondary: '#16385F',
            accent: '#27AAE1',
            accent2: '#00A59B',
        },
        dark: {
            primary: '#041A3A',
            secondary: '#16385F',
            accent: '#27AAE1',
            accent2: '#00A59B',
        },
      }
    }
  })