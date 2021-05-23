<template>
  <v-card outlined>
    <v-card-title class="justify-center">
      Личный кабинет
    </v-card-title>
	<div class="d-flex flex-column">	
				<!--  style="background: red;" -->

		<v-spacer></v-spacer>
		<v-divider></v-divider>
		<v-spacer></v-spacer>

		<div class=" d-lg-none d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>
			<v-card class="mx-lg-16 mx-md-8 mx-sm-4 mx-2 mt-md-6 mt-sm-3 mt-1 rounded-xl" width="95%" elevation="6" color="red">
				<v-img :src="require('../assets/card-example.png')" :aspect-ratio="3.37/2.125" contain >
				</v-img>
			</v-card>
		</div>
		
		<div class="d-flex flex-row justify-center">
			<v-avatar class="ma-8" size="128" color="accent2" v-show="(($vuetify.breakpoint.lg)||($vuetify.breakpoint.xl))">
                  <img :src="require('../assets/fake_user_photo.png')" v-show="logged_in" >
                  <span v-show="!logged_in">A</span>
			</v-avatar>
		</div>

		<div class="d-flex flex-row justify-center mb-lg-12 mb-md-6 mb-sm-3 mb-1">
			<p class="text-xl-h3 text-lg-h4 text-md-h5 text-sm-h6 text-h6">{{user_lname}} {{user_fname}} {{user_pname}}</p>
		</div>

		<v-spacer></v-spacer>
		<v-divider></v-divider>
		<v-spacer></v-spacer>

		<div class="d-none d-lg-flex flex-row my-lg-6 my-md-3 my-sm-2 my-1">
			<v-card class="mx-lg-4 mx-md-2 mx-sm-1 mx-0 rounded-xl" width="45%" elevation="6" color="red">
				<v-img :src="require('../assets/card-example.png')" :aspect-ratio="3.37/2.125" contain >
				</v-img>
			</v-card>
			<v-spacer></v-spacer>
			<v-card class="mx-lg-4 mx-md-2 mx-sm-1 mx-0 rounded-xl" width="50%" outlined> 
				<v-card-title>
					Ваш баланс:
				</v-card-title>
				<v-card-text class="text-h1">
					{{user_money}} P
				</v-card-text>
				<v-card-text class="text-h3">
					{{user_bonus}} баллов
				</v-card-text>
				<v-card-actions>
					<v-btn color="accent" href="/main/paycard" text > Пополнить </v-btn>
					<v-btn color="accent" href="/main/paycard" text > Как получать баллы </v-btn>
				</v-card-actions>
			</v-card>
		</div>

		<div class="d-flex d-lg-none flex-column mx-lg-4 mx-md-2 mx-sm-1 mx-0 rounded-xl"> 
			<v-card-title>
				Ваш баланс:
			</v-card-title>
			<v-card-text class="text-h1">
				{{user_money}} P
			</v-card-text>
			<v-card-text class="text-h3">
				{{user_bonus}} баллов
			</v-card-text>
			<v-btn color="accent" href="/main/paycard" text > Пополнить </v-btn>
			<v-spacer></v-spacer>
			<v-btn color="accent" href="/main/paycard" text > Как получать баллы </v-btn>
		</div>

	</div>
  </v-card>
</template>

<script>
  let this_link;
  export default {
    name: 'PersonalArea',
	// props: {
	// 	card_number: {
	// 		type: String,
	// 		required: true
	// 	},
	// },
	data: () => ({
		logged_in: true,
		user_lname: 'Петров',
		user_fname: 'Иван',
		user_pname: 'Иванович',
		user_money: 100,
		user_bonus: 100,
	// cardNumber: '',
	// CV: '',
	// CCV: '',
	// otherCardMask: "#### #### #### ####",
	// CV_CCV_Mask: "###",
	// bank_logo: "URL",
	// brand_logo: "URL",	
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
		//if logged in -> fake avatar
		if ((typeof sessionStorage.logged_in != 'undefined')&&(sessionStorage.logged_in != "")){
		this.logged_in = true;
		}else{
		this.logged_in = false;
		}
		
		this.user_fname = sessionStorage.logged_name;
		this.user_lname = sessionStorage.logged_fam;
		this.user_pname = sessionStorage.logged_otch;
		this.user_money = sessionStorage.logged_money;
		this.user_bonus = sessionStorage.logged_bonus;
	}
  }
</script>

<style>
	.front{
		border-radius: 0.8em
	}
</style>