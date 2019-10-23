<template>
  <div class="goods-new">
    <h1>New Good</h1>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Name: <input type="text" v-model="newGoodName">
      </div>

      <div>
        Description: <input type="text" v-model="newGoodDescription">
      </div>

      <div>
        Category: <input type="text" v-model="newGoodCategory">
      </div>


      <div>
        Status: <input type="text" v-model="newGoodStatus">
      </div>

      <div>
        Image URL: <input type="text" v-model="newGoodImageUrl">
      </div>

      <div>
        User Id: <input type="text" v-model="newGoodUserId">
      </div>

 

      <input type="submit" value="Create">
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
      newGoodName: "",
      newGoodDescription: "",
      newGoodCategory: "",
      newGoodStatus: "",
      newGoodImageUrl: "",
      newGoodUserId: ""
    
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var clientParams = {
        name: this.newGoodName,
        description: this.newGoodDescription,
        category: this.newGoodCategory,
        status: this.newGoodStatus,
        image_url: this.newGoodImageUrl,
        user_id: this.newGoodUserId

      };
      axios
        .post("/api/goods", clientParams)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>


Photo.create(image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47TQVeNG7GPwgY0A1IKPWOAC9UdO6oJ2llIX_ygueVfDcyPGWKA&s", good_id: 1)