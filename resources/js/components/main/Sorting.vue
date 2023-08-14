<template>
    <!-- ::::::  Start Sort Box Section  ::::::  -->
    <div class="sort-box m-tb-30">
        <!-- Start Sort Left Side -->
        <div class="sort-box__left">
            <div class="sort-box__tab">
                <ul class="sort-box__tab-list nav">
                    <li><a class="sort-nav-link active" data-toggle="tab" href="#sort-grid"><i class="icon-grid"></i>  </a></li>
                </ul>
            </div>
            <span>Найдено {{count_prod}} Продукт(a)(ов)</span>
        </div> <!-- Start Sort Left Side -->

        <div class="sort-box__right">
            <span>Отсортировать по:</span>
            <div class="sort-box__option">
                <label class="select-sort__arrow">
                    <select v-model="sort" @click="sorting" name="select-sort" class="select-sort">
                        <option :value=1>По имени, -></option>
                        <option :value=2>По имени, <-</option>
                        <option :value=3>Цена, от низкой </option>
                        <option :value=4>Цена, от высокой</option>
                    </select>
                </label>
            </div>
        </div>
    </div> <!-- ::::::  Start Sort Box Section  ::::::  -->
</template>

<script>
export default {
    name: "Sorting",

    props:['count_prod'],

    data(){
        return{
            sort: null
        }
    },

    methods:{
        sorting(){
            this.$emit('sortingg', this.sort)
        }
    },

    watch:{
        count_prod(){
        }
    }

}
</script>

<style scoped>

</style>
