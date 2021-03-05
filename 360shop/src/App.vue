<template>
  <div id="app">
    <div class="heard">头部</div>
    <div class="moddle">
      <MyInfo></MyInfo>
    </div>
    <!-- <router-view></router-view> -->
    <div class="footer">底部</div>
  </div>
</template>
<script>
import MyInfo from "./views/myInfo/MyIfo";
export default {
  name: "App",
  components: { MyInfo }
};
</script>
<style scoped>
#app {
  background-color: #f2f2f2;
  margin: 0;
  padding: 0;
}
.heard {
  margin: 0 auto;
  width: 1240px;
  height: 102px;
  color: #666;
  border: 1px solid #666;
}
.moddle {
  width: 1200px;
  /* border: 1px solid black; */
  margin: 0 auto;
}
.footer {
  width: 1240px;
  border: 1px solid #666;
  /* height: 306px; */
  padding: 60px 0;
  margin: 0 auto;
}
</style>
