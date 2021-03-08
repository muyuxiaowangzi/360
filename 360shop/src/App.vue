<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
<<<<<<< HEAD
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
=======
import Header from './components/Header/index.vue'
export default {
  components: {
    Header,
  },
}
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
</script>
<style lang="scss">
body {
  background-color: #f0f0f0;
}
<<<<<<< HEAD
=======
body .el-dialog {
  width: 360px;
}
body .el-dialog .el-dialog__header {
  text-align: center;
}
body .el-dialog .el-dialog__body .el-form .el-button {
  width: 100%;
  background-color: #36b447;
  border: 0;
}
>>>>>>> 2dc4ce6887a976ff0f508888b74243ef3a4bf5bc
</style>
