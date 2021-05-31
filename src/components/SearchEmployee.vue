<template>
    <div class="search">
        <div class="row">
            <div class="col-md-3 text-center">
                <div class="row g-3 mt-2">
                    <div class="col">
                        <p class="text-center mt-2">Search Employee</p>
                    </div>
                </div>
            </div>
            <div class="col-md-9 text-center">
                <form class="row g-3 mt-2" id="filterform">
                    <div class="col-md-5">
                        <input type="text" class="form-control" v-model="keyword" placeholder="Name / Email / Phone">
                    </div>
                    <div class="col-md-5">
                        <button type="submit" class="btn btn-primary mb-3 form-control"  @click.prevent="searchEmployee">
                            <span v-if="is_loading"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> Searching...</span>
                            <span v-else><i class="fas fa-search"></i> Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>


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
                        <div class="col-md-1 action">
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
</template>

<script>
import axios from 'axios'
export default {
    name: 'Search',
    data() {
        return {
            employees: [],
            keyword:'',
            is_loading:false
        }
    },
    methods: {
        async searchEmployee() {
            this.is_loading= true
            const response = await axios.get('employee/search?keyword='+this.keyword);
            if(response){
                this.is_loading= false
                console.log(response);
                if(response.data.status){
                    this.employees = response.data.data;
                }
                else{
                    this.$toastr.warning(response.data.status_message, 'warning');
                }
            }
        }
    }
}
</script>
<style>
.search{
    border-radius: 20px;
    border: 2px solid #ececec;
    margin: 10px;
    box-shadow: 2px 2px 2px #f1f1f1;
}
</style>