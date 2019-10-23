<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    
    <!-- <div v-for="photo in photos"> 
      {{ photo.image_url }}
    </div> -->
    <div>


      <img v-bind:src="currentPhoto.image_url">

    </div>

    <div>
      description: {{ currentPhoto.good.description }}
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
     
      photos: [],
      photoNumber: 0,
      currentPhoto: 0,
      message: ""
    };

  },
  created: function() {
    axios
      .get("/api/photos")
      .then(response => {
        this.photos = response.data;
        this.currentPhoto = this.photos[this.photoNumber];

      });
      // .then(
      //   .get("/api/goods")
      //   .then(response => {
      //     this.goods = response.data;
      //     this.goods.forEach(function(good) {
      //       if (good.id === this.currentPhoto.good_id) {
      //         this.currentGood = good;
      //       }
      //     });
      //   });
      // )
  },
  methods: {
    want() {
     if (this.photoNumber < this.photos.length) {
      this.photoNumber ++;
      this.currentPhoto = this.photos[this.photoNumber];
     }
     else {
      message = "No more goods available to view";
     }
    },
    noThanks() {
      if (this.photoNumber < this.photos.length) {
       this.photoNumber ++;
       this.currentPhoto = this.photos[this.photoNumber];
      }
      else {
       message = "No more goods available to view";
      }
    }
  }
};
</script>

