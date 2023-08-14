<template>

    <div class="col-lg-9">

        <Sorting :count_prod="filteredProductsAndCategory.length" @sortingg="sorting"></Sorting>

        <div class="product-tab-area">
            <div class="tab-content ">
                <div class="tab-pane clearfix active" id="sort-grid">
                    <div>
                        <template v-if="filteredProductsAndCategory.length"
                                  v-for="product in filteredProductsAndCategory">
                            <div
                                class="product__box product__box--default product__box--border-hover text-center float-left float-3">

                                <div class="product__img-box">
                                    <router-link :to="{name: 'main.show', params:{id: product.id}}">
                                        <img v-if="product.image_prev.length" class="product__img"
                                             :src="product.image_prev[0].url" alt="">
                                    </router-link>
                                    <!--                                    <a href="#modalAddCart" data-toggle="modal"-->
                                    <div>
                                    <a v-if="!inCart(product.id)" :href="'#modalAddCart'+product.id"
                                       @click.prevent="addToCart(product.id, product.name, product.price, 1, product.image_prev[0].url)"
                                       data-toggle="modal"
                                       class="btn btn--box btn--small btn--gray btn--uppercase btn--weight btn--hover-zoom product__upper-btn">Добавить
                                        в корзину</a>
                                    </div>

                                    <a v-if="inCart(product.id)" href="#" @click.prevent="removeFromCart(product.id)"
                                       class="btn btn--box btn--small btn-danger btn--uppercase btn--weight  product__upper-btn">Удалить
                                        <i class="fa fa-times"></i></a>

                                    <!--            <span class="product__tag product__tag&#45;&#45;discount">-12%</span>-->
                                    <a href="wishlist.html" class="product__wishlist-icon"><i
                                        class="icon-heart"></i></a>
                                </div>
                                <div class="product__price m-t-10">
                                    <!--            <span class="product__price-del">₽11.90</span>-->
                                    <span class="product__price-reg">₽{{ product.price }}</span>
                                </div>
                                <a href="single-1.html"
                                   class="product__link product__link--underline product__link--weight-light m-t-15">
                                    {{ product.name }}
                                </a>
                            </div>


                            <!-- Start Modal Add cart  Модально окно корзины-->
                            <ModalAddCart :brand="product.brand.name" :imgUrl="product.image_prev[0].url"
                                          :id="product.id" :name="product.name" :price="product.price"></ModalAddCart>

                        </template>

                        <template v-if="!products.length">
                            <h4>Идет загрузка!</h4>
                        </template>

                        <template v-if="!filteredProductsAndCategory.length && products.length">
                            <h4>Таких продуктов нет!</h4>
                        </template>

                    </div>

                    <!-- End Single Default Product -->
                    <!-- Start Single Default Product -->


                </div>

            </div>
        </div>


        <!--        Пагинация-->
        <div class="page-pagination">
            <!--            <span>Showing 1-12 of 13 item(s)</span>-->
            <ul class="page-pagination__list">
                <li class="page-pagination__item">
                    <a class="page-pagination__link btn btn--gray" href="#"
                       @click.prevent="(prev) ? getProducts(prev):''"><i class="icon-chevron-left"></i>
                        Previous</a>
                </li>
                <!--                <li class="page-pagination__item"><a class="page-pagination__link active btn btn&#45;&#45;gray" href="#">1</a>-->
                <!--                </li>-->
                <!--                <li class="page-pagination__item"><a class="page-pagination__link btn btn&#45;&#45;gray" href="#">2</a></li>-->
                <li class="page-pagination__item">
                    <a class="page-pagination__link btn btn--gray" href="#"
                       @click.prevent="(next) ? getProducts(next):''">Next<i class="icon-chevron-right"></i></a>
                </li>
            </ul>
        </div>


    </div>

</template>

<script>

import Sorting from "./Sorting";
import ModalAddCart from "./ModalAddCart";
import Sidebar from "./Sidebar/Sidebar";


