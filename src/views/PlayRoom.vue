<template>
  <section class="container">
    <div class="row">
      <div id="userList">
        <div class="card">
          <div class="card-body">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            {{username}}
          </div>
        </div>
      </div>
      <div id="gamePage">
        <div v-if="!started">
          <button @click="startGame" class="btn btn-bg btn-primary">START</button>
          <p>klik to START</p> <br>
        </div>
        <div v-if="started">
          <div id="css">tes</div>
          <h2>{{ score }}</h2>
          <h2>{{ count }}</h2>
          <!-- <audio controls>
            <source src="https://www.computerhope.com/jargon/m/example.mp3" />
          </audio> -->
          <iframe :src="nama" frameborder="0"></iframe>
          <input type="text" v-model="answer" v-if="index >= 1">
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
      started: false,
      nama: '', // damey song quiz
      count: 3,
      index: 0,
      answer: '',
      score: 0,
      username: localStorage.username
    }
  },
  computed: {
    songs () {
      return this.$store.state.songs
    }
  },
  methods: {
    startGame () {
      this.started = true
      this.startTImer()
    },
    startTImer () {
      setTimeout(() => {
        if (this.count === 0) {
          if (this.index === 10) {
            console.log('sudah')
            this.answer = ''
          } else {
            this.nama = this.songs[this.index]
            this.count = 10
            this.index++
            if (this.index >= 1) {
              if (this.answer === this.songs[this.index - 2]) {
                this.score++
              }
              this.answer = ''
              this.startTImer()
            }
          }
        } else {
          this.count = this.count - 1
          this.startTImer()
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
