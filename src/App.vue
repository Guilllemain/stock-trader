<template>
  <div class="container">
    <header-component class="header"></header-component>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
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

.slide-enter-active {
  animation: slide-in .2s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out .2s ease-out forwards;
}
@keyframes slide-in {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
