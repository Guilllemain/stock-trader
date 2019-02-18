<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/" exact>Stock Trader</router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
        	<router-link tag="li" class="nav-item" activeClass="active" to="/portfolio"><a class="nav-link">Portofolio</a></router-link>
        	<router-link tag="li" class="nav-item" activeClass="active" to="/stocks"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
        	<li class="nav-item">
        		<a href="#" class="nav-link" @click.prevent="endDay">End day</a>
        	</li>
            <li class="nav-item dropdown" @mouseover="dropdown = true" @mouseout="dropdown = false">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Save & Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown" :class="{ show: dropdown }">
                    <a class="dropdown-item" href="#" @click.prevent="saveData">Save data</a>
                    <a class="dropdown-item" href="#" @click.prevent="loadData">Load data</a>
                </div>
            </li>
            <strong class="navbar-text ml-2">Funds: {{ $store.getters.funds | currency }}</strong>
        </ul>
      </div>
    </nav>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                dropdown: false
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('data.json', data); // use PUT instead of POST to have for the same data to be erased everytime you save data
            },
            loadData() {
                this.fetchData();
            }
        } 
    }
</script>

<style scoped>

</style>
