<template>
  <el-container id="app">
    <el-aside>
      <SideMenu/>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'app',
  components: {
    SideMenu
  }
}
</script>

<style>
html, body {
  height: 100vh;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.el-aside {
  width: 11em !important;
}
</style>
