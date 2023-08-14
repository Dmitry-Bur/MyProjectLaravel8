import Vue from "vue";
import IndexHeader from "./components/main/header/IndexHeader";

require('./bootstrap')

const app = new Vue({
    el: '#app',

   components:{
        IndexHeader,
   }



})
