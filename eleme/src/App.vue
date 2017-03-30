<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/header/header.vue'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style>

</style>
