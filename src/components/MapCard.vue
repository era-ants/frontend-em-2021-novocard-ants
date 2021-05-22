<template>

  <v-container>
      <div class="flex-column flex-lg-row" v-scroll-reveal>
        <v-card-title class="text-h5">
          Map
        </v-card-title>
			<div style="height: 50vh; width: 80vw" id="myMap"></div>
      </div>
      <v-card-title class="text-h5">
        <div class="d-flex flex-column flex-lg-row" v-scroll-reveal>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn> Туризм </v-btn> 
            <v-spacer></v-spacer>
          </v-card>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn> Досуг </v-btn> 
            <v-spacer></v-spacer>
          </v-card>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn @click="eventsMaps = true"> События </v-btn>
            <v-spacer></v-spacer>
          </v-card>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <v-btn @click="routesMaps = true"> Маршруты </v-btn>
            <v-spacer></v-spacer>
          </v-card>
        </div>
      </v-card-title>
      <div v-if="routesMaps" class="d-lg-none d-flex flex-column flex-lg-row" v-scroll-reveal>
          <v-card max-width="100%" v-for="item in itemsRoutes" :key="item.id" elevation="0" class="d-flex flex-column ma-0" color="transparent">
            <!-- <v-card-title class="text-h5">
              Settings
            </v-card-title> -->
            <h1>{{ item.name }} </h1>
            <h3>{{ item.typeName }} </h3>
            <p class=".text-body-1"> {{ item.text }} </p>
            <v-btn @click="beginRoutes(item)"> Посмотреть на карте </v-btn>
          </v-card>
      </div>
      <div v-if="routesMaps" class="d-none d-lg-flex flex-column flex-lg-row" v-scroll-reveal>
          <v-card max-width="30%" v-for="item in itemsRoutes" :key="item.id" elevation="0" class="flex-column ma-0" color="transparent">
            <!-- <v-card-title class="text-h5">
              Settings
            </v-card-title> -->
            <h1>{{ item.name }} </h1>
            <h3>{{ item.typeName }} </h3>
            <p class=".text-body-1"> {{ item.text }} </p>
            <v-btn @click="beginRoutes(item)"> Посмотреть на карте </v-btn>
          </v-card>
      </div>

		<div v-if="eventsMaps" class="d-flex flex-column flex-lg-row" v-scroll-reveal>
          <v-card elevation="0" class="d-flex flex-column ma-8" color="transparent">
            <h1 class="my-8">Концерт </h1>
            <p class="text-body-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </v-card>
          <v-spacer></v-spacer>
          <v-card elevation="0" class="d-lg-none" color="transparent">
            <v-img class="ma-8" src="../assets/f3.jpg"></v-img>
          </v-card>
          <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
            <v-img class="ma-8" src="../assets/f3.jpg"></v-img>
          </v-card>
        </div>

  </v-container>
</template>

<script>
//import { loadYmap } from 'vue-yandex-maps'
import img from "../assets/m1.jpg"
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


  load({ apiKey: '1222afeb-4692-4bab-b000-5ce5f9027daa'}).then((ymaps) => {
        // The global variable `ymaps` is available now
        //let img;
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
        console.log(listMarker);

        for (let i = 0; i < listMarker.length; i++)
        {
			/*if (listMarker[i].type === 1)
				img = "../assets/museum.png";
			else if (listMarker[i].type === 2)
				img = "../assets/welcome.png";*/

			collection.add(listMarker[i].geo = new ymaps___.Placemark(listMarker[i].coordsLabel,{}, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'https://image.flaticon.com/icons/png/512/659/659052.png',
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

  export default {
	created: function () {
	},
    data: () => ({
		eventsMaps: false,
		markerIconPark: {
		layout: 'default#imageWithContent',
		imageHref: "../assets/welcome.png",
		imageSize: [43, 43],
		imageOffset: [0, 0],
		content: '',
		contentOffset: [0, 15],
      //contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    },
      markerIconMuseum: {
      layout: 'default#imageWithContent',
      imageHref: "../assets/museum.png",
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
