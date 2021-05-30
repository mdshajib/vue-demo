<template>
    <div class="employee_card">
        <div class="row">
                <div class="col-md-3">
                    <div class="title">
                        <div class="thumb">
                            <img class="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="">
                        </div>
                        <div class="employee-list-details">
                            <div class="employee-list-info">
                                <div class="employee-list-title">
                                    <h5 class="mb-0">Shajib Hasan</h5>
                                </div>
                                <div class="employee-list-option">
                                    <p>Software Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2 details">
                    <span class="title txt"><i class="fas fa-envelope-open-text"></i> Shajib@gmail.com</span>
                </div>
                <div class="col-md-2 details">
                    <span class="title txt"><i class="fas fa-phone-volume"></i>  01781557594</span>
                </div>
                <div class="col-md-3 details">
                    <span class="title txt"><i class="far fa-address-card"></i> Kurigram, Bangladesh</span>
                </div>
                <div class="col-md-2 action">
                    <div class="title txt">
                    <ul class="list-unstyled mb-0 d-flex justify-content-end">
                        <li><a href="#" class="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i class="far fa-eye"></i></a></li>
                        <li><a href="#" class="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i class="fas fa-pencil-alt"></i></a></li>
                        <li><a href="#" class="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i class="far fa-trash-alt"></i></a></li>
                    </ul>
                    </div>
                </div>
        </div>
    
    </div>
</template>
<script>
export default {
    name : 'EmployeeCard',
    props: {
        employee: {
            type: Object,
        },
    },
}
</script>


<style>
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
    width: 75px;
    height: 75px;
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