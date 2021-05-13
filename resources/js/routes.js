let catCreate = require('./components/category/create.vue').default;
let catEdit = require('./components/category/edit.vue').default;

export const routes = [
    { path: '/category/create', component: catCreate ,name:'category.create'},
    { path: '/category/edit', component: catEdit, name:'category.edit'}
  ]
