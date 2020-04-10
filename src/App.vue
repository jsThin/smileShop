<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <header>
      <router-link to="/home"></router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/user/123">User</router-link>
      <router-link :to="{name:'user',params:{id: 321}}">User</router-link>
    </header> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header {
  display: flex;
  justify-content: space-around;
}
</style>
