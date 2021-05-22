<template>

	<v-container>
		<creditCard></creditCard>
		<div style="height: 10%" class="d-none d-lg-block d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
		</div>
		<div style="z-index: 1000" class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" style=" position: relative; left: 7em; bottom: 1em" class="d-lg-none" color="transparent">
				<a @click="snackbar = true" style="font-size: 20px; text-decoration: underline
					" class="my-0"> Сохранить карту? </a>
			</v-card>
            <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
				<a @click="snackbar = true" style="text-decoration: underline
				" class="my-0"> Сохранить карту? </a>
			</v-card>
			<v-card elevation="0" class="d-none d-lg-block" width="5%" color="transparent">
			</v-card>
            <v-card elevation="0" color="transparent" style="position: relative; left: 3em">
				<v-text-field
					height="50px"
					label="Сумма"
					v-model="paySum"
					style="width: 94%; position: relative; bottom: 1em; font-size: 30px;"
					hide-details="auto"
				></v-text-field>
			</v-card>
		</div>
		<div style="position: relative; bottom: 1.5em; left: 7em;" class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<div class="d-flex flex-row justify-left">
				<p @click="paySum = 300" style="font-size: 30px; cursor: pointer; position: relative; right: 0.5em; text-decoration: underline
				" class="my-0"> 300 </p> 
				<p @click="paySum = 500" style="font-size: 30px; cursor: pointer; text-decoration: underline
				" class="my-0"> 500 </p>
				<p @click="paySum = 800" style="font-size: 30px; cursor: pointer; position: relative; left: 0.5em;text-decoration: underline
				" class="my-0"> 800 </p>
			</div>
		</div>

		<div style="position: relative; bottom: 1em;" class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card style="position: relative; left: 3.5em" elevation="0" class="d-flex flex-row justify-left" color="transparent">
				<v-checkbox
					class="justify-left"
					v-model="checkbox"
					label="Получить чек"
				>	
				</v-checkbox>
			</v-card>
		</div>

		<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" class="d-lg-none d-flex flex-column ma-0  justify-center" color="transparent">
				<h1 style="position: relative; left: 1.5em; text-align: center;"> Выберите способ оплаты </h1>
			</v-card>
			<v-card elevation="0" class="d-none d-lg-block d-flex flex-column ma-0  justify-center" color="transparent">
				<h1 style="position: relative; left: 0em; text-align: center;"> Выберите способ оплаты </h1>
			</v-card>
		</div>
		<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" class="d-none d-lg-block" width="0%" color="transparent">
			</v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-none d-lg-block" max-width="13%" color="transparent">
				<v-img width="90%" src="../assets/payByCreditCard.png">
				</v-img>
			</v-card>
			<v-card style="position: relative; left: 5.5em" v-on:click="choosePay" elevation="0" class="d-lg-none" color="transparent">
                <v-img width="70%" class="ma-0" src="../assets/payByCreditCard.png"></v-img>
            </v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-none d-lg-block" max-width="13%" color="transparent">
				<v-img width="90%" src="../assets/sberOnline.png">
				</v-img>
			</v-card>
			<v-card style="position: relative; left: 5.5em" v-on:click="choosePay" elevation="0" class="d-lg-none" color="transparent">
                <v-img width="70%" class="ma-0" src="../assets/sberOnline.png"></v-img>
            </v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-none d-lg-block" max-width="13%" color="transparent">
				<v-img width="90%" src="../assets/yandex_money.png">
				</v-img>
			</v-card>
			<v-card style="position: relative; left: 5.7em" v-on:click="choosePay" elevation="0" class="d-lg-none" color="transparent">
                <v-img width="70%" class="ma-0" src="../assets/yandex_money.png"></v-img>
            </v-card>
		</div>
		<div class="d-flex flex-column flex-lg-row justify-left" v-scroll-reveal>
			<v-card width="31%" elevation="0" class="d-flex flex-column ma-0" color="transparent">
			</v-card>
			<v-card height="30%" elevation="0" class="mb-16 pt-2 d-flex flex-column ma-0" color="transparent">
				<v-btn>
					Пополнить
				</v-btn>
			</v-card>
		</div>
		<div class="d-flex flex-column flex-lg-row justify-left" v-scroll-reveal>
			<v-card height="20%" elevation="0" class="d-flex flex-column ma-0" color="transparent">
			</v-card>
		</div>
		<v-snackbar
				v-model="snackbar"
				:timeout="timeout"
			>
				{{ text }}

			<template v-slot:action="{ attrs }">
				<v-btn
					color="blue"
					text
					v-bind="attrs"
					@click="snackbar = false"
				>
					Close
				</v-btn>
			</template>
		</v-snackbar>
	</v-card>
</template>

<script>
	import CreditCard from './CreditCard.vue'
	export default {
		components: {
			CreditCard,
		},
		data: () => ({
		checkbox: false,
		snackbar: false,
		text: 'Данные карты сохранены',
		timeout: 2000,
		paySum: '',
		cardNumber: '',	
	}),
		methods: {
			choosePay () {

			}
		},
	mounted() {
		},
	props: {
		card_number: {
			type: String,
			required: true
		},
	},
    name: 'PersonalArea',
  }
</script>
