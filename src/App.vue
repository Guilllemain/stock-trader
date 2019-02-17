<template>
  <div class="container">
    <header-component class="header"></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
  import HeaderComponent from './components/Header'
  export default {
    components: {HeaderComponent},
    created() {
      this.$store.dispatch('initStocks');
    }
  }
</script>

<style>
body {
  padding: 2rem;
}
.header {
  margin-bottom: 3rem;
}
</style>
