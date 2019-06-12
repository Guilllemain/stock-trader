<template>
  <div>
    <stock-component v-for="stock in stocks" :key="stock.id" :stock="stock"></stock-component>
  </div>
</template>

<script>
	import StockComponent from './Stock'

	export default {
			components: {StockComponent},
	    computed: {
    	  	stocks() {
    	  		return this.$store.getters.stockPortfolio;
    	  	}
	    }
	}
</script>

<style scoped>
div {
	display: flex;
	flex-wrap: wrap;
}
</style>
