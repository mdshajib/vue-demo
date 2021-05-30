<template>
    <div class="edit">
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
                                        <label class="labels mb-1">Name</label>
                                        <input type="text" class="form-control mb-1" v-model="employee.name">
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels mb-1">Phone Number</label>
                                        <input type="text" class="form-control mb-1" v-model="employee.phone">
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels mb-1">Address</label>
                                        <input type="text" class="form-control mt-1" v-model="employee.address">
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels mb-1">Designation</label>
                                        <input type="text" class="form-control mb-1" v-model="employee.designation">
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels mb-1">Department</label>
                                        <input type="text" class="form-control mb-1" v-model="employee.department">
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels mb-1">Joining Data</label>
                                        <input type="text" class="form-control mb-1" v-model="employee.joining_date">
                                    </div>
                                </div>
                                <div class="mt-1">
                                    <button class="btn btn-info" @click="handleUpdate">
                                        <span v-if="is_loading"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> Loading...</span>
                                        <span v-else>Update</span>
                                    </button>
                                    <router-link class="btn btn-primary profile-button ml" aria-current="page" :to="{path:'/employee/'+employee.id}">Back</router-link>
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
    name : 'EditEmployee',
    data() {
        return {
            employee: {},
            id:null,
            isLoading: true,
            is_loading:false
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
        },
       async handleUpdate(){
           this.is_loading = true
           const response = await axios.put('employee/'+this.id,this.employee)
           
            if(response.data.status){
                this.is_loading = false
                this.$toastr.success(response.data.status_message, 'Update');
            }else{
                this.is_loading = false
                this.$toastr.error(response.data.status_message, 'Error');
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
.edit{
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