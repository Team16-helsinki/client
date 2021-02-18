<template>
  <section id="user">
    <div id="div">
      <img class="img" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg">
      <div id="items">
        <h3 class="h1">TEBAK LAGU</h3>
        <h6 class="h4">Selamat datang di <b>TEBAK LAGU</b> disini kamu ditantang untuk menebak beberapa lagu yang sudah disiapkan, bukan hanya itu saja loh disini kamu dapat bertanding melawan teman atau bahkan user baru loh</h6>
      </div>
    </div>
    <div id="form">
      <input id="inputUser" type="text" style="width: 60vh; height:7vh" v-model="username" placeholder="Input nama kamu disini"> <br>
      <button @click="getUsername" class="btn btn-md btn-primary">START</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserStart',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    getUsername () {
      localStorage.setItem('username', this.username)
      this.$router.push({ name: 'ListRoom' })
    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
#user {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  background-color: #ffb902;
}
.img{
  width: 50vh;
}
.h1{
  justify-items: center;
  text-align: left;
}
.h4{
  text-align: left;
}
#items{
  align-items: center;
  justify-items: center;
  width: 60vh;
}
#div{
  padding-top: 15vh;
  display: flex;
  justify-content: center;
  width: 100%;
}
#form{
  margin-top: 3vh;
  margin: auto;
  padding: 3vh;
  width: 80vh;
  border-radius: 25px;
}
#inputUser{
  border-radius: 25px;
  border-color: rgb(199, 196, 196);
  margin-bottom: 2vh;
  border-style: none;
}
</style>
