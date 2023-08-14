<template >
    <div class="sidebar__widget gray-bg">
        <div class="sidebar__box">
            <h5 class="sidebar__title">Категории</h5>
        </div>

        <ul class="sidebar__menu-collapse">
            <!-- Start Single Menu Collapse List -->
            <li class="sidebar__menu-collapse-list" v-if="subC">
                <div class="accordion">
                    <a href="#" @click.prevent="byCategory(null)" class="accordion__title text-success">  Все категории  <i class=""></i></a>
                </div>
            </li>

            <li class="sidebar__menu-collapse-list" v-for="category in categories">
                <div class="accordion">
                    <a href="#" class="accordion__title" data-toggle="collapse" :data-target="'#'+category.name.replace(/\s/g, '')"> {{ category.name }} <i class="icon-chevron-down"></i></a>

                    <div :id="category.name.replace(/\s/g, '')" class="collapse">
                        <ul class="accordion__category-list">
                            <li v-for="subCategory in category.subCategories"><a href="#" @click.prevent="byCategory(subCategory.id)">{{ subCategory.name }}</a></li>
<!--                        <li><a href="#">Blouses &amp; Shirts</a></li>-->
                        </ul>
                    </div>
                </div>
            </li>  <!-- End Single Menu Collapse List -->
        </ul>

    </div>
</template>

<script>
import router from "../../../router";

export default {
    name: "Category",

    data(){
      return{
          categories: [],
          nameCat: '',
          subC: null
      }
    },


    mounted() {
       this.getCategories()
    },


    methods: {

        getCategories() {
            axios.get('api/categories')
                .then(res => {
                    this.categories =  res.data.data
                    console.log(this.categories);
                })
        },
        byCategory(subCat){
            this.subC = subCat
            this.$emit('bycategory', subCat)
        },




    },

    computed: {
        _name: function (){
            console.log('comp');
            console.log(this.nameCat);
            return this.nameCat
        }

    }



}

</script>

<style scoped>


</style>
