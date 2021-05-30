<template>
    <div>
        <div class="border-end bg-white" id="sidebar-wrapper">
            <div class="sidebar-heading border-bottom bg-light">Employee CRUD</div>
            <div class="list-group list-group-flush">
                <router-link class="list-group-item list-group-item-action list-group-item-light p-3" to="/">Home</router-link>
                <router-link class="list-group-item list-group-item-action list-group-item-light p-3" to="/employee">Employee List</router-link>
                <router-link class="list-group-item list-group-item-action list-group-item-light p-3" to="/employee/create">Create Employee</router-link>
                <router-link class="list-group-item list-group-item-action list-group-item-light p-3" to="/employee/search">Search</router-link>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>