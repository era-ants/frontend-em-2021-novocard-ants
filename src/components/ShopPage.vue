<template>
  <v-card outlined>
    <v-card-title class="justify-center">
      Пополнение счета
    </v-card-title>
    <v-divider></v-divider>
    <v-row>
      <v-col v-for="item in link" :key="item.id" cols="4" >
          <v-dialog v-model="item.dialog" :key="item.num" width="500" >
            <template v-slot:activator="{ on, attrs }">
              <v-card @click="payInit(item.num)" v-bind="attrs" v-on="on" class="d-flex"  height="200">
                <v-img :src=item.img></v-img>
              </v-card>
            </template>

            <v-card>
              <v-card-title class="headline">
                {{ text }}
              </v-card-title>
              <v-divider></v-divider>
              <v-spacer></v-spacer>
              <v-card-text> 
              </v-card-text>
              <v-card-text> 
                Информация о товаре.
              </v-card-text>
              <v-card-text> 
              </v-card-text>
              <v-spacer></v-spacer>
              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="accent" text @click="item.dialog = false">
                  Отмена
                </v-btn>
                <v-btn color="accent" elevation="0" @click="payFinish()" >
                  Купить
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-card class="justify-center pt-3 d-flex" height="50">
            {{ item.desc }}
          </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
    export default {
      data: () => ({
        this_dialog: false,
        newFieldDataBase: {dataChanged: false, product: 'Конверт', date: "10.05.2021", time: "13:55", payment:100, discount: 0, accrued: 0, org: "Новороссийск", site: "https://static.tildacdn"},
        link: [
          {
            num: 0,
            img: 'https://static.tildacdn.com/tild6133-6265-4865-b339-333865393635/upload-29c8858b-a3e1.png',
            desc: "Конверты. Стоимость: 100Б",
            dialog: false,
          },
          {
            num: 1,
            img: 'https://static.tildacdn.com/tild3962-3737-4466-b435-373633353833/upload-69d4b1f0-2c26.png',
            desc: "Магниты. Стоимость: 100Б",
            dialog: false,
          },
          {
            num: 2,
            img: 'https://static.tildacdn.com/tild3137-3661-4130-b465-316532326664/upload-8c4cbb9b-411c.png',
            desc: "Значки. Стоимость: 100Б",
            dialog: false,
          },
          {
            num: 3,
            img: 'https://static.tildacdn.com/tild3830-6561-4230-a664-656261613937/upload-59377b30-90f7.png',
            desc: "Брелки. Стоимость: 100Б",
            dialog: false,
          },
          {
            num: 4,
            img: 'https://static.tildacdn.com/tild3836-3130-4830-b964-633434346436/upload-475ece28-14b2.png',
            desc: "Футболка. Стоимость: 100Б",
            dialog: false,
          },
        ],
        numIt: 0,
        text: ''
      }),
      methods: {
        payInit: function (num){
          this.numIt = num;

          if (this.numIt === 0)
          {
            this.newFieldDataBase.product = 'Конверты';
          }
          else if (this.numIt === 1)
          {
            this.newFieldDataBase.product = 'Магниты';
          }
          else if (this.numIt === 2)
          {
            this.newFieldDataBase.product = 'Значки';
          }
          else if (this.numIt === 3)
          {
            this.newFieldDataBase.product = 'Брелки';
          }
          else if (this.numIt === 4)
          {
            this.newFieldDataBase.product = 'Футболка';
          }

          this.text = this.newFieldDataBase.product;
        },
        payFinish: function (){

          let now = new Date();

          this.dialog = false;
          this.newFieldDataBase.dataChanged = true;

          this.newFieldDataBase.date = now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear();
          this.newFieldDataBase.time = now.getHours() + ":" + now.getMinutes();

          let numFields = localStorage.getItem('numFields');

          if (!numFields)
          {
            numFields = 1;
          }
          else
          {
            numFields = Number(numFields) + 1;
          }
          localStorage.setItem('numFields', numFields);
          localStorage.setItem('date', this.newFieldDataBase.date);
          localStorage.setItem('product', this.newFieldDataBase.product);
          localStorage.setItem('time', this.newFieldDataBase.time);
          localStorage.setItem('dataChanged', true);
          console.log(localStorage.getItem('dataChanged'));
        },
        chooseItem: function (numItem){
          console.log(numItem);
          this.numIt = numItem;
      },
    //
    },
  }
</script>