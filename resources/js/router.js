import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes:[
        {
            path: '/admin/categories',
            component: ()=> import('./components/admin/Categories'),
            name: 'admin.categories'

        },
        {
            path: '/admin/subcategories',
            component: ()=> import('./components/admin/SubCaregories'),
            name: 'admin.subcategories'
        },
        {
            path: '/admin/products',
            component: ()=> import('./components/admin/Products/Products'),
            name: 'admin.products'
        },
        {
            path: '/admin/products/create',
            component: ()=> import('./components/admin/Products/Create'),
            name: 'admin.products.create'
        },
        {
            path: '/admin/products/:id/edit',
            component: ()=> import('./components/admin/Products/Edit'),
            name: 'admin.products.edit'
        },
        {
             path:'/',
             component: ()=>import('./components/main/Home/Home'),
             name: 'main.home',

            // params

        },
        {
            path:'/cart',
            component: ()=>import('./components/main/Cart'),
            name:'main.cart'
        },
        {
            path: '/product/:id',
            component: () => import('./components/main/Product/Show'),
            name: 'main.show',
        },
        {
            path: '/main/login',
            component: ()=> import('./components/main/Login'),
            name: 'main.login'
        },
        {
            path:'/main/registration',
            component: ()=> import('./components/main/Registration'),
            name: 'main.registration'
        }

    ]

})
