<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
   
      <router-link class="navbar-brand" to="/">
        <img src="/images/logo3.png" max-width="200%" max-height="200%" alt="Logo" style="width:70px;height:70px">
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
         
      </button>


      <button type="button" class="btn btn-dark"><a href="/goods/new" style="color:white">Add Good</a></button>
      <button type="button" class="btn btn-danger"><a href="/dashboard" style="color:white">Dashboard</a></button>
      <button type="button" class="btn btn-secondary">View Goods</button>
      <button type="button" class="btn btn-success">Browsing History</button>
      <button type="button" class="btn btn-danger">Cancel Order</button>
      <button type="button" class="btn btn-info">Make Your Payment</button>


      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
      
            <li class="nav-item dropdown">
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              </div>
            </li>

          <div class="btn-group">
            <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Get Started
            </button>
            <div class="dropdown-menu">
              <router-link class="dropdown-item" to="/signup">Sign Up</router-link>
              <router-link class="dropdown-item" to="/login">Log In</router-link>
              <router-link class="dropdown-item" to="/Logout">Log Out</router-link>
            </div>
          </div>
      

        </ul>





        

        <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <router-view/>

  </div> <!-- end of ID app -->
</template>

<style>
body {
  font-family: "Book Antiqua", Palatino, "Palatino Linotype", "Palatino LT STD", Georgia, serif;
  background-image: url('/images/email-pattern.png');
}


</style> 