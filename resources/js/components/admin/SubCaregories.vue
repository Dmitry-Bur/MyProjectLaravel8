<template>

    <div>
        <div>
            <div class="col-lg-12 grid-margin stretch-card w-75">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Подкатегории</h4>
                        <div class="table-responsive">

                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <td colspan="4">
                                        <div v-if="!newFlag && !this.editFlagId">
                                            <a @click.p.prevent="showAddSubCategory" href="#"
                                               title="Добавить новую подкатегорию">
                                                <i class="icon-md mdi mdi-plus-circle text-success"></i>
                                            </a>
                                        </div>
                                        <div v-if="newFlag && !this.editFlagId">

                                            <div class="form-group">
                                                <label for="exampleFormControlSelect2">Выбирите главную категорию, для создание подкатегории</label>

                                                <select class="form-control mb-3" id="exampleFormControlSelect2" v-model="idSelectCat">
                                                    <option  v-for="category in categories"  :value="category.id">{{ category.name }}</option>
                                                </select>

                                                <input :disabled="!idSelectCat" type="text" v-model="name" placeholder="Имя новой подкатегории"
                                                       class="form-control">

                                            </div>


                                            <button class="btn btn-success mt-3" @click.prevent="addSubCategory">Добавить
                                            </button>


                                            <div class="text-">
                                                <a @click.prevent="closeWin" href="#" >
                                                    Закрыть</a>
                                            </div>



                                        </div>

                                    </td>
                                </tr>
                                <tr>
                                    <th v-if=" !selectSubCategories">
                                        Id
                                    </th>
                                    <th v-if=" !selectSubCategories">
                                        Главная категория
                                    </th>
                                    <th v-if=" !selectSubCategories">
                                        Редактировать подкатегории
                                    </th>



                                    <th v-if=" selectSubCategories">
                                        Имя подкатегории
                                    </th>

                                    <th v-if=" selectSubCategories">
                                        Удалить
                                    </th>
                                </tr>
                                </thead>


                                <tbody  >

                                <tr  v-for="category in categories" v-if="!selectSubCategories">

                                    <td v-if="editFlagId !== category.id">
                                        {{ category.id }}
                                    </td>

                                    <td v-if="editFlagId !== category.id">
                                        {{ category.name }}
                                    </td>

                                    <td v-if="editFlagId !== category.id">
                                        <div>
                                            <a @click.p.prevent="getEditSubCategory(category.id, category.name)" href="#">
                                                <i class="icon-md mdi mdi-pencil-box text-success"></i>
                                            </a>
                                        </div>
                                    </td>

                                </tr>
                                <tr v-if="selectSubCategories && editFlagId" v-for="(selectSubCategory, key) in selectSubCategories">
                                    <td colspan="1">


                                        <div>
                                            <input type="text" v-model="selectSubCategory.name">
                                        </div>





                                    </td>

                                    <td colspan="1" >

                                            <a @click.p.prevent="delSubCategories(selectSubCategory.id)" href="#" v-if="! showDeleteSubCategory(selectSubCategory.id)">
                                                <i class="icon-md  mdi mdi-delete-forever text-danger "></i>
                                            </a>
<!--                                        <div v-if="(deleteSubCat.indexOf(selectSubCategory.id, 0) !== -1)">-->
                                        <div v-if=" showDeleteSubCategory(selectSubCategory.id)">
                                            <a @click.p.prevent="cancelDelSubCategories(selectSubCategory.id)" href="#">
                                                Восстановить
                                            </a>
                                        </div>



                                    </td>


                                </tr>
                                <button v-if="editFlagId" class="btn btn-success mt-3" @click.prevent="show()/*EditSubCategories()*/">Редактировать
                                </button>
                                <div v-if="editFlagId" class="text-">
                                    <a @click.p.prevent="closeWin" href="#" >
                                        Закрыть</a>
                                </div>








                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-dialog/>
    </div>



</template>

<script>
export default {
    name: "SubCaregories",

    data(){
       return{
           categories: null,
           newFlag: null,
           editFlagId : null,
           name: null,
           idSelectCat: null,
           selectSubCategories: null,
           editSubCat:[],
           deleteSubCat:[],



       }
    },



    mounted() {
this.getCategories()
    },


    methods:{

        show() {
            console.log(88888);
            console.log(this.deleteSubCat);
            if(this.deleteSubCat.length){
            this.$modal.show('dialog', {
                title: `<b><div class="text-danger">` + 'Внимание' + `</div></b>`,
                text: 'При удалении подкатегории, все её продукты будут удалены.',
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
                            this.EditSubCategories()
                        }
                    }
                ]
            })
            }else{
                this.EditSubCategories()
            }
        },

        showDeleteCategory(ID) {
            //this.delId = ID
            this.show()
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
            console.log(this.idSelectCat);
        },

        addSubCategory(){
            console.log(this.name);
            console.log(this.idSelectCat);
            axios.post(`/api/admin/subcategories/`, {category_id : this.idSelectCat,  name: this.name})
            .then( res =>{
                this.getCategories()
                this.newFlag = null
            })
            },


        showAddSubCategory(){
            this.newFlag = 1
            this.editFlagId = null
        },


        getEditSubCategory(Id, name) {
           // this.selectSubCategories = null

            this.newFlag = null
            this.editFlagId = Id
            axios.get(`/api/admin/subcategories/${Id}`)
            .then( res =>{
                this.selectSubCategories = res.data.data;
                //  this.show(name,   this.selectSubCategories)
            })

        },




        EditSubCategories(){

            let ids = []
            let id = 3
            let names = []
            let category_ids = []

            this.selectSubCategories.forEach(value =>{
                ids.push('name',value.name)
            })


            console.log(this.deleteSubCat);

            console.log(9999999999999);
            console.log(this.selectSubCategories);

            console.log(ids);
            axios.patch(`/api/admin/subcategories/${this.editFlagId}`,  { subcat: this.selectSubCategories , delete_subcategories : this.deleteSubCat} )
            .then(res=>{
                this.newFlag = null
                this.editFlagId = null
                this.selectSubCategories = null
                this.getCategories()
            })
        },


        closeWin(){
            this.newFlag = null
            this.editFlagId = null
            this.selectSubCategories = null
        },

        delSubCategories(Id){
            this.deleteSubCat.push(Id)
        },
        cancelDelSubCategories(Id){
            let del = null
            del= this.deleteSubCat.indexOf(Id, 0)
            this.deleteSubCat.splice(del,1)
        },

        showDeleteSubCategory(Id) {
            let del = null
            if((del= this.deleteSubCat.indexOf(Id, 0)) !== -1){

                return Id
            }else {
                return 0;
            }
        }








        },

    computed:{

    }












}

</script>

<style scoped>

</style>
