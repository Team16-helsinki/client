<template>
  <section class="container">
    <div class="row" id="header">
      <div>
        <h2>Pilih Room</h2>
        <p>Game dimulai ketika salah satu player mengklik 'start'</p>
      </div>
      <h4>Halo {{username}}</h4>
    </div>
    <div id="cardList" class="row">
      <div class="card">
        <img class="card-img-top" src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Room 1</h5>
          <p class="card-text">Room Name/ genre/ years</p>
          <div class="button">
            <a @click="goTo" class="btn btn-primary">JOIN</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListRoom',
  data () {
    return {
      username: ''
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
