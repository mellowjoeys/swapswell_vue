<template>
  <div class="goods-index">
    <h1>All Goods</h1>
    <div v-for="good in goods">
      <h2>{{ good.name }}</h2>
      <router-link v-bind:to="'/goods/' + good.id">
        <img v-bind:src="good.image_url" v-bind:alt="good.name">
      </router-link>
    </div>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
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
  methods: {}
};
</script>
