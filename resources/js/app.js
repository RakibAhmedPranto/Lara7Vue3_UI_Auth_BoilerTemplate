require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// route file import

import {routes} from './routes';

//sweet alart
import Swal from 'sweetalert2'
window.Swal = Swal;



const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;



// use in vue file

// Toast.fire({
//     icon: 'success',
//     title: 'Signed in successfully'
// })

//sweet alart


//import Notification

import Notification from './Helpers/Notification';
window.Notification = Notification;

//write in vue file
//Notification.Function_name()


const router = new VueRouter({
    routes,
    // mode:'history'
  })



const app = new Vue({
    el: '#app',
    router
});
