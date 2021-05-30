<template>
    <div class="login">
        <div class="row">
            <div class="col">
                <h4>Sign In</h4>
            </div>
        </div>
        <form class="row g-3" @submit.prevent="handleSubmit">
            <div class="col-md-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email" id="inputEmail4">
            </div>
            <div class="col-md-12">
                <label for="inputPassword4" class="form-label">Password</label>
                <input type="password" class="form-control" v-model="password" id="inputPassword4">
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary form-control">
                    <span v-if="is_loading"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> Loading...</span>
                    <span v-else>Sign in</span>
                </button>
            </div>
        </form>
        <div class="row mt-2" v-if="loginerror">
            <div class="col-md-12">
               <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    {{loginerror}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:"Login",
    data() {
        return {
            email : '',
            password : '',
            isLogin:false,
            loginerror:'',
            is_loading:false
        }
    },
    methods: {
        async handleSubmit() {
            this.is_loading = true
            const response = await axios.post('login',{
                email: this.email,
                password: this.password
            });
            if(response.data.status){
                this.is_loading = false
                localStorage.setItem('access_token',response.data.data.access_token);
                 this.isLogin = true
                this.$router.push('employee');
                this.$router.go()
            }else{
                this.is_loading = false
                this.loginerror = response.data.status_message
            }
        }
    }
}
</script>
<style>
    .login{
    width: 500px;
    margin: auto;
    padding: 20px;
    border: 2px solid #b9b7bb;
    border-radius: 20px;
    background: #fff;
    box-shadow: 2px 2px 2px #f1f1f1;
    margin-top: 35px;
    }
    .col h4{
    padding: 5px 0 5px 0;
    color: #6d6d6c;
    font-weight: bold;
    text-align: center;
    }
    .form-label{font-weight: bold;}
</style>