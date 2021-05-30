<template>
<div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="!isLogin">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Employee CRUD</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>

          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                 <router-link class="nav-link logout" aria-current="page" to="/signin">Sign In</router-link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light" v-else>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Employee CRUD</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employee">Employee List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employee/create">Create Employee</router-link>
            </li>
            <li class="nav-item">
               <router-link class="nav-link" to="/employee/search">Search</router-link>
            </li>

          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link logout" href="#" @click="handleSignout">Sign out</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>
<script>
export default {
   name:"Nav",
   data() {
     return {
       isLogin:false
      }
   },
   methods: {
     handleSignout() {
       console.log('Signout')
       let token = localStorage.getItem('access_token');
       if(token){
        this.isLogin = false
        localStorage.removeItem('access_token');
        this.$router.push('signin');
      }
     }
   },
   created(){
     let token = localStorage.getItem('access_token');
     if(token){
       this.isLogin = true
     }
   },
   mounted(){
     let token = localStorage.getItem('access_token');
     if(token){
       this.isLogin = true
     }
   }
}
</script>
