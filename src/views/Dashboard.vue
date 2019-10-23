<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    
    <div v-for="photo in photos"> 
      {{ photo.image_url }}
    </div>

    <button v-on:click="want()" class="btn btn-default">Want!</button>
    <button v-on:click="noThanks()" class="btn btn-default">No Thanks</button>
  </div>
</template>

<style>

</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
     
      photos: []
    };

  },
  created: function() {
    axios
      .get("/api/photos/others")
      .then(response => {
        this.photos = response.data;
      });
  },
  methods: {
    want() {
     
    },
    noThanks() {
     
    }
  }
};
</script>

