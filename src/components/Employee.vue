<template>
    <div class="employee">
        <div class="row">
            <div class="col-md-2 text-center">
                <div class="row g-3 mt-2">
                    <div class="col">
                        <p class="text-center mt-2">Employee List</p>
                    </div>
                </div>
            </div>
            <div class="col-md-7 text-center">
                <form class="row g-3 mt-2" id="filterform">
                    <div class="col-md-4">
                        <input type="text" class="form-control" v-model="department" id="department" placeholder="Department">
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" v-model="designation" id="designation" placeholder="Designation">
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="btn btn-primary mb-3"  @click.prevent="filterEmployee"><i class="fas fa-filter"></i> Filter</button>
                    </div>
                </form>
            </div>
            <div class="col-md-3">
                <div class="row g-3 mt-2">
                    <div class="col">
                        <router-link class="btn btn-info" aria-current="page" to="/employee/create"> <i class="fas fa-user-plus"></i> New Employee</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="loading" v-if="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>
        </div>
        <div v-else>
            <div class="list_data">
                <div v-for="(employee,index) in employees" :key="index" class="row">
                        <div class="col-md-3">
                            <div class="title">
                                <div class="thumb">
                                    <img class="img-fluid" :src="employee.photo" alt="">
                                </div>
                                <div class="employee-list-details">
                                    <div class="employee-list-info">
                                        <div class="employee-list-title">
                                            <h5 class="mb-0">{{employee.name }}</h5>
                                        </div>
                                        <div class="employee-list-option">
                                            <p>{{employee.designation }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 details">
                            <span class="title txt"><i class="fas fa-envelope-open-text"></i> {{employee.email }}</span>
                        </div>
                        <div class="col-md-2 details">
                            <span class="title txt"><i class="fas fa-phone-volume"></i>  {{employee.phone }}</span>
                        </div>
                        <div class="col-md-3 details">
                            <span class="title txt"><i class="far fa-address-card"></i> {{employee.address }}</span>
                        </div>
                        <div class="col-md-2 action">
                            <div class="title txt">
                            <ul class="list-unstyled mb-0 d-flex justify-content-end">
                                <li>
                                    <router-link class="text-info" aria-current="page" :to="{path:'/employee/'+ employee.id}"><i class="far fa-eye"></i></router-link>
                                </li>
                                <li>
                                    <router-link class="text-info" aria-current="page" :to="{path:'/employee/'+ employee.id +'/edit'}"><i class="fas fa-pencil-alt"></i></router-link>
                                </li>
                                <li>
                                    <button class="text-danger" @click="deleteEmployee(employee.id)"><i class="far fa-trash-alt"></i></button>
                                </li>
                            </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Employee',
    data() {
        return {
            isLoading: true,
            employees: [],
            department:'',
            designation:'',
        }
    },
    methods: {
        async fetchEmployee() {
            const response = await axios.get('employee');
            if(response){
                this.isLoading = false;
                if(response.data.status){
                    this.employees = response.data.data;
                }
            }
        },
        async deleteEmployee(id) {
            let index = this.employees.findIndex(employee => employee.id === id)
            await axios.delete('employee/' + id)
            this.employees.splice(index, 1)
        },
        async filterEmployee() {
            const response = await axios.get('employee?designation='+this.designation + '&department='+this.department);
            if(response){
                console.log(response);
                this.isLoading = false;
                if(response.data.status){
                    this.employees = response.data.data;
                }
            }
        }   
    },

    // employee card will show
    components: {
    },
    async mounted() {
        let token = await localStorage.getItem('access_token');
        if(token){
         this.isLogin = true
            this.fetchEmployee()
        }else{
            this.$router.push('/signin')
        }
        
  },
}
</script>



<style>

.loading{
    margin: auto;
    padding: 10px;
    text-align: center;
}
.txt button{
    border: none;
    background: transparent;

}
.nav-link{
    color: #fff;
    text-decoration: none;
}
.nav-link:focus, .nav-link:hover {
    color: #fff;
}

.wrapper {

    /* background: #fff; */
    border-radius: 20px;
}
.button{
    padding: 5px;
    border: 1px solid #77b7c1;
    margin: 5px;
    border-radius: 10px;
    background: #12cbe8;
    color: #fff;
    font-weight: bold;
    text-align: center;
}
.list_data .row{
    border: 1px solid #f3f3f3;
    border-radius: 20px;
    margin-bottom: 5px;
    box-shadow: 2px 2px 2px #f1f1f1;
    margin-left: 10px;
    margin-right: 10px;
}
.list_data{
    padding-bottom: 20px;
}
.employee{
    background: #fff;
    border-radius: 20px;
    border: 2px solid #ececec;
    margin: 10px;
    box-shadow: 2px 2px 2px #f1f1f1;
}

i{
    padding-right: 3px;
}
.action i{
    margin-right: 5px;
    padding: 5px;
    border: 2px solid #28bcf5;
    border-radius: 50%;
}
 .thumb {
    margin-right: 15px;
}
.thumb img {
    width: 70px;
    height: 70px;
    -o-object-fit: cover;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
}

 .title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.employee-list-info{
    padding-top: 15px;
}
.employee-list-title h5{
    font-size: 20px;
    font-weight: bold;
}
.employee-list-option p{
    font-size: 16px;
}
.txt{
    padding-top: 27px;
}

</style>
