<template>
    <div>
        <div>
            <div class="col-lg-12 grid-margin stretch-card w-75">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Категории</h4>
                        <div class="table-responsive">

                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <td colspan="5">
                                        <div v-if="!newFlag">
                                            <a @click.p.prevent="showAddCategory" href="#"
                                               title="Добавить новую категорию">
                                                <i class="icon-md mdi mdi-plus-circle text-success"></i>
                                            </a>
                                        </div>
                                        <div v-if="newFlag">
                                            <input type="text" v-model="name" placeholder="Имя новой категории"
                                                   class="form-control">
                                            <button class="btn btn-success mt-3" @click.prevent="addCategory">Добавить
                                            </button>


                                            <div class="text-">
                                                <a @click.p.prevent="closeWin" href="#" >
                                                    Закрыть</a>
                                            </div>



                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Id
                                    </th>
                                    <th>
                                        Наименование категории
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

                                <tr  v-for="category in categories">

                                    <td v-if="editFlagId !== category.id">
                                        {{ category.id }}
                                    </td>

                                    <td v-if="editFlagId !== category.id">
                                        {{ category.name }}
                                    </td>

                                    <td v-if="editFlagId !== category.id">
                                        <div>
                                            <a @click.p.prevent="showEditCategory(category.id, category.name)" href="#">
                                                <i class="icon-md mdi mdi-pencil-box text-success"></i>
                                            </a>
                                        </div>
                                    </td>

                                    <td v-if="editFlagId !== category.id">
                                        <div>
                                            <a @click.p.prevent="showDeleteCategory(category.id)" href="#">
                                                <i class="icon-md  mdi mdi-delete-forever text-danger "></i>
                                            </a>
                                        </div>
                                    </td>
                                    <td colspan="3" v-if="editFlagId === category.id">
                                        <input type="text" v-model="nameEdit" placeholder="Имя новой категории"
                                               class="form-control w-100">
                                        <button class="btn btn-success mt-3" @click.prevent="editCategory">Редактировать
                                        </button>
                                    </td>
                                    <td v-if="editFlagId === category.id">
                                        <div>
                                            <a @click.p.prevent="closeWin" href="#">
                                                Закрыть
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

        <!--        <modal name="hello-world" class="">-->
        <!--                    <div class="card-body">-->
        <!--                        <h4 class="card-title">При удалении категории, будут удалены её подкатегории</h4>-->

        <!--                        </div>-->
        <!--        </modal>-->
        <v-dialog/>

    </div>
</template>

<script>
export default {

    name: "Categories",
    data() {
        return {
            name: null,
            categories: [],
            newFlag: null,
            editFlagId: null,
            nameEdit: null,
            editId: null,
            catId: null,
            delId: null
        }
    },

    mounted() {
        this.getCategories()
    },

    methods: {

        show(Id) {
            this.$modal.show('dialog', {
                title: `<b><div class="text-danger">` + 'Внимание' + `</div></b>`,
                text: 'При удалении категории, все её подкатегории и принадлежащие им продукты будут удалены.',
                buttons: [
                    {
                        title: 'Отмена',
                        handler: () => {
                            this.$modal.hide('dialog')
                        }
                    },

                    {
                        title: `<b><div class="text-danger">` + 'Подтвердить' + `</div></b>`,
                        handler: () => {
                            this.$modal.hide('dialog')
                            this.deleteCategory()
                        }
                    }
                ]
            })
        },


        getCategories() {
            axios.get('/api/admin/categories')
                .then(res => {
                    console.log(res);
                    console.log(res.data.data);
                    console.log(123);
                   // console.log(res.data.data.subcategories);

                    this.categories = res.data.data


                })
        },


        showAddCategory() {
            this.newFlag = 1
            this.editFlagId = null
        },

        showEditCategory(Id, name) {
            this.editFlagId = Id
            this.nameEdit = name
            this.editId = Id
            this.newFlag = null
            console.log(this.editFlagId);
        },


        addCategory() {

            axios.post('/api/admin/categories', {name: this.name})
                .then(res => {
                    this.name = null
                    this.getCategories()
                })

        },

        editCategory() {
            console.log(this.nameEdit);
            axios.patch(`/api/admin/categories/${this.editId}`, {name: this.nameEdit})
                .then(res => {
                    this.getCategories()
                    this.editFlagId = null
                })

        },


        showDeleteCategory(ID) {
            this.delId = ID
            this.show()
        },

        deleteCategory() {
            axios.delete(`/api/admin/categories/${this.delId}`)
                .then(res => {
                    this.getCategories()
                })
        },
        closeWin() {
            this.editFlagId = null
            this.newFlag = null
        }


    },


}
</script>

<style scoped>

</style>










