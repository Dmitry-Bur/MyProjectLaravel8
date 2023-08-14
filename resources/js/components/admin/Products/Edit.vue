<template>
    <div>
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Редактирование продукта</h4>

                    <form class="forms-sample">
                        <div class="form-group">
                            <label>Имя продукта:</label>
                            <input type="text" class="form-control" id="exampleInputName1" placeholder="Имя продукта"
                                   v-model="name">
                        </div>


                        <div class="form-group mb-3">
                            <label>Описание продукта:</label>
                            <vue-editor id="editor1" v-model="description" :editor-toolbar="customToolbar"></vue-editor>
                        </div>


                        <div class="form-group">
                            <label for="exampleSelectGender">Для категории:</label>
                            <select class="form-control mb-3" id="exampleSelectGender" v-model="category_id"
                                    @click="getSubCategories(category_id)">
                                <option v-for="category in categories" :value="category.id">
                                    {{ category.name }}
                                </option>
                            </select>
                        </div>

                        <div v-if="sub_categories">
                            <label for="exampleSelectGender" :hidden="!category_id">Выбирите подкатегорию для
                                продукта:</label>
                            <select :hidden="!category_id" class="form-control" v-model="sub_category_id">
                                <option v-for="sub_category in sub_categories" :value="sub_category.id">
                                    {{ sub_category.name }}
                                </option>
                            </select>
                        </div>
                        <div v-if="!sub_categories">
                            <label class="text-warning">Для данной категории не существует подкатегории, создайте
                                подкатегорию или выбирите другую категорию</label>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputCity1">Цена продукта:</label>
                            <input type="number" class="form-control" id="exampleInputCity1" placeholder="Цена продукта"
                                   v-model="price">
                        </div>


                        <div class="form-group">
                            <label for="exampleInputCity12">Изображения продукта:</label>
                            <div>
                                <button id="exampleInputCity12" type="button" ref="dropzone"
                                        class="btn btn-outline-danger btn-icon-text">
                                    <i class="ti-upload btn-icon-prepend"></i>
                                    Загрузить


                                </button>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputCity13">Превью изображение для продукта:</label>
                            <div>
                                <button id="exampleInputCity13" type="button" ref="dropzone_prev"
                                        class="btn btn-outline-warning btn-icon-text">
                                    <i class="ti-upload btn-icon-prepend"></i>
                                    Загрузить

                                </button>
                            </div>
                        </div>


                        <div class="form-check form-check-warning">
                            <label class="form-check-label">
                                <input type="checkbox" class="form-check-input" v-model="in_stock">
                                Есть в наличии?
                                <i class="input-helper"></i>
                            </label>
                        </div>


                        <button type="submit" class="btn btn-primary me-2" @click.prevent="update()">Сохранить</button>

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
import Router from "../../../router";
import {VueEditor} from "vue2-editor"
import Dropzone from "dropzone"

export default {
    name: "Edit",

    components: {
        VueEditor,
    },

    data() {
        return {
            product: null,

            product_id: null,
            name: null,
            description: null,
            category_id: null,
            sub_category_id: null,
            price: null,
            in_stock: 0,

            categories: null,
            sub_categories: null,


            customToolbar: [
                [{header: [false, 1, 2, 3, 4, 5, 6]}],
                ["bold", "italic", "underline", "strike"], // toggled buttons
                [
                    {align: ""},
                    {align: "center"},
                    {align: "right"},
                    {align: "justify"}
                ],
                ["blockquote", "code-block"],
                [{list: "ordered"}, {list: "bullet"}, {list: "check"}],
                [{indent: "-1"}, {indent: "+1"}], // outdent/indent
                [{color: []}, {background: []}], // dropdown with defaults from theme
                ["clean"] // remove formatting button
            ],

            dropzone: null,
            dropzone_prev: null,
            images: null,

            images_delete_Id: [],
            image_prev_delete_Id: [],


        }
    },


    mounted() {

        this.getCategories()
        this.getProduct()


        this.dropzone = new Dropzone(this.$refs.dropzone, {
            url: '/api/admin/products/',

            autoProcessQueue: false,
            addRemoveLinks: true,
        })

        this.dropzone_prev = new Dropzone(this.$refs.dropzone_prev, {
            url: '/api/admin/products/',
            autoProcessQueue: false,
            addRemoveLinks: true,
            maxFiles: 1
        })

        this.dropzone.on('removedfile', (file) =>{
            this.images_delete_Id.push(file.id)
        })
        this.dropzone_prev.on('removedfile', (file) =>{
            this.image_prev_delete_Id.push(file.id)
        })


    },

    methods: {
        getProduct() {
            axios.get(`/api/admin/products/${this.$route.params.id}/edit`)
                .then(res => {

                    this.category_id = res.data.category_id
                    this.sub_category_id = res.data.sub_category_id
                    this.sub_categories = res.data.sub_categories

                    this.name = res.data.name
                    this.description = res.data.description
                    this.price = res.data.price
                    this.in_stock = res.data.in_stock
                    console.log('in_stock');
                    console.log(this.in_stock);

                    this.images = res.data.images
                    this.product_id = res.data.id
                    console.log(88888);
                    console.log(this.images);

                    this.images.forEach(image => {
                        let File = {id: image.id, name: image.name, size: image.size}
                        if (image.title === 'main')
                        {
                            this.dropzone.displayExistingFile(File, image.url)

                        }
                       else
                           this.dropzone_prev.displayExistingFile(File, image.url);
                  })
                    this.images = null
                    console.log(9999999777777)
                    console.log(this.dropzone.getAcceptedFiles())



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

        getSubCategories(Id) {
            //  this.subCategories = null
            if (Id) {
                axios.get(`/api/admin/subcategories/${Id}`)
                    .then(res => {
                        this.sub_categories = res.data.data;
                        console.log(this.sub_categories);

                        if (this.sub_categories.length === 0) {
                            this.sub_categories = null
                            //   alert('0')
                        }
                    })

            }

        },

        update(){

            const data = new FormData();

            data.append('_method','PATCH')
            data.append('name', this.name)
            data.append('description', this.description)
            data.append('sub_category_id', this.sub_category_id)
            data.append('price', this.price)
            data.append('in_stock', + this.in_stock)

            console.log('in_stock 2');
            console.log(this.in_stock);

            let prev = this.dropzone_prev.getAcceptedFiles()
            prev.forEach(pre =>{
                data.append('image_prev[]', pre);
            });

            this.image_prev_delete_Id.forEach(image_delete_id =>{
                data.append('images_delete_Id[]', image_delete_id);
            })


            let files = this.dropzone.getAcceptedFiles();
            files.forEach(file =>{
                data.append('images[]', file);
            });

             this.images_delete_Id.forEach(image_delete_id =>{
                 data.append('images_delete_Id[]', image_delete_id);
             })






            console.log(111111111111111111111111111111);
            console.log( files);

            axios.post(`/api/admin/products/${this.product_id}`, data)
            .then(res =>{
                Router.push({name: 'admin.products'})
            })
        }

    },

    computed: {}

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
