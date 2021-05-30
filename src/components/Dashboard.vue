<template>
    <div>
        <div class="d-flex" id="wrapper">
            <!-- Sidebar-->
            <Sidebar />
            <!-- Page content wrapper-->
            <div id="page-content-wrapper">
                <!-- Top navigation-->
                <Header />
                <!-- Page content-->
                <div class="container-fluid">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header'
import Sidebar from './Sidebar.vue'
export default {
    name: 'Dashboard',
    components: {
        Header,
        Sidebar
  },
}
</script>
