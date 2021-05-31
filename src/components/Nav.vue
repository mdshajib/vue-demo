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
              <router-link class="nav-link" to="/"><i class="fas fa-home"></i> Home</router-link>
            </li>

          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                 <router-link class="nav-link logout" aria-current="page" to="/signin"><i class="fas fa-sign-in-alt"></i> Sign In</router-link>
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
              <router-link class="nav-link" to="/"><i class="fas fa-home"></i> Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employee"><i class="fas fa-users"></i> Employee List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employee/create"><i class="fas fa-user-plus"></i> Create Employee</router-link>
            </li>
            <li class="nav-item">
               <router-link class="nav-link" to="/employee/search"><i class="fab fa-searchengin"></i> Search</router-link>
            </li>

          </ul>
          <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <p class="nav-link logout" @click="handleSignout"><i class="fas fa-sign-out-alt"></i> Sign out</p>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav>
</div>
</template>
<script>
import axios from 'axios'
export default {
   name:"Nav",
   data() {
     return {
       isLogin:false
      }
   },
   methods: {
    async handleSignout() {
        const response = await axios.post('logout');
        if(response && response.data.status){
          let token = localStorage.getItem('access_token');
          if(token){
            this.isLogin = false
            localStorage.removeItem('access_token');
            this.$router.push('signin');
          }
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

<style>
ul li{
  border-right: 1px solid #fdfdfd8c;
  margin: 3px;
  padding: 2px;
}
ul li:last-child{
  border-right: 0;
  }
  .logout{
    cursor: pointer;
    font-weight:bold;
  }
</style>
