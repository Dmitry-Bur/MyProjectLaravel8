<template>



    <div class="row align-items-center">
  <SearchForm v-on:tosearch="toSearch"></SearchForm>
    <div class="col-lg-2">
        <div class="header__wishlist-box">
            <!-- Start Header Wishlist Box -->
            <WishlistBox></WishlistBox>
            <!-- End Header Wishlist Box -->

            <!-- Start Header Add Cart Box -->
            <CartBox></CartBox>
            <!-- End Header Add Cart Box -->
        </div>
    </div>
<!--        {{search}}t-->
    </div>

</template>

<script>
import SearchForm from "./SearchForm";
import CartBox from "./CartBox";
import WishlistBox from "./WishlistBox";

export default {
    name: "Header",
    components:{
        SearchForm,
        CartBox,
        WishlistBox
    },

    data(){
        return{
            search: ""
        }
    },

    methods:{
        toSearch(value){
            this.search = value
            this.$emit('tosearch_', this.search)
        },


    }

}
</script>

<style scoped>

</style>
