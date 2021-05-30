<template>
    <div class="employee_list">
        <!-- <EmployeeCard v-for="(employee, index) in employees" :key="index" :employee="employee" /> -->
        <EmployeeCard  />
    </div>
</template>

<script>
import EmployeeCard from "./EmployeeCard"
export default {
    name: 'EmployeeList',
    props: {
        employees: {
        type: Array,
        },
    },
    components: {
        EmployeeCard,
    },
}
</script>