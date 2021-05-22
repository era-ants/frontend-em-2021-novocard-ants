<template>
	<v-container>
		<v-spacer></v-spacer>
			<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
				<v-card elevation="0" class="d-lg-none" color="transparent">
					<v-img class="ma-8" src="../assets/avatar.png"></v-img>
				</v-card>
				<v-card elevation="0" class="d-none d-lg-block" max-width="20%" color="transparent">
					<v-img class="ma-8" src="../assets/avatar.png"></v-img>
				</v-card>
			</div>
			<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
				<v-card elevation="0" class="ma-2 text-center" color="transparent">
					<h1 class="my-2">Иванов Иван Иванович</h1>
				</v-card>
			</div>

			<div class="d-flex flex-column flex-lg-row justify-left" v-scroll-reveal>
				<v-card width=30% elevation="0" class="d-none d-lg-block ma-2" color="transparent">
				</v-card>
				<v-card width=50% elevation="0" class="ma-2" color="transparent">
					<h2 class="my-0"> Ваш баланс: </h2>
				</v-card>
			</div>
			<div class="d-flex flex-column flex-lg-row justify-left" v-scroll-reveal>
				<v-card width=30% elevation="0" class="ma-2 d-none d-lg-block" color="transparent">
				</v-card>
				<v-card width=25% elevation="0" class="ma-2" color="transparent">
					<h2 class="my-0"> 0Р </h2>
				</v-card>
				<v-card width=40% elevation="0" class="ma-2" color="transparent">
					<h2 class="my-0"> 0баллов </h2>
				</v-card>
			</div>
			<div class="d-flex flex-column flex-lg-row justify-left" v-scroll-reveal>
				<v-card width=30% elevation="0" class="ma-2 d-none d-lg-block" color="transparent">
				</v-card>
				<v-card width=25% elevation="0" class="d-none d-lg-block ma-2" color="transparent">
					<a class="my-0" href="#/main/paycard"> Как пополнить </a>
				</v-card>
				<v-card width=40% elevation="0" class="d-none d-lg-block ma-2" color="transparent">
					<a class="my-0" href="URL"> Как получать баллы </a>
				</v-card>
				<v-card elevation="0" class="d-lg-none ma-2" color="transparent">
					<a class="my-0" href="#/main/paycard"> Как пополнить </a>
				</v-card>
				<v-card elevation="0" class="d-lg-none ma-2" color="transparent">
					<a class="my-0" href="URL"> Как получать баллы </a>
				</v-card>
			</div>
	</v-container>
</template>

<script>
	let this_link;
  export default {
		data: () => ({
		cardNumber: '',
		CV: '',
		CCV: '',
		otherCardMask: "#### #### #### ####",
		CV_CCV_Mask: "###",
		bank_logo: "URL",
		brand_logo: "URL",	
	}),
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

<style>
	.front{
		border-radius: 0.8em
	}
</style>