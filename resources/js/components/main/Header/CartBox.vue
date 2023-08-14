<template>
    <div class="header-add-cart pos-relative m-l-40">
        <router-link :to="{name: 'main.cart'}">
            <i class="icon-shopping-cart"></i>
            <span class="wishlist-item-count pos-absolute">{{cartProductsLength}}</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "CartBox",
    data(){
         return{
             cartProducts: JSON.parse(localStorage.getItem('cart')),
         }
    },

    watch:{
        cartProducts: function (){
            console.log('112))))))))))))')
        }
    },

    computed:{
        cartProductsLength: function (){

            console.log('-****')
            this.cartProducts =  JSON.parse(localStorage.getItem('cart'));

            return this.cartProducts.length
        }
    }
}
</script>

<style scoped>

</style>
