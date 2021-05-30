<template>
  <div id="app">
    <Nav />
    <!-- <Dashboard /> -->
    <div class="container">
    <router-view />
    </div>
  </div>
</template>

<script>

// import Dashboard from './components/Dashboard.vue'
import Nav from './components/Nav'
export default {
  name:"App",
  components: {
    // Dashboard,
    Nav
  }
}


</script>

<style>


</style>
