<template>
  <v-card outlined>
    <v-card-title class="justify-center">
      История операций
    </v-card-title>
	<v-divider></v-divider>

		<v-alert border="top" class="d-flex flex-row" height="6vh" elevation="0" outlined>
			<v-card width="100vw" height="5vh" class="d-flex flex-row" elevation="0">
				<div style="width: 2%" class="d-none d-lg-block pt-5">
				</div>
				<div style="width: 5%" class="d-none d-lg-block pt-5">
						Дата
				</div>
				<div style="width: 5%" class="d-none d-lg-block pt-5">
						Время
				</div>
				<div style="width: 6%" class="d-none d-lg-block pt-5">
						Товар
				</div>
				<div style="width: 6%" class="d-none d-lg-block pt-5">
						Оплачено
				</div>
				<div style="width: 6%" class="d-none d-lg-block pt-5">
						Скидка
				</div>
				<div style="width: 8%" class="d-none d-lg-block pt-5">
						Начислено
				</div>
				<div style="width: 13%" class="d-none d-lg-block pt-5">
						Организация
				</div>
				<div style="width: 8%" class="d-none d-lg-block pt-5">
						Сайт
				</div>


				<div style="width: 25%" class="d-lg-none pt-5">
						Дата
				</div>
				<div style="width: 30%" class="d-lg-none pt-5">
						Время
				</div>
				<div style="width: 35%" class="d-lg-none pt-5">
						Оплачено
				</div>
				<div style="width: 35%" class="d-lg-none pt-5">
						Начислено
				</div>
			</v-card>
		</v-alert>

		<div v-for="item in historyList" :key="item.id">
			<v-alert v-if="item.num != 0"  border="top" class="d-flex flex-row" height="6vh" elevation="0" outlined>
				<v-card width="81vw" height="5vh" @click="chooseQR(item.id)" class="d-flex flex-row" elevation="0">
					<div style="width: 2%" class="d-none d-lg-block pt-5 d-flex flex-column">
					</div>
					<div style="width: 8%" class="d-none d-lg-block pt-5 d-flex flex-column">
							{{ item.date }}
					</div>
					<div style="width: 5%" class="d-none d-lg-block pt-5 d-flex flex-column">
							{{ item.time }}
					</div>
					<div style="width: 8%" class="d-none d-lg-block pt-5 d-flex flex-column">
							{{ item.product }}
					</div>
					<div style="width: 8%" class="d-none d-lg-block pt-5 d-flex flex-column">
							{{ item.payment }}
					</div>
					<div style="width: 8%" class="d-none d-lg-block pt-5">
							{{ item.discount }}
					</div>
					<div style="width: 8%" class="d-none d-lg-block pt-5 d-flex flex-column">
							{{ item.accrued }}
					</div>
					<div style="width: 15%" class="d-none d-lg-block pt-5">
							{{ item.org }}
					</div>
					<div style="width: 15%" class="d-none d-lg-block pt-5">
							{{ item.site }}
					</div>



					<div style="width: 2%" class="d-lg-none pt-5 d-flex flex-column">
					</div>
					<div style="width: 8%" class="d-lg-none pt-5 d-flex flex-column">
							{{ item.date }}
					</div>
					<div style="width: 8%" class="d-lg-none pt-5 d-flex flex-column">
							{{ item.time }}
					</div>
					<div style="width: 8%" class="d-lg-none pt-5 d-flex flex-column">
							{{ item.payment }}
					</div>
					<div style="width: 20%" class="d-lg-none pt-5 d-flex flex-column">
							{{ item.accrued }}
					</div>
				</v-card>
			</v-alert>
		</div>
		
  </v-card>
</template>

<script>
		export default {
		mounted() {
			let newList = {num: 0, product: '', date: '', time: '', payment: '', discount: '', accrued: 0, ord: '', site: ''};

			if (localStorage.getItem('dataChanged')) {

				localStorage.setItem('dataChanged', false);
				newList.num = localStorage.getItem('numFields');
				newList.product = localStorage.getItem('product');
				newList.date = localStorage.getItem('date');
				newList.time = localStorage.getItem('time');
				newList.payment = 100;
				newList.discount = 0;
				newList.accrued = 0;
				newList.org = "Новороссийск";
				newList.site = "https://static.tildacdn";

				console.log(this.historyList);
				this.historyList.push(newList);
				console.log(this.historyList);
			}
		},
		data: () => ({
			historyList: [{num: 0, product: '', date: '', time: '', payment: '', discount: '', accrued: 0, ord: '', site: ''}],
		}),
		name: 'HistoryPage',
		methods: {
			chooseQR: function(Num) {
				console.log(Num);
			},
		},
	}
</script>