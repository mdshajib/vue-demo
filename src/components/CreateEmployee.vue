<template>
    <div class="newemployee">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <div class="create_employee">
                    <div class="row">
                        <div class="col">
                            <h4>Create New Employee</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form-floating mb-1">
                                <input type="text" class="form-control" id="floatingInput" v-model="name" placeholder="name@example.com">
                                <label for="floatingInput">Name</label>
                            </div>

                            <div class="form-floating mb-1">
                                <input type="email" class="form-control" id="floatingInput"  v-model="email" placeholder="name@example.com">
                                <label for="floatingInput">Email</label>
                            </div>

                            <div class="form-floating mb-1">
                                <input type="text" class="form-control" id="floatingInput"  v-model="phone" placeholder="name@example.com">
                                <label for="floatingInput">Phone</label>
                            </div>

                            <div class="form-floating mb-1">
                                <input type="text" class="form-control" id="floatingInput"  v-model="address" placeholder="name@example.com">
                                <label for="floatingInput">address</label>
                            </div>

                            <div class="form-floating mb-1">
                                <input type="text" class="form-control" id="floatingInput"  v-model="designation" placeholder="name@example.com">
                                <label for="floatingInput">Designation</label>
                            </div>
                            <div class="form-floating mb-1">
                                <input type="text" class="form-control" id="floatingInput"  v-model="department" placeholder="name@example.com">
                                <label for="floatingInput">Department</label>
                            </div>
                            <div class="form-floating mb-1">
                                <input type="text" class="form-control" id="floatingInput"  v-model="joining_date" placeholder="name@example.com">
                                <label for="floatingInput">joining Date</label>
                            </div>
                            <div class="input-group mb-1">
                                <input type="file" class="form-control" @change="onFileSelected" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
                            </div>

                            <div class="form-floating mb-1">
                                <button class="btn btn-success" @click.prevent="handleSubmit">
                                    
                                    <span v-if="is_loading"><i class="fa fa-spinner fa-spin fa-1x fa-fw"></i> Loading...</span>
                                    <span v-else>Create New Emplyee</span>
                                </button>
                                <router-link class="btn btn-primary profile-button ml" aria-current="page" :to="{path:'/employee/'}">Employee List</router-link>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-2"></div>
        </div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : 'CreateEmployee',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            address: '',
            designation: '',
            photo: '',
            department: '',
            joining_date: '',
            imagefile: null,
             is_loading:false
        }
    },
    methods: {
        async handleSubmit() {
            this.is_loading = true
            const formData = new FormData();
            formData.append('email', this.email);
            formData.append('name', this.name);
            formData.append('phone', this.phone);
            formData.append('address', this.address);
            formData.append('designation', this.designation);
            formData.append('department', this.department);
            formData.append('joining_date', this.joining_date);
            formData.append('photo', this.imagefile, this.imagefile.name);
            const response = await axios.post('employee', formData);

            if(response.data.status){
                this.is_loading = false
                console.log('Inserted');
            }
        },
        onFileSelected(event) {
            this.imagefile = event.target.files[0];
        }
    },
    async mounted() {
        let token = await localStorage.getItem('access_token');
        if(token){
         this.isLogin = true
        }else{
            this.$router.push('/signin')
        }
        
  }
}
</script>

<style>
.ml{
    margin-left: 10px;
}
.create_employee{
    border-radius: 20px;
    border: 2px solid #ececec;
    margin: 15px;
    box-shadow: 2px 2px 2px #f1f1f1;
    padding: 15px;
}
.form-floating>.form-control, .form-floating>.form-select {
    height: calc(3rem + 1px);
    padding: .4rem .65rem;
}
</style>
