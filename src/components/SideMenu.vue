<template>
  <el-menu :router="true" :default-active="$route.path">
    <el-menu-item-group>
      <template slot="title"><span>DMs</span></template>
      <el-menu-item index="/dm/1">BanchoBot</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <template slot="title"><span>Lobbies</span></template>
      <el-menu-item index="/lobby/79283789">mp_79283789</el-menu-item>
      <el-menu-item index="/lobby/79245359">mp_79245359</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <template slot="title"><span>osu!ref</span></template>
      <el-menu-item index="/settings">Settings</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu-item-group>
  </el-menu>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SideMenu extends Vue {
  // @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu {
  min-height: 100%;
}
.el-menu-item.is-active {
  outline: none;
  background-color: #1f3647;
}
span {
  margin-left: -10px;
}
</style>
