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
        		<a href="" class="nav-link">End day</a>
        	</li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Save & Load
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Save data</a>
                    <a class="dropdown-item" href="#">Load data</a>
                </div>
            </li>
            <strong class="navbar-text ml-2">Funds: {{ $store.getters.funds | currency }}</strong>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
