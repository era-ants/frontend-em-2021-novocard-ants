<template>
	<v-container>
		<div style="position: relative; left: 1.3em" class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card style="z-index: 100" elevation="0" class="d-flex flex-column ma-0" color="transparent">
				<v-sheet width="25em" height="13em" color="red">
					<div class="d-flex flex-column justify-center" v-scroll-reveal>
						<v-img style="position: relative; left: 2em; top: 1.0em" width="12em" :src="bank_logo">
						</v-img>
					</div>
					<div class="d-flex flex-row justify-center" v-scroll-reveal>
						<v-text-field
							label="#### #### #### ####"
							solo
							dense
							v-model="cardNumber"
							v-mask="otherCardMask"
							style="font-size: 20px; text-align: center; position: relative; top: 0.5em; padding: 0.9em 2em; border: 2em;"
							hide-details="auto"
						></v-text-field>
					</div>
					<div class="d-flex flex-row justify-center" v-scroll-reveal>
						<v-text-field
							label="##"
							solo
							dense
							v-model="CV"
							v-mask="MonthMask"
							style="font-size: 20px; width: 10%; text-align: center; position: relative; top: 0.0em; padding: 0.9em 2em; border: 2em;"
							hide-details="auto"
						></v-text-field>
						<v-text-field
							label="##"
							solo
							dense
							v-model="CCV"
							v-mask="MonthMask"
							style="font-size: 20px; width: 10%; text-align: center; position: relative; top: 0.0em; right: 3.5em; padding: 0.9em 2em; border: 2em;"
							hide-details="auto"
						></v-text-field>

					</div>
					<div class="d-flex flex-column justify-center" v-scroll-reveal>
						<v-img style="position: relative; top: -3.5em; left: 18.5em" width="5em" height="3em" :src="brand_logo">
						</v-img>
					</div>
				</v-sheet>
			</v-card>
			<v-card elevation="0" color="transparent">
				<v-sheet class="d-none d-lg-block" style="position: relative; top: 3em; right: 17em" width="25em" height="13em" color="#bbb">
					<v-sheet style="position: relative; top: 3em" width="100%" height="3em" color="black">
					</v-sheet>
					<v-text-field
						label="###"
						solo
						dense
						v-model="CCV1"
						v-mask="CCVMask"
						style="font-size: 20px; width: 15%; text-align: center; position: relative; bottom: -4.5em; left: 15.5em;"
						hide-details="auto"
					></v-text-field>
				</v-sheet>
				<v-sheet class="d-lg-none" style="position: relative; top: -10em; left: 7em" width="25em" height="13em" color="#bbb">
					<v-sheet style="position: relative; top: 3em" width="100%" height="3em" color="black">
					</v-sheet>
					<v-text-field
						label="###"
						solo
						dense
						v-model="CCV1"
						v-mask="CCVMask"
						style="font-size: 20px; width: 15%; text-align: center; position: relative; bottom: -4.5em; left: 15.5em;"
						hide-details="auto"
					></v-text-field>
				</v-sheet>
			</v-card>
		</div>
		<div style="height: 0%" class="d-none d-lg-block d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
		</div>
		<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" style="position: relative; left: 10em; bottom: 1em" class="d-lg-none" color="transparent">
				<a @click="snackbar = true" style="text-decoration: underline
					" class="my-0"> Сохранить карту? </a>
			</v-card>
            <v-card elevation="0" class="d-none d-lg-block" max-width="50%" color="transparent">
				<a @click="snackbar = true" style="text-decoration: underline
				" class="my-0"> Сохранить карту? </a>
			</v-card>
			<v-card elevation="0" class="d-none d-lg-block" width="5%" color="transparent">
			</v-card>
            <v-card elevation="0" color="transparent">
				<v-text-field
					label="Сумма"
					v-model="paySum"
					style="position: relative; bottom: 1em; font-size: 20px;"
					hide-details="auto"
				></v-text-field>
			</v-card>
		</div>
		<div style="position: relative; bottom: 1em; left: 7em" class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" class="d-flex flex-column ma-0" color="transparent">
				<p @click="paySum = 300" style="cursor: pointer; position: relative; right: 0.5em; text-decoration: underline
				" class="my-0"> 300 </p> 
			</v-card>
			<v-card elevation="0" class="d-flex flex-column ma-0" color="transparent">
				<p @click="paySum = 500" style="cursor: pointer; text-decoration: underline
				" class="my-0"> 500 </p>
			</v-card>
			<v-card elevation="0" class="d-flex flex-column ma-0" color="transparent">
				<p @click="paySum = 800" style="cursor: pointer; position: relative; left: 0.5em;text-decoration: underline
				" class="my-0"> 800 </p>
			</v-card>
		</div>

		<div style="position: relative; bottom: 1em; left: 7em" class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card width="40%" elevation="0" class="d-flex flex-column ma-0" color="transparent">
				<v-checkbox
					class="justify-left"
					v-model="checkbox"
					label="Получить чек"
				></v-checkbox>
			</v-card>
		</div>

		<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" class="d-flex flex-column ma-0  justify-center" color="transparent">
				<h1> Выберите способ оплаты </h1>
			</v-card>
		</div>
		<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card elevation="0" class="d-none d-lg-block" width="0%" color="transparent">
			</v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-none d-lg-block" max-width="13%" color="transparent">
				<v-img width="90%" src="../assets/payByCreditCard.png">
				</v-img>
			</v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-lg-none" color="transparent">
                <v-img width="50%" class="ma-0" src="../assets/payByCreditCard.png"></v-img>
            </v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-none d-lg-block" max-width="13%" color="transparent">
				<v-img width="90%" src="../assets/sberOnline.png">
				</v-img>
			</v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-lg-none" color="transparent">
                <v-img width="50%" class="ma-0" src="../assets/sberOnline.png"></v-img>
            </v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-none d-lg-block" max-width="13%" color="transparent">
				<v-img width="90%" src="../assets/yandex_money.png">
				</v-img>
			</v-card>
			<v-card v-on:click="choosePay" elevation="0" class="d-lg-none" color="transparent">
                <v-img width="50%" class="ma-0" src="../assets/yandex_money.png"></v-img>
            </v-card>
		</div>
		<div class="d-flex flex-column flex-lg-row justify-left" v-scroll-reveal>
			<v-card width="31%" elevation="0" class="d-flex flex-column ma-0" color="transparent">
			</v-card>
			<v-card elevation="0" class="pt-2 d-flex flex-column ma-0" color="transparent">
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
	</v-container>
