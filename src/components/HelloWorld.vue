<template>
  <div class="hello">
    <label for="message"></label>
    <input type="text" name="" id="" v-model="message" />
    <input type="button" value="send" @click="sendMessage()"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      message: ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  },
  methods: {
    sendMessage () {
      this.$socket.emit('newMessage', { message: this.message })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
