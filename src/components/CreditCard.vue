<template>
	<v-container class="justify-center">

		<div class="d-flex flex-column flex-lg-row justify-center" v-scroll-reveal>

			<v-card style="z-index: 100" elevation="0" class="d-flex flex-column ma-0" color="transparent">

				<v-sheet style="position: relative; right: 1.3em" width="25em" color="red">
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
				<v-overlay absolute="false" value="true" >
					<v-sheet class="d-none d-lg-block" style="position: relative; top: 4em; right: 6em" width="25em" height="13em" color="#bbb">
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
					<v-sheet class="d-lg-none" style="position: relative; top: -1.5em; left: 4.0em" width="25em" height="13em" color="#bbb">
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
				</v-overlay>
			</v-card>

		</div>

	</v-container>
</template>

<script>
	let this_link;
	export default {
		name: "CreditCard",
			data: () => ({
			CV: '',
			CCV: '',
			CCV1: '',
			cardNumber: '',
			otherCardMask: "#### #### #### ####",
			CCVMask: "###",
			MonthMask: "##",
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
	}
</script>