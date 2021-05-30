<template>
    <div class="show_employee">
        <div class="container rounded">
            <div class="loading" v-if="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span>
            </div>
            <div v-else>
                <div class="row">
                    <div class="col-md-4 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" :src="employee.photo">
                            <span class="font-weight-bold">{{employee.name }}</span>
                            <span class="text-black-50">{{employee.email }}</span>
                            <span> </span>
                        </div>
                    </div>
                    <div class="col-md-8 border-right">
                        <div class="p-3 py-4">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <h4 class="text-right">Profile</h4>
                            </div>
                            <div class="row mt-1">
                                <div class="col-md-12">
                                    <label class="labels mb-1">Phone Number</label>
                                    <input type="text" class="form-control mb-1" readonly="true" :value="employee.phone"></div>
                                <div class="col-md-12">
                                    <label class="labels mb-1">Address</label>
                                    <input type="text" class="form-control mt-1" readonly="true" :value="employee.address"></div>
                                <div class="col-md-12">
                                    <label class="labels mb-1">Designation</label>
                                    <input type="text" class="form-control mb-1" readonly="true" :value="employee.designation"></div>
                                <div class="col-md-12">
                                    <label class="labels mb-1">Department</label>
                                    <input type="text" class="form-control mb-1" readonly="true" :value="employee.department"></div>
                                <div class="col-md-12">
                                    <label class="labels mb-1">Joining Data</label>
                                    <input type="text" class="form-control mb-1" readonly="true" :value="employee.joining_date"></div>
                            </div>
                            <div class="mt-1">
                                <router-link class="btn btn-info profile-button" aria-current="page" :to="{path:'/employee/'+this.id+'/edit'}">Edit Profile</router-link>
                                <router-link class="btn btn-primary profile-button ml" aria-current="page" :to="{path:'/employee'}">Employee list</router-link>
                            </div>
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
    name: 'ShowEmployee',
    data() {
        return {
            employee: {},
            id:null,
            isLoading: true,
        }
    },
    methods: {
        async ShowEmployees(){
            const response = await axios.get('employee/'+this.id)
            if(response){
                this.isLoading = false;
            } 
            if(response.data.status){
                this.employee = response.data.data;
            }
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        this.ShowEmployees()
    }
}
</script>

<style scoped>
.show_employee {
    border-radius: 20px;
    border: 2px solid #ececec;
    margin: 15px;
    box-shadow: 2px 2px 2px #f1f1f1;
    padding: 15px;
    }
.form-control:disabled, .form-control[readonly] {
    background-color: #e9ecef00;
    opacity: 1;
}
.col h4 {
    padding: 10px 0 10px 0;
    color: #6d6d6c;
    font-weight: bold;
    text-align: center;
}
.ml{
    margin-left: 10px;
}

</style>