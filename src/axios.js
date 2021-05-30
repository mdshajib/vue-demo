import axios from 'axios'
axios.defaults.baseURL = `http://127.0.0.1:8000/api/`;
axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('access_token');
axios.interceptors.response.use(response=>{
    return response
}, function (error) {
    if (401 === error.response.status) {
        console.log('unauthorized')
        localStorage.removeItem('access_token')
        window.location = '/signin';
    }
}
)
// axios.interceptors.response.use( response=>{