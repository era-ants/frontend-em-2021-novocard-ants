<template>
  <v-card outlined>
      <v-card-title class="justify-center">
        Места
      </v-card-title>

      <v-divider></v-divider>
			<div style="height: 50vh;" id="myMap"></div>
      <v-divider></v-divider>
      <!-- <v-card-title class="text-h5"> -->
        <!-- <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn> Туризм </v-btn> 
            <v-spacer></v-spacer>
          </v-card>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn> Досуг </v-btn> 
            <v-spacer></v-spacer>
          </v-card>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn @click="changeMaps(3)"> События </v-btn>
            <v-spacer></v-spacer>
          </v-card>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn @click="changeMaps(4)"> Маршруты </v-btn>
            <v-spacer></v-spacer>
          </v-card>
        </div> -->


        <div class="d-flex flex-row">
          <v-tabs color="accent"  v-model="map_tab" fixed-tabs>
            <v-tab key="tabitem1">Туризм</v-tab>
            <v-tab key="tabitem2">Досуг</v-tab>
            <v-tab @click="changeMaps(3)" key="tabitem3">События</v-tab>
            <v-tab @click="changeMaps(4)" key="tabitem4">Маршруты</v-tab>
          </v-tabs>
        </div>

        <v-tabs-items v-model="map_tab">
          <v-tab-item key="tabitem1" >
            <v-card outlined width="100%" height="50%">
              <v-card-title>
                Туризм
              </v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item key="tabitem2" >
            <v-card outlined width="100%" height="50%">
              <v-card-title>
                Досуг
              </v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item key="tabitem3" >
            <v-card outlined width="100%">
              <v-card-title>
                События
              </v-card-title>
              <v-text-field v-model="msg" style="position: relative; bottom: 1.5em; width: 50%"> </v-text-field>
              <v-btn @click="sendMsg" style="position: relative; bottom: 1.5em">
                Отправить
              </v-btn>
              <v-spacer></v-spacer>
              <div v-for='item in eventsText'  :key='item.id'>
                <v-alert border="top" class="d-flex flex-row" height="6vh" elevation="0" outlined>
                  <v-card width="35vw" height="5vh" @click="focusMaps(item)" class="d-flex flex-row pt-4" elevation="0">
                    {{ item.text }}
                  </v-card>
                </v-alert>
              </div>
            </v-card>

          </v-tab-item>
          <v-tab-item key="tabitem4" >
            <div v-if="routesMaps" class="d-lg-none d-flex flex-column flex-lg-row" v-scroll-reveal>
              <v-card max-width="100%" v-for="item in itemsRoutes" :key="item.id" elevation="0" class="d-flex flex-column mx-md-2 mx-sm-1 mx-1" color="transparent">
                <h1 >{{ item.name }} </h1>
                <h3 >{{ item.typeName }} </h3>
                <p class="text-body-1 text-justify "> {{ item.text }} </p>
                <v-btn @click="beginRoutes(item)"> Посмотреть на карте </v-btn>
              </v-card>
            </div>
            <div v-if="routesMaps" class="d-none d-lg-flex flex-column flex-lg-row" v-scroll-reveal>
                  <v-card max-width="30%" v-for="item in itemsRoutes" :key="item.id" elevation="0" class="flex-column mx-xl-8 mx-lg-4" color="transparent">
                    <h1>{{ item.name }} </h1>
                    <h3>{{ item.typeName }} </h3>
                    <p class="text-body-1 text-justify"> {{ item.text }} </p>
                    <v-btn @click="beginRoutes(item)"> Посмотреть на карте </v-btn>
                  </v-card>
            </div>
          </v-tab-item>
        </v-tabs-items>

      <!-- </v-card-title> -->
      <!-- 
        <div v-if="eventsMaps">
			
        </div> -->

  </v-card>
</template>

<script>
//import { loadYmap } from 'vue-yandex-maps'
import img from '../assets/m1.jpg'
import load from 'ymaps-loader'
  let ymaps___;
  let myMap___;
  let remMulti = null;


  let listMarker = [
					{ 
						coordsLabel: [44.714750723651605,37.777651387298654],  
						hint: 'Парк им. Ленина',
						type: 1,
						geo: Object,
					},
					{
						coordsLabtel: [44.737276661873494,37.74961871290824],
						hint: 'Цемесская роща',
						type: 1,
						geo: Object,
					},
					{
						coordsLabel: [44.68571851920116,37.78504317147068],
						hint: 'Южный парк',
						type: 1,
						geo: Object,
					},
					{
						coordsLabel: [44.67845427611684,37.788517456624426],
						hint: 'Пионерская роща',
						type: 1,
						geo: Object,
					},
					{
						coordsLabel: [44.7373284187836,37.74959169067936],
						hint: 'Цемесская роща',
						type: 1,
						geo: Object,
					},
					{
						coordsLabel: [44.7385917605882,37.77032793612545],
						hint: 'ДК им. Маркова',
						type: 2,
						geo: Object,
					},
					{
						coordsLabel: [44.71990634899834,37.77613698101273],
						hint: 'Вечный огонь',
						type: 2,
						geo: Object,
					},
                ];


  export default {
	created: function () {
		load({ apiKey: '1222afeb-4692-4bab-b000-5ce5f9027daa'}).then((ymaps) => {
        // The global variable `ymaps` is available now
        //let img;
        console.log("ymaps");
        let myMap = new ymaps.Map('myMap', {
			// центр и коэффициент масштабирования однозначно
			// определяют область картографирования
			center: [44.723774, 37.768809],
			zoom: 10,
		});

        const collection = new ymaps.GeoObjectCollection(null, {
		});

        ymaps___ = ymaps;
        myMap___ = myMap;

        for (let i = 0; i < listMarker.length; i++)
        {
			/*if (listMarker[i].type === 1)
				img = "../assets/museum.png";
			else if (listMarker[i].type === 2)
				img = "../assets/welcome.png";*/
			let img
			if (listMarker[i].type == 2)
				img = require('../assets/monum_marker.png');
			else
				img = require('../assets/park.png');
			collection.add(listMarker[i].geo = new ymaps___.Placemark(listMarker[i].coordsLabel,{}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: img,
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }));
		}
		console.log(collection);
		myMap___.geoObjects.add(collection);
  });
	},
    data: () => ({
      map_tab: null,
      eventsMaps: false,
      markerIconPark: {
      layout: 'default#imageWithContent',
      imageHref: require('../assets/welcome.png'),
      imageSize: [43, 43],
      imageOffset: [0, 0],
      content: '',
      contentOffset: [0, 15],
      //contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    },
      markerIconMuseum: {
      layout: 'default#imageWithContent',
      imageHref: require('../assets/museum.png'),
      imageSize: [43, 43],
      imageOffset: [0, 0],
      content: '',
      contentOffset: [0, 15],
      //contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    },
    routesMaps: false,
    itemsRoutes: 
      [
        {
          coords: [
                    [44.723774, 37.768809],
                    [44.714750723651605,37.777651387298654],
                    [44.714968749806765,37.777651387298654],
                  ],
          name: "Хутор Камчатка – Южная Озереевка, 8 км", 
          text: "Старт из села Мысхако от памятного места Долина смерти. Посещаем памятник-блиндаж на месте дислокации 108-й гвардейской бригады, памятник «Взрыв», дерево, высаженное генсеком Леонидом Ильичом Брежневым в 1974 году. Затем выходим на лесную тропу. По пути знакомимся с местными достопримечательностями: кормим белок у домика для белок, фотографируемся у дерева, получившего зловещее название «Колдун», умываемся родниковой водой. Поднимемся на поляну, распложенную у подножия горы Колдун, откуда открывается потрясающий вид на город, фотографируемся, отдыхаем. Спускаемся вниз к комплексу «Колодец жизни».",
          typeName: "Пеший",
          type: 1, 
        },
        {
          coords: [
                    [44.723774, 37.768809],
                    [44.714750723651605,37.777651387298654],
                    [44.714968749806765,37.777651387298654],
                  ],
          name: "Маршрут №2: гора Колдун – Колодец жизни, 5 км", 
          text: "Старт из села Мысхако от памятного места Долина смерти. Посещаем памятник-блиндаж на месте дислокации 108-й гвардейской бригады, памятник «Взрыв», дерево, высаженное генсеком Леонидом Ильичом Брежневым в 1974 году. Затем выходим на лесную тропу. По пути знакомимся с местными достопримечательностями: кормим белок у домика для белок, фотографируемся у дерева, получившего зловещее название «Колдун», умываемся родниковой водой. Поднимемся на поляну, распложенную у подножия горы Колдун, откуда открывается потрясающий вид на город, фотографируемся, отдыхаем. Спускаемся вниз к комплексу «Колодец жизни». Плюсы: маршрут особенно полезен для школьников, которые ознакомятся с памятниками Великой Отечественной войны и узнают малоизвестные факты из военной истории города-героя Новороссийска. Чем удивит: прекрасной новороссийской природой. В щелях лес уже разнообразный, есть полный набор наших эндемиков – краснокнижные можжевельники, пицундская сосна, дубы. Самые яркие впечатления останутся от вида города с высоты птичьего полета.",
          typeName: "Пеший",
          type: 2, 
        },
        {
          coords: [
                    [44.723774, 37.768809],
                    [44.714750723651605,37.777651387298654],
                    [44.714968749806765,37.777651387298654],
                  ],
          name: "Маршрут №3: Южная Озереевка – Беседка йогов — Лиманчик – Южная Озереевка, 10 км", 
          text: "Старт из села Южной Озереевки. По сухому руслу горной реки поднимаемся в гору по «черепаховой тропе», о которой двадцать пять лет назад Дроздов снял документарный фильм. В нем он рассказывает о нашей краснокнижной черепахе Никольского, которой тут полно особенно в мае. До Беседки йогов, откуда открывается потрясающий вид на море, час пути. Любуемся местными можжевельниками, фотографируем виды на долину реки Озерейки. У Беседки йогов отдыхаем, фотографируемся, восхищаемся Черным морем с высоты птичьего полета. Спускаемся к памятнику природы озеру Лиманчик. Отдыхаем на берегу моря или рядом с озером. Летом можно понырять с пирса в море, зимой отдохнуть у озера, восхититься его необыкновенным цветом. Обратный путь по берегу моря. Летом можно сделать остановку на диком пляже между Озереевкой и Лиманчиком и поплавать в самом чистом на побережье море. Плюсы: один из самых живописных маршрутов. Вид на море с Беседки йогов запомнится на всю жизнь и будет сниться. Есть небольшой перепад высот и затяжной подъем на гору, можно прокачать ноги. Чем удивит: весной – обилием живности. Можно встретить до десяти особей краснокнижных черепах, от малышей до взрослых, сделать множество фотографий.",
          typeName: "Пеший",
          type: 3, 
        },
      ],
      msg: '',
    eventsText: [{
		text: "Начинается концерт, все сюда!!!", 
		coords: [44.734611627760074,37.80458532638649],
		num: 0,}],
    img_src: img,
    cutChLoc: false,
    chZoom: false,
    chLoc: false,
    chEl: 0,
    coordsClick: [44.723774, 37.768809,],
    coorLocation: [44.723774, 37.768809,],
    coordsShow: [0, 0],
    zoom_val: 10,
    function () {
      return {
        notification_switch: true
      }
    }
    }),
    methods: {
		sendMsg(){
			//let textNew = this.msg;
			let newEvents = {
				text: this.msg, 
				coords: [44.74386882920636,37.72635937352836], 
				num: 5}

			console.log(this.eventsText);
			this.eventsText.push(newEvents);
			console.log(this.eventsText);
	},
		focusMaps(item){
			console.log("gut");
			console.log(this.eventsText);
			let myGeoObject = new ymaps___.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: item.coords
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Событие',
                hintContent: item.text,
            }
        }, {
        });
			myMap___.setCenter(item.coords);
			myMap___.setZoom(15);
			myMap___.geoObjects.add(myGeoObject);

			window.scrollTo(0, 0);
		},
		changeMaps(num){
			if (num == 3)
			{
				this.routesMaps = false;
				this.eventsMaps = true;
			}
			else if (num == 4)
			{	
				this.routesMaps = true;
				this.eventsMaps = false;
			}
		},
      beginRoutes(item){

        console.log(item);
        console.log(ymaps___);
        console.log(myMap___);
		if (remMulti != null)
        {
			myMap___.geoObjects.remove(remMulti);
        }

			remMulti = new ymaps___.multiRouter.MultiRoute({   
              // Точки маршрута. Точки могут быть заданы как координатами, так и адресом. 
              referencePoints: item.coords,
          params: {
            // Тип маршрута: на общественном транспорте.
            routingMode: "pedestrian"  
          }
        }, {
          // Автоматически устанавливать границы карты так,
          // чтобы маршрут был виден целиком.
          boundsAutoApply: true
        });
        // Добавление маршрута на карту.
		myMap___.geoObjects.add(remMulti);

		window.scrollTo(0, 0);
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
