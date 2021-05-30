import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Login from './components/Login'
import Employee from './components/Employee'
import CreateEmployee from './components/CreateEmployee'
import EditEmployee from './components/EditEmployee'
import SearchEmployee from './components/SearchEmployee'
import ShowEmployee from './components/ShowEmployee'

Vue.use(Router)

export default new Router({
    mode : 'history',
    routes : [
        {path : '/', component:Home},
        {path : '/signin', component:Login},
        {path : '/employee', component:Employee},
        {path : '/employee/create', component:CreateEmployee},
        {path : '/employee/:id/edit', component:EditEmployee},
        {path : '/employee/search', component:SearchEmployee},
        { path: "/employee/:id", component:ShowEmployee},
    ]
})