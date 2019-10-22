<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <swipe ref="mySwipe" style='max-width:500px;margin:0 auto'>
      
      <div v-for="good in goods">
        <swipe-item>
          <!-- {{ goods }} -->
          <b>1</b>
          <!-- <router-link v-bind:to="'/goods/' + good.id">
            <img v-bind:src="good.image_url" v-bind:alt="good.name">
          </router-link> -->
        </swipe-item>
      </div>
    </swipe>


        <!-- <div v-for="product in products">
              <h2>{{ product.name }}</h2>
              <router-link v-bind:to="'/products/' + product.id">
                <img v-bind:src="product.image_url" v-bind:alt="product.name">
              </router-link> -->
    <button @click="next" class="btn btn-default">Previous</button>
    <button @click="prev" class="btn btn-default">Next</button>
  </div>
</template>

<style>
/*.swipe {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.swipe-wrap {
  overflow: hidden;
  position: relative;
}
.swipe-wrap > div {
  float: left;
  width: 100%;
  position: relative;
}*/
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      swipeOptions: {
        startSlide: 0,
        speed: 300,
        auto: 4000,
        continuous: true,
        disableScroll: false,
        stopPropagation: false
      },
      goods: []
    };

  },
  created: function() {
    axios
      .get("/api/goods")
      .then(response => {
        this.goods = response.data;
      });
  },
  methods: {
    prev() {
      this.$refs.mySwipe.prev()
    },
    next() {
      this.$refs.mySwipe.next()
    }
  }
};
</script>