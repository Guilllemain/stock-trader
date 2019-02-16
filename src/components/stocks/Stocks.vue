<template>
  <div class="row">
    <stock-component v-for="stock in stocks" :key="stock.id" :stock="stock"></stock-component>
  </div>
</template>

<script>
import StockComponent from './Stock'
export default {
	components: {StockComponent},
	data() {
		return {
			stocks: [
				{id: 1, name: 'BMW', price: 110},
				{id: 2, name: 'Google', price: 200},
				{id: 3, name: 'Apple', price: 250},
				{id: 4, name: 'Twitter', price: 80},
			]
		}
	}
}
</script>

<style scoped>

</style>
