<template>
	<v-card>
		<v-card class="d-flex flex-row" height="6vh" elevation="0" outlined>
			<div class="pt-5 pl-9 d-flex flex-column">
					Дата
			</div>
			<div class="pt-5 pl-12 d-flex flex-column">
				Время
			</div>
			<div class="pt-5 pl-5 d-flex flex-column">
				Оплачено
			</div>
			<div class="pt-5 pl-5 d-flex flex-column">
				Начисленно
			</div>
			<div class="pt-5 pl-7 d-flex flex-column">
				Скидка
			</div>
			<div class="pt-5 pl-12 d-flex flex-column">
				Организация
			</div>
			<div class="pt-5 pl-12 d-flex flex-column">
				Сайт
			</div>
			<div class="pt-5 pl-12 d-flex flex-column">
				Сайт
			</div>
		</v-card>
		<v-card  v-for="n in 24" :key="n" class="d-flex flex-row" height="6vh" elevation="0" outlined>
				<div class="pt-5 pl-5 d-flex flex-column">
					11.05.2021
				</div>
				<div class="pt-5 pl-6 d-flex flex-column">
					13:55
				</div>
				<div class="pt-5 pl-10 d-flex flex-column">
					500Р
				</div>
				<div class="pt-5 pl-16 d-flex flex-column">
					500Б
				</div>
				<div class="pt-5 pl-16 d-flex flex-column">
					10%
				</div>
		</v-card>
	</v-card>
</template>

<script>
		export default {
		name: 'HistoryPage',
	}
</script>