import Vue from "vue";

import Index from "./components/admin/Index";
import Sidebar from "./components/admin/Sidebar";

import SidebarMain from "./components/main/Sidebar/Sidebar"
import Products from "./components/main/Products"
import MainHeader from  "./components/main/Header/Header"
import IndexMain from  "./components/main/Index"
import MyAccount from "./components/main/Header/MyAccount";

import router from "./router";
import VueJSModal from "vue-js-modal";


require('./bootstrap');

Vue.use(VueJSModal,{ dialog: true, dynamicDefaults: true, injectModalsContainer: true ,Index})


const app = new Vue({
    el: '#app',

    components: {
        Index,
        Sidebar,
        //
        IndexMain,
        SidebarMain,
        MainHeader,
        MyAccount


    },
    router,


    data(){
        return{
            search: "",
            byCategory: null
        }
    },

    methods:{
        Search(value){
            this.search = value;
        },

    }



})




