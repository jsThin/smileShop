<template>
  <div class="home">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'jsthin'
    }
  }
}
</script>

<style scoped>
.home {
  height: 1500px;
  margin: 10px auto;
}

</style>
