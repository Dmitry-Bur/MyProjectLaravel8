<template>
<div>
    <div>
        <div class="col-lg-12 grid-margin stretch-card w-75">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Продукция</h4>
                    <div class="table-responsive">

                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <td colspan="5">
                                    <div >
                                        <a @click.p.prevent="addProduct()" href="#"
                                           title="Добавить новый продукт">
                                            <i class="icon-md mdi mdi-plus-circle text-success"></i>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Наименование продукта
                                </th>
                                <th>
                                    Редактировать
                                </th>
                                <th>
                                    Удалить
                                </th>

                            </tr>
                            </thead>


                            <tbody  >

                            <tr  v-for="product in products">

                                <td>
                                    {{ product.id }}
                                </td>

                                <td >
                                    {{ product.name }}
                                </td>

                                <td>
                                    <div>
                                        <a @click.p.prevent="" href="#">
                                            <i class="icon-md mdi mdi-pencil-box text-success"></i>
                                        </a>
                                    </div>
                                </td>

                                <td >
                                    <div>
                                        <a @click.p.prevent="showDeleteCategory(category.id)" href="#">
                                            <i class="icon-md  mdi mdi-delete-forever text-danger "></i>
                                        </a>
                                    </div>
                                </td>


                            </tr>


                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Products",

    data() {
        return {
            products: [],
        }
    },


    mounted() {
        this.getProducts()
    },

    methods:{
        getProducts() {
            axios.get('/api/admin/products')
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    console.log(123);
                    // console.log(res.data.data.subcategories);

                    this.products = res.data.data
                })
        },
    }


}
</script>

<style scoped>

</style>
