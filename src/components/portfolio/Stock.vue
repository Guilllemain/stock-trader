<template>
  	<div class="col-sm-4 mb-4">
		<div class="card card-succes">
			<div class="card-header bg-info text-white">{{ stock.name }} <small>(price: {{stock.price}} | quantity: {{ stock.quantity }})</small></div>
			<div class="card-body">
				<div class="d-flex justify-content-between">
					<div class="col-xs-3">
						
					<input class="form-control"
						   placeholder="Quantity"
						   type="number"
						   v-model.number="quantity"
                           :class="{ danger: insufficientQuantity }">
					</div>
					<button class="btn btn-info" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">{{ insufficientQuantity ? 'Not enough stock' : 'Sell' }}</button>
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
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity;
        }
    },
	methods: {
		sellStock() {
			const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
			}
			this.$store.dispatch('sellStock', order);
			this.quantity = 0;
		}
	}
  
}
</script>
