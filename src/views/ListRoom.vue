<template>
  <section class="container">
    <div class="row" id="header">
      <div>
        <h2>Pilih Room</h2>
        <p>Game dimulai ketika salah satu player mengklik 'start'</p>
      </div>
      <h4>Halo {{username}}</h4>
    </div>
    <div v-for="room in roomData.length" :key="room">
      <Room :roomProp="roomData[room]" :goToProp="goTo()"></Room>
    </div>
  </section>
</template>

<script>
import Room from "../components/Room"
export default {
  components: {
    Room
  },
  name: 'ListRoom',
  data () {
    return {
      username: '',
      roomData: [
        {
          name: 'Pop'
        }, {
          name: 'Rock'
        }, {
          name: 'Classic'
        }, {
          name: 'Jazz'
        }
      ]
    }
  },
  methods: {
    getUser () {
      this.username = localStorage.username
    },
    goTo () {
      this.$router.push({ name: 'PLayRoom' })
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style scoped>
section{
  height: 100vh;
  margin-top: auto;
  padding-top: 5vh;
}
#header{
  justify-content: space-between;
  align-items: center;
}
#header div{
  text-align: left;
  justify-content: flex-start;
}
#cardList{
  display: flex;
  justify-content: space-between;
}
.card{
  margin-bottom: 5vh;
  width: 40vh;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.card img{
  height: 50vh;
  width: 40vh;
}
h5{
  text-align: center;
}
</style>
