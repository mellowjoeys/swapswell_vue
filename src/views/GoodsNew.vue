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
        Category: <input type="text" v-model="newGoodcategory">
      </div>


      <div>
        Status: <input type="text" v-model="newGoodstatus">
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
      newGoodUserId: "",
    
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
        user_id: this.newGoodUserId,

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