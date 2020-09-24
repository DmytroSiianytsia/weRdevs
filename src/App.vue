<template>
  <div class="app" id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0;

  font-family: 'Rubik', sans-serif;
  color: #3d3d3d;
}

h1, h2 { margin: 0;}

.container {
  margin: 0 auto;
  width: 90%;
  max-width: 1820px;
}

@media (max-width: 576px) {
  .container {
    width: 97%;
  }
}
</style>
