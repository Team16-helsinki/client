<template>
  <section class="container">
    <div class="row">
      <div id="userList">
        <div class="card">
          <div class="card-body" v-for="(user,i) in users" :key="i">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            {{user}}
          </div>
        </div>
      </div>
      <div id="gamePage">
        <div v-if="!started">
          <button @click="startGame" class="btn btn-bg btn-primary"  v-if="username === playerOne">START</button>
          <p>game will start soon</p> <br>
        </div>
        <div v-if="started">
          <h1>{{ nama }}</h1>
          <h1>{{ count }}</h1>
          <h1>{{ score }} ===</h1>
          <h1>{{ title }}</h1>
          <iframe :src="nama" frameborder="0"></iframe>
          <div v-for="(message,i) in messages" :key="i">
            <span>{{message.user}}</span><br>
            <span>{{message.text}}</span>
          </div>
          <input type="text" v-model="answer" v-if="index >= 1"> 
          <input type="button" value="send" @click="sendMessages">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PlayRoom',
  data () {
    return {
      nama: '', // damey song quiz
      count: 3,
      index: 0,
      answer: '',
      score: 0,
      title: ''
    }
  },
  computed: {
    messages(){
      return this.$store.state.messages
    },
    songs () {
      return this.$store.state.songs
    },
    users () {
      return this.$store.state.users
    },
    playerOne(){
      if (this.$store.state.users.length > 0) {
        return this.$store.state.users[0].name
      } else {
        return false
      }
    },
    username(){
      return localStorage.username
    },
    started () {
      return this.$store.state.started
    }
  },
  sockets: {
    startTimer () {
      this.timer()
      console.log('masiuk start ==============')
    },
    winner (payload) {
      if (payload.name === this.username) {
        
      }
    }
  },
  methods: {
    sendMessages(){
      const newMessage = {
        text : this.answer,
        user: localStorage.username,
        title: this.title
      }
      this.$socket.emit('newMessage', newMessage)
    },
    startGame () {
      this.$socket.emit('startGame')
      // this.started = true
      // this.startTImer()
      // this.$store.dispatch('fetchSongData')
    },
    timer () {
      setTimeout(() => {
        if (this.count === 0) {
          if (this.index === 10) {
            console.log('sudah')
            this.$socket.emit('score')
            this.answer = ''
          } else {
            // console.log(this.$store.state.songs[0].title,'<<<<<song in play (title)')
          
            this.nama = this.$store.state.songs[this.index].url
            this.title = this.$store.state.songs[this.index].title
            this.count = 10
            this.index++
            console.log(this.index, '==========')
            if (this.index >= 1) {
              console.log(this.index)
              // if (this.answer === this.songs[this.index - 2]) {
              if (this.answer.toLowerCase() === this.title.toLowerCase()) { ///undefinde index
                this.score++
              }
              this.answer = ''
              this.timer()
            }
          }
        } else {
          this.count = this.count - 1
          this.timer()
        }
      }, 1000
      )
    }
  }
}
</script>

<style scoped>
#css {
  border: solid;
  width: 50px;
  height: 30px;
  /* position: absolute; */
  z-index: 99;
  background-color: white;
  color: white;
}
section{
  height: 100vh;
  align-items: center;
}
.row{
  background-color: #ffb902;
  border-radius: 25px;
  margin: auto;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
}
#userList{
  width: 50vh;
}
#userList .card{
  border-radius: 25px;
  padding-left: 20px;
  align-items: flex-start;
  background: rgb(204, 204, 204);
  background: rgba(204, 204, 204, 0.5);
}
#gamePage{
  width: 123.8vh;
  align-items: center;
  justify-content: center;
}
#gamePage div{
  margin-top: 34%;
  margin-left: 10%;
  align-items: center;
}
div p{
  margin-bottom: 0;
}
#gamePage button{
  width: 50vh;
  height: 10vh;
  font-size: 30px;
}
.card-body{
  width: 43vh;
  border-bottom: solid;
}
.card-body img {
  width: 70px;
  margin-bottom: 9.4px;
}
iframe{
  color: aliceblue;
  height: 50px;
  width: 300px;
  margin-top: -110px;
  margin-left:-180px
}
</style>
