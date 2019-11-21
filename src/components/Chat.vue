<template>
  <el-container class="chat">
    <el-main>
      <el-input
        class="chatlog"
        v-model="chatlog"
        ref="chatlog"
        type="textarea"
        resize="none"
        :autosize="{ minRows: 1 }"
        readonly="true"
      />
    </el-main>
    <el-footer>
      <el-input
        class="input"
        v-model="input"
        ref="input"
        type="textarea"
        resize="none"
        placeholder="Send your message here :)"
        :autosize="{ minRows: 1, maxRows: 4}"
        @keydown.native.enter.exact.prevent
        @keyup.native.enter.exact="sendMessage"
        @keydown.enter.shift.exact="newline"
      />
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Chat extends Vue {
  private chatlog: string = ''
  private input: string = ''

  // Autofocus textarea when chat is visible
  mounted () {
    (this.$refs.input as HTMLInputElement).focus()
  }

  /**
   * Send message
   */
  sendMessage () {
    // Don't do anything if there's no text
    if (!this.input) return

    // Send message
    this.chatlog += '\nLoarca: ' + this.input

    // When inserting new messages to chatlog,
    // if scroll was already at the bottom then scroll to bottom

    // Clear text
    this.input = ''
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat {
  height: 100%;
}
.chatlog {
  max-height: 100%;
  /* Place at the bottom */
  position: absolute;
  bottom: 0;
}
/* Remove heights and padding */
.el-main {
  /* Make it relative so that chatlog can be placed at the bottom */
  position: relative;
  padding: inherit;
}
.el-footer {
  height: unset !important;
  padding: inherit;
}
</style>

<!-- We use unscoped style for textarea -->
<style>
.chat textarea {
  /* Make textarea same font as text input */
  font-family: inherit;
}
.chatlog textarea,
.chatlog textarea:hover,
.chatlog textarea:focus {
  /* Remove border for chatlog */
  border: none;
  cursor: default;
}
.input textarea {
  /* Make border for text input always visible */
  border-color: #eee;
}
.input textarea::placeholder {
  /* Make placeholder color gray */
  color: rgba(238, 238, 238, 0.5);
}
</style>
