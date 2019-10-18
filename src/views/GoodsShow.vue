<template>
  <div class="recipes-show">
    <h1>{{ good.name }}</h1>
    <h5>Description: {{ good.description }}</h5>
    <h4>User Id: {{ good.formatted.user_id }}</h4>


    <img v-bind:src="good.image_url" v-bind:alt="good.name">

    <div>
      <router-link class="btn btn-warning" v-bind:to=" '/goods/' + good.id + '/edit' ">Edit</router-link>
      <button class="btn btn-danger" v-on:click="destroyGood()">Destroy</button>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      good: {
        id: "",
        name: "",
        description: "",
        category: "",
        status: "",
        user_id: "",

        }
    };
  },
  created: function() {
    axios
      .get("/api/goods/" + this.$route.params.id)
      .then(response => {
        this.good = response.data;
      });
  },
  methods: {
    destroyGood: function() {
      axios
        .delete("/api/goods/" + this.good.id)
        .then(response => {
          this.$router.push("/");
        });
    }
  }
};
</script>