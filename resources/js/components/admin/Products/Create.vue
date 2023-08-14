<template>
<div>
    <div class="col-12 grid-margin stretch-card">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Добавление нового продукта</h4>

                <form class="forms-sample">
                    <div class="form-group">
                        <label>Имя продукта:</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Имя продукта" v-model="name">
                    </div>

                    <div class="form-group mb-3" >
                        <label>Описание продукта:</label>
                        <vue-editor id="editor1" v-model="description" :editor-toolbar="customToolbar"></vue-editor>
                    </div>

<!--                    <div class="form-group">-->
<!--                        <label>Описание продукта:</label>-->
<!--                        <input type="text" class="form-control" id="exampleInputName3" placeholder="Имя продукта" v-model="description">-->
<!--                    </div>-->
                    <div class="form-group">
                        <label for="exampleSelectGender">Для категории:</label>
                        <select class="form-control mb-3" id="exampleSelectGender" v-model="idSelectCat" @click="getSubCategories(idSelectCat)">
                            <option v-for="category in categories"  :value="category.id">
                                    {{ category.name }}
                            </option>
                        </select>

                        <div v-if="subCategories">
                        <label for="exampleSelectGender" :hidden="!idSelectCat">Выбирите подкатегорию для продукта:</label>
                        <select :hidden="!idSelectCat" class="form-control"  v-model="sub_category_id" >
                        <option v-for="subCategory in subCategories"  :value="subCategory.id" >{{ subCategory.name }}</option>
                        </select>
                        </div>
                        <div v-if="!subCategories">
                            <label class="text-warning">Для данной категории не существует подкатегории, создайте подкатегорию или выбирите другую категорию</label>
                        </div>

                    </div>
                    <div class="form-group">
                        <label for="exampleInputCity1">Цена продукта:</label>
                        <input type="number" class="form-control" id="exampleInputCity1" placeholder="Цена продукта" v-model="price">
                    </div>


                    <div class="form-group">
                        <label for="exampleInputCity12" >Изображения продукта:</label>
                       <div>
                        <button id="exampleInputCity12" type="button" ref="dropzone" class="btn btn-outline-danger btn-icon-text">
                            <i class="ti-upload btn-icon-prepend"></i>
                            Загрузить


                        </button>
                       </div>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputCity13" >Превью изображение для продукта:</label>
                        <div>
                            <button id="exampleInputCity13" type="button" ref="dropzone_prev" class="btn btn-outline-warning btn-icon-text">
                                <i class="ti-upload btn-icon-prepend"></i>
                                Загрузить

                            </button>
                        </div>
                    </div>



                    <div class="form-check form-check-warning">
                        <label class="form-check-label">
                            <input type="checkbox" class="form-check-input" v-model="in_stock">
                            Есть в наличии?
                            <i class="input-helper"></i></label>
                    </div>

                    <button type="submit" class="btn btn-primary me-2" @click.prevent="store()">Создать</button>

                    <router-link class="btn block " :to="{name: 'admin.products'}">
                    <button class="btn btn-light" >
                        Назад </button></router-link>
                </form>
            </div>
        </div>
    </div>
</div>
</template>



<script>
import router from "../../../router";
import {VueEditor} from "vue2-editor"
import Dropzone from "dropzone"




export default {
    name: "Create",

    components:{
        VueEditor,


    },

    data() {
        return {
            categories: [],
            idSelectCat: null,
            subCategories: [],


            name:null,
            description:null,
            sub_category_id:null,
            price:null,
            in_stock: 1,

            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                [
                    { align: "" },
                    { align: "center" },
                    { align: "right" },
                    { align: "justify" }
                ],
                ["blockquote", "code-block"],
                [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
                [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
                [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                ["clean"] // remove formatting button
            ],

            dropzone: null,
            dropzone_prev: null
        }
    },


    mounted() {
        this.getCategories()

        this.dropzone = new Dropzone(this.$refs.dropzone ,{
            url: '/api/admin/products/',
            autoProcessQueue: false,
            addRemoveLinks: true,
        })

        this.dropzone_prev = new Dropzone(this.$refs.dropzone_prev ,{
            url: '/api/admin/products/',
            autoProcessQueue: false,
            addRemoveLinks: true,
            maxFiles: 1
        })

    },


    methods:{
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
        getSubCategories(Id){
          //  this.subCategories = null
            if(Id){
                    axios.get(`/api/admin/subcategories/${Id}`)
                        .then( res =>{
                            this.subCategories = res.data.data;
                            console.log(this.subCategories);

                            if (this.subCategories.length === 0) {
                                this.subCategories = null
                             //   alert('0')
                            }
                        })

            }

        },
        store(){

            let data = new FormData();

            (this.in_stock === true)? this.in_stock=1 :this.in_stock=0

            data.append('name', this.name)
            data.append('description', this.description)
            data.append('sub_category_id', this.sub_category_id)
            data.append('price', this.price)
            data.append('in_stock', this.in_stock)
            let prev = this.dropzone_prev.getAcceptedFiles()
            data.append('image_prev', prev[0])


            let files = this.dropzone.getAcceptedFiles();

           // console.log(files);

           files.forEach(file =>{
               data.append('images[]', file);
              this.dropzone.removeFile(file)
           });

            console.log(77788778778);
            console.log(data);

            axios.post('/api/admin/products/', data)
                 .then(res => {
                    router.push({name: 'admin.products'})
                 })
        }


    },




}
</script>

<style>

#editor1 {
    height: 350px;
}

.dz-error-mark,
.dz-success-mark{
display:none
}


</style>
