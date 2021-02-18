<template>
  <section class="container">
    <div class="row">
      <div id="userList">
        <div class="card">
          <div class="card-body">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            test
          </div>
          <div class="card-body">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            test
          </div>
          <div class="card-body">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            test
          </div>
          <div class="card-body">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            test
          </div>
          <div class="card-body">
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Blank&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Happy&eyebrowType=Default&mouthType=Default&skinColor=Brown'/>
            test
          </div>
        </div>
      </div>
      <div id="gamePage">
        <div>
          <button class="btn btn-bg btn-primary">START</button>
          <p>klik to START</p> <br>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
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
</style>
