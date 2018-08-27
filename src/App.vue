<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import nameSet from '@/components/nameSet.vue'
export default {
  name: 'app',
  components: {
    nameSet
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
