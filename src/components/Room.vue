<template>
  <div id="cardList" class="row">
      <div class="card">
        <img class="card-img-top" src="https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ roomProp.name }}</h5>
          <p class="card-text"></p>
          <div class="button">
            <a @click="goToProp" class="btn btn-primary">JOIN</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['roomProp', 'goToProp']
}
</script>

<style>
#cardList{
  display: flex;
  justify-content: space-between;
  max-height: 100%;
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
</style>