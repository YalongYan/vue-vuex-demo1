<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 没有这个就不显示home.vue里面的内容了   因为home.vue 要放在这里 -->
    <router-view/>  
  </div>
</template>

<script>
export default {
  name: 'App'
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
