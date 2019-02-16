<template>
  	<div class="col-sm-4 mb-4">
		<div class="card card-succes">
			<div class="card-header bg-success text-white">{{ stock.name }} <small>(price : {{stock.price}})</small></div>
			<div class="card-body">
				<div class="d-flex justify-content-between">
					<div class="col-xs-3">
						
					<input class="form-control"
						   placeholder="Quantity"
						   type="number"
						   v-model.number="quantity">
					</div>
					<button class="btn btn-success" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</button>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
export default {
	props: {
		stock: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			quantity: 0
		}
	},
	methods: {
		buyStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			console.log(order);
			this.quantity = 0;
		}
	}
  
}
</script>

<style scoped>

</style>
