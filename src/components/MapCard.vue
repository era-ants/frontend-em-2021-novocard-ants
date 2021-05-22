<template>
    <v-card outlined>
        <v-card-title class="justify-center">
          Места
        </v-card-title>
          <yandex-map 
            :coords="coorLocation"
            :zoom="zoom_val" 
            @click="onClick"
            @boundschange="boundsMaps"
            @actionend="moveMapsEnded"
          >
              <ymap-marker 
                :coords="coordsShow" 
                marker-id="1" 
                hint-content="Hi Piple" 
                :balloon-template="balloonTemplate"
                :icon="markerIcon"
              >
              </ymap-marker>
          </yandex-map>
      <v-card-title class="text-h5">
        Рекуомендуем Вам:
      </v-card-title>
      <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <!-- <v-card-title class="text-h5">
              Settings
            </v-card-title> -->
            <h1>About Title 1</h1>
            <h3>About Subtitle 1</h3>
            <p class=".text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </v-card>
          <v-card v-on:click="selectRecommended(0)" elevation="0" class="d-lg-none" color="transparent">
            <v-img class="ma-8" src="../assets/m1.jpg"></v-img>
          </v-card>
          <v-card v-on:click="selectRecommended(0)" elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
            <v-img class="ma-8" src="../assets/m1.jpg"></v-img>
          </v-card>
      </div>
    </v-card>
</template>

<script>

import img from "../assets/m1.jpg"
import musei from "../assets/musei_1.png"
  //import JSONData from './data.json'

  export default {
    data: () => ({
      markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: musei,
      imageSize: [43, 43],
      imageOffset: [0, 0],
      content: '',
      contentOffset: [0, 15],
      //contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    },
    img_src: img,
    cutChLoc: false,
    chZoom: false,
    chLoc: false,
    chEl: 0,
    coordsClick: [44.723774, 37.768809,],
    coorLocation: [44.723774, 37.768809,],
    coordsShow: [0, 0],
    listMarker: [
                  { coordsLabel: [44.714750723651605,37.777651387298654], 
                    coordsLocation: [44.714968749806765,37.777651387298654], 
                    hint: 'hint1'},
                  ],
    zoom_val: 10,
    function () {
      return {
        notification_switch: true
      }
    }
    }),
    computed: {
      balloonTemplate() {
        let str ="<img style=\"height: 100px\" src=\"" + this.img_src + "\">" +
        "<h1>Городской парк им. Ленина </h1>" +
        "<p>Адрес: ул. Твардовского <br/>" +
        " Сайт: mail.ru <br/>" +
        " Телефон: 8-920-320-1637" +
        "</p>";
        return str;
      }
    },
    methods: {
      moveMapsEnded(){
        if (this.chZoom)
        {
          this.chZoom = false;
          this.chLoc = true;
          this.coorLocation = this.listMarker[this.chEl].coordsLabel;
        }
        else if (this.chLoc)
        {
          this.cutChLoc = true;
          this.chLoc = false;
          this.zoom_val = 17;
        }
      },
      selectRecommended(el){
        this.chEl = el;
        this.chZoom = true;
        this.cutChLoc = false;
        if (this.zoom_val > 5)
          this.zoom_val = 5;
        else
          this.zoom_val = this.zoom_val - 1;
        this.coordsShow = this.listMarker[this.chEl].coordsLabel;

        /*let str = JSONData[0].coords.split(" ");
        this.listMarker[0].coords[0] = Number(str[0]);
        this.listMarker[0].coords[1] = Number(str[1]);

        for (let i = 1; i < JSONData.length; i++)
        {
          str = JSONData[i].coords.split(" ");
          this.listMarker.push({ coords: [ Number(str[0]), Number(str[1]) ]});
        }*/
      },
      onClick(e) {
        this.coordsClick = e.get('coords');
      },
      boundsMaps(event) {
        if (!this.chZoom)
          this.zoom_val = event.get("newZoom");
        if (this.cutChLoc)
          this.coorLocation = event.get("newCenter");
      },
    },
    name: 'MapCard',
  }
</script>

<style>
.ymap-container {
  height: 50vh;
}
.change_cursor{
  cursor: pointer;
}
</style>
