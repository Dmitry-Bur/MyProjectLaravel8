<template>

    <div class="row flex-column-reverse flex-lg-row">
        <Sidebar @bycategory="ByCategory"></Sidebar>
        <Products :search_text="search_text" :bycategory="byCategory"></Products>
    </div>

</template>

<script>

import Products from "../Products";
import Sidebar from "../Sidebar/Sidebar";

export default {
    name: "Home",
    components: {
        Products,
        Sidebar
    },

    props: ['search_text', 'bycategory'],
    data() {
        return {
            byCategory: null
        }
    },

    methods: {
        ByCategory(value) {
            this.byCategory = value;
            this.$emit('bycategory', value)
        }
    },

    watch:{
        '$route' (to, from){
            console.log(121);
        }
    }

}
</script>

<style scoped>

</style>
