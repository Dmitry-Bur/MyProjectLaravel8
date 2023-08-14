<template>
    <div>
    <ul class="sidebar__menu-filter " >
        <!-- Start Single Menu Filter List -->
        <li class="sidebar__menu-filter-list" v-for="brand in brands">
            <label><input type="checkbox"  :value="brand.id"><span>{{ brand.name }}</span></label>
        </li>  <!-- End Single Menu Filter List -->
    </ul>
        <button type="button" @click="" class="btn--blue btn--box p-2 ">ok</button>
    </div>

</template>

<script>
export default {
    name: "Brands",

    data(){
        return{
            select_id: null,
            brands: [],
            isChecked: Boolean,
            checked_ids: [],
        }
    },

    mounted() {
        this.getBrands()
    },


    methods: {

        getBrands() {
            axios.get('api/brands')
                .then(res => {
                    this.brands =  res.data.data
                    console.log(this.brands);
                })
        },



    },

    watch:{

        brands:{
            handler(newVal){
                console.log(newVal);
            },
            deep: true
        }
    }


}
</script>

<style scoped>

</style>
