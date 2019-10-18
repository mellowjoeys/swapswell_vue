<template>
  <div class="goods-edit">
    <h1>Edit Good</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" v-model="good.name">
      </div>

      <div>
        Description: <input type="text" v-model="good.description">
      </div>


      <div>
        Category: <input type="text" v-model="good.category">
      </div>

      <div>
        Status: <input type="text" v-model="good.status">
      </div>


      <div>
        User Id: <input type="text" v-model="good.user_id">
      </div>


      <input type="submit" value="Update">
    </form>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
export default {
  data: function() {
    return {
      errors: [],
      good: {}
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
    submit: function() {
      var clientParams = this.good;
      axios
        .patch("/api/goods/" + this.$route.params.id, clientParams)
        .then(response => {
          this.$router.push("/goods/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>