

<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <h1>
      <img src="/images/logo.png" max-width="700%" max-height="700%" alt="Fruit" style="width:200px;height:200px">
    </h1>




    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src="https://images-na.ssl-images-amazon.com/images/I/51tBuAmAkdL._SY300_QL70_.jpg" class="d-block mx-auto" alt="Toy"  style="width:400px;height:360px" />
        </div>
        <div class="carousel-item">
          <img src="https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2017/07/apples-700x350.png" class="d-block mx-auto" max-width="700%" max-height="700%" alt="Fruit" style="width:640px;height:360px">
        </div>
        <div class="carousel-item">
          <img src="https://images-na.ssl-images-amazon.com/images/I/613rXgDEP6L._SX425_.jpg" class="d-block mx-auto" max-width="700%" max-height="700%" alt="Cup" style="width:400px;height:360px">
        </div>
        <div class="carousel-item">
          <img src="https://cnet3.cbsistatic.com/img/0Q7vOMtjicHRZ5_BRhjvOG5dVBY=/868x488/2013/10/22/f05aeb01-6797-11e3-846b-14feb5ca9861/Apple_Macbook_Pro_15_35781448-4070.jpg" class="d-block mx-auto" max-width="700%" max-height="700%" alt="Laptop" style="width:640px;height:360px">
        </div>
        <div class="carousel-item">
          <img src="https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2017/07/apples-700x350.png" class="d-block mx-auto" max-width="700%" max-height="700%" alt="Fruit" style="width:640px;height:360px">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>




  </div>
</template>

<style>
</style>







<script>
export default {
  data: function() {
    return {
      message: "Welcome to Swapswell" 
    };
  },
  created: function() {},
  methods: {}
};
</script>