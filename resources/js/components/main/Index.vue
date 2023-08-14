<template>
<div>
   <router-view  :search_text="search_text" ></router-view>
</div>
</template>

<script>
export default {
    props:['search_text'],

    name: "Index",

    ByCategory(value){
        this.byCategory = value;
        this.$emit('bycategory', value)
    }

}
</script>

<style>

</style>
