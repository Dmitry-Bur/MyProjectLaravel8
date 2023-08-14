<template>
    <div class="col-lg-10">
        <form class="header__search-form" action="#">
            <div class="header__search-input  ">
                <input v-model="search" @input="toSearch" type="search" class="pl-5" placeholder="Найти товар...">
                <button class="btn btn--submit btn--blue btn--uppercase btn--weight " type="submit">Search</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchForm",

    data() {
        return {
            search: "",


        }
    },

    methods: {
        toSearch() {
            this.$emit('tosearch', this.search)
        }
    },


    watch: {
        $route(to, from) {
            console.log(from)
            if(to.name==='main.home' && from.name === 'main.home'){
                this.search = '';
                this.toSearch()
            }
        },

    }
}
</script>

<style scoped>

</style>