</template>

<script>
	let this_link;
	export default {
		data: () => ({
		checkbox: false,
		snackbar: false,
		text: 'Данные карты сохранены',
		timeout: 2000,
		paySum: '',
		cardNumber: '',
		CV: '',
		CCV: '',
		CCV1: '',
		otherCardMask: "#### #### #### ####",
		CCVMask: "###",
		MonthMask: "##",
		bank_logo: "URL",
		brand_logo: "URL",	
	}),
		methods: {
			choosePay () {

			}
		},
	created() {

		this_link = this;
		fetch(`https://api.cardinfo.online?input=408396&apiKey=f0c57cb05e923da593095edd459a85e3`)
		.then(function(response) {
		return response.json()
		}).then(function(data) {
			this_link.bank_logo = data.formBankLogoBigSvg;
			this_link.brand_logo = data.formBrandLogoSvg;

		/*front.style.background = data.formBackgroundColor
		front.style.color = data.formTextColor
		front.style.borderColor = data.formBorderColor
		frontFields.forEach((field) => field.style.borderColor = data.formBorderColor)
		bankLogo.style.display = data.formBankLogoBigSvg ? 'block' : 'none'
		bankLogo.src = data.formBankLogoBigSvg
		brandLogo.style.display = data.formBrandLogoSvg || data.brandLogoOriginalSvg ? 'block' : 'none'
		brandLogo.src = data.formBrandLogoSvg || data.brandLogoOriginalSvg*/
		}).catch(function(error) {
		console.error(error)
		})
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
