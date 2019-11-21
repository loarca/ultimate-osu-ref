<template>
  <div class="dm">
    <Chat/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Chat from '@/components/Chat.vue'

@Component({
  components: {
    Chat
  }
})
export default class DM extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style scoped>
.dm {
  height: 100%;
}
</style>
