<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style lang="scss">
// @import '~bootstrap/scss/bootstrap'; //載入bootstrap，scss下有一個bootstrap.scss檔，不需要在增加.scss
@import './assets/all';  //另外一種方式導入bootstrap，另外新增一個all.scss在assets資料夾內，把上方的程式碼丟到內部，在這裡導入
</style>
