<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer></Footer>
    <RightLan></RightLan>
  </div>
</template>
<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>
<style lang="scss">
body {
  background-color: #f0f0f0;
}
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
</style>
