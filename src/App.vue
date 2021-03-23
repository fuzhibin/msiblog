<template>
  <div class="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>
<script>
import Home from 'views/home/Home'
import NavBar from 'components/content/navbar/NavBar'
export default {
  name:'App',
  components:{
    Home,
    NavBar
  }

}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css");
@import "assets/iconfont/css/font-awesome.min.css";
@import "assets/css/init.css";
@import "assets/css/common.css";

</style>
