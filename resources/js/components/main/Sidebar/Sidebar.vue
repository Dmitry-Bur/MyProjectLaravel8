<template>
    <div class="col-lg-3">

        <div class="sidebar">
    <div>
    <Categories @bycategory="byCategory"></Categories>

    <div class="sidebar__widget gray-bg">

<!--        <div class="sidebar__box">-->
<!--            <h5 class="sidebar__title">Фильтровать по:</h5>-->
<!--            <a href="" class="btn btn&#45;&#45;box btn&#45;&#45;blue btn&#45;&#45;small"><i class="far fa-times"></i> Clear All</a>-->
<!--        </div>-->
        <div class="sidebar__box m-t-40">
            <h5 class="sidebar__title">Брэнд</h5>

            <Brands></Brands>

        </div>
    </div>  <!-- End Single Sidebar Widget -->
        <Prices></Prices>
    </div>
            </div>
    </div>

</template>

<script>
import Categories from "./Categories"
import Brands from "./Brands"
import Prices from "./Prices";

export default {
    name: "SidebarMain",

    components:{
        Categories,
        Brands,
        Prices
    },

    data(){
        return{
            byCat: null
        }
    },

    methods:{
        byCategory(newValue){
            this.byCat = newValue
            this.$emit('bycategory', newValue)
        }
    }


}
</script>

<style scoped>

</style>