export default {
    components: {
        Sidebar,
        Sorting,
        ModalAddCart
    },

    name: "Products",

    props: ['search_text', 'bycategory'],


    data() {
        return {
            products: [],
            search: this.search_text,
            sort: null,
            byCategoryId: this.bycategory,
            //currentPage: 3
            page: '/api/products',
            next: '',
            prev: '',
            cart: JSON.parse(localStorage.getItem('cart')),
            idsCartt: []


        }
    },

    mounted() {
        this.getProducts(this.page)
        this.idsCart()
    },

    methods: {

        getProducts(page) {
            axios.get(page)
                .then(res => {
                    this.products = res.data.data
                    console.log(this.products);
                    this.next = res.data.links.next
                    this.prev = res.data.links.prev
                })
        },


        sorting(value) {
            this.sort = value
        },

        filteredProducts_(sear) {
            // let sear = this.search_text
            let sort
            console.log(this.sort);
            switch (this.sort) {
                case 1 :
                    console.log('--');
                    sort = (a, b) => (a.name > b.name) ? 1 : -1;
                    break;
                case 2 :
                    console.log('--');
                    sort = (a, b) => (a.name < b.name) ? 1 : -1;
                    break;
                case 3:
                    console.log('-');
                    sort = (a, b) => (a.price > b.price) ? 1 : -1;
                    break;
                case 4 :
                    console.log('--');
                    sort = (a, b) => (a.price < b.price) ? 1 : -1;
                    break;
                default:
                    console.log('---');
                    sort = (a, b) => (a.price === b.price) ? 1 : -1;
                    break;
            }

            return this.products.sort(sort).filter((product) => {
                if (sear === "") return true;
                else return product.name.toLowerCase().indexOf(sear.toLowerCase()) > -1;
            })

        },

        addToCart(id, name, price, quantity, image) {
            let toCart = []

            if (this.cart && this.cart.find(item => item.id === id) !== undefined) {
                console.log('++--')
                return 0
            }
            if (!this.cart) {
                toCart[0] = {id, name, price, quantity, image}
                localStorage.setItem('cart', JSON.stringify(toCart))
                // console.log(toCart);
            } else {
                this.cart.push({id, name, price, quantity, image})
                localStorage.setItem('cart', JSON.stringify(this.cart))
            }

            this.cart = JSON.parse(localStorage.getItem('cart'))
            this.idsCartt.push(id)
            console.log('/////uiygioyuiy/==');
        },

        removeFromCart(id) {

            let cart_ = this.cart.filter(item =>{
                return item.id !== id
            })
            localStorage.setItem('cart', JSON.stringify(cart_))
            this.cart = cart_

            let idsCartt_ = this.idsCartt.filter(item =>{
                return item !== id
            })
            this.idsCartt = idsCartt_


            console.log(cart_);
            console.log(this.idsCartt);
        },


        idsCart() {

            if (!this.cart) {
                return 0
            } else {
                this.cart.forEach(res => {
                    this.idsCartt.push(res.id)
                })
            }
            console.log(this.idsCartt);
        },

        inCart(id) {
            if (!this.idsCartt) {
                return 0
            } else {
                if (this.idsCartt.indexOf(id) === -1) {
                    return 0
                } else {
                    return true
                }
            }
        }

    },


    computed: {
        filteredProductsAndCategory() {
            let search = this.search_text
            let prod = this.filteredProducts_(search)

            return prod.filter((product) => {
                if (this.bycategory === null) return true;
                return product.sub_category_id === this.bycategory;
            })

        },


        // filteredProducts() {
        //     let sear = this.search_text
        //     let sort
        //     console.log(this.sort);
        //     switch (this.sort) {
        //         case 1 :
        //             console.log('--');
        //             sort = (a, b) => (a.name > b.name) ? 1 : -1;
        //             break;
        //         case 2 :
        //             console.log('--');
        //             sort = (a, b) => (a.name < b.name) ? 1 : -1;
        //             break;
        //         case 3:
        //             console.log('-');
        //             sort = (a, b) => (a.price > b.price) ? 1 : -1;
        //             break;
        //         case 4 :
        //             console.log('--');
        //             sort = (a, b) => (a.price < b.price) ? 1 : -1;
        //             break;
        //         default:
        //             console.log('---');
        //             sort = (a, b) => (a.price === b.price) ? 1 : -1;
        //             break;
        //     }
        //
        //
        //      return this.products.sort(sort).filter((product) => {
        //         if (sear === "") return true;
        //          else return product.name.toLowerCase().indexOf(sear.toLowerCase()) > -1;
        //      })
        //
        //
        //
        // }
    },

    watch: {}


}

</script>

<style scoped>

</style>
