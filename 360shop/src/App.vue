<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss">
body {
  background-color: #f0f0f0;
}
</style>
