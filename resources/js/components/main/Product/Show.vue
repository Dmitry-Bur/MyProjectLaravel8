<template>

    <div class="row" v-if="product">
        <!-- Start Product Details Gallery -->
        <div class="col-12">
            <div class="product-details">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-gallery-box m-b-60">
                            <div class="product-image--large overflow-hidden">
                                <img class="img-fluid" id="img-zoom" :src="images[0].url"
                                     data-zoom-image="main/assets/img/product/gallery/gallery-large/product-gallery-large-1.jpg"
                                     alt="">
                            </div>
                            <div class="pos-relative m-t-30">
                                <div id="gallery-zoom"
                                     class="product-image--thumb product-image--thumb-horizontal overflow-hidden swiper-outside-arrow-hover m-lr-30">
                                    <div class="swiper-wrapper">
                                        <div v-for="image in images" class="swiper-slide w-25">
                                            <a data-image="main/assets/img/product/gallery/gallery-large/product-gallery-large-2.jpg"
                                               data-zoom-image="main/assets/img/product/gallery/gallery-large/product-gallery-large-2.jpg">
                                                <img class="img-fluid" :src="image.url" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-buttons">
                                    <!-- Add Arrows -->
                                    <div class="swiper-button-next gallery__nav gallery__nav--next"><i
                                        class="fal fa-chevron-right"></i></div>
                                    <div class="swiper-button-prev gallery__nav gallery__nav--prev"><i
                                        class="fal fa-chevron-left"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-details-box">
                            <h5 class="section-content__title">{{ product.name }}</h5>
                            <span class="text-reference">Брэнд: {{ product.brand.name }}</span>
                            <div class="review-box m-t-10 m-b-15">
                                <a href="#product-review" class="link--gray link--icon-left  m-b-5"><i
                                    class="fal fa-comment-dots"></i>Читать отзывы (1) </a>
                                <a href="#modalReview" data-toggle="modal" class="link--gray link--icon-left m-b-5"><i
                                    class="fal fa-edit"></i> Написать отзыв</a>
                            </div>
                            <div class="product__price">
                                <span class="product__price-reg">₽{{ product.price }}</span>
                            </div>
                            <div class="product-var p-t-30">
                                <div class="product-quantity product-var__item">
                                    <span class="product-var__text">Количество</span>
                                    <div class="product-quantity-box">
                                        <div class="quantity">
                                            <input type="number" min="1" max="9" step="1" v-model="quantity">
                                        </div>
                                        <a v-if="!inCart(product.id)" href="#" data-toggle="modal" data-dismiss="modal"
                                           @click="addToCart(product.id, product.name,product.price, quantity, image_prev)"
                                           class="btn btn--box btn--small btn--blue btn--uppercase btn--weight m-l-20">Добавить
                                            в корзину</a>
                                        <a v-if="inCart(product.id)" href="#" data-toggle="modal" data-dismiss="modal"
                                           @click="removeFromCart(product.id)"
                                           class="btn btn--box btn--small btn-danger btn--uppercase btn--weight  m-l-20">Удалить
                                            из корзины <i class="fa fa-times"></i></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- End Product Details Gallery -->

        <!-- Start Product Details Tab -->
        <div class="col-12">
            <div class="product product--1 border-around product-details-tab-area">
                <div class="row">
                    <div class="col-12">
                        <div class="section-content--border">
                            <ul class="tablist tablist--style-black tablist--style-title tablist--style-gap-70 nav">
                                <li><a class="nav-link active" data-toggle="tab" href="#product-desc">Описание
                                    продукта</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="product-details-tab-box m-t-50">
                            <div class="tab-content">
                                <!-- Start Tab - Product Description -->
                                <div class="tab-pane show active" id="product-desc">
                                    <div class="para__content" v-html="product.description ">
                                    </div>
                                </div>  <!-- End Tab - Product Description -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  <!-- End Product Details Tab -->


    </div>
    <!-- End Product Details Tab -->
</template>

<script>
export default {
    name: "Show",

    data() {
        return {
            product: null,
            images: [],
            image_prev: null,
            quantity: 1,

            cart: JSON.parse(localStorage.getItem('cart')),
            idsCartt: []
        }
    },

    mounted() {
        this.getProduct()
        this.idsCart()
    },

    methods: {
        getProduct() {
            console.log(888999);
            console.log(this.$route.params.id);
            axios.get(`/api/show/${this.$route.params.id}`)
                .then(res => {
                    this.product = res.data.data
                    this.images = res.data.data.images
                    this.image_prev = res.data.data.image_prev[0].url
                    delete this.product['images']
                    delete this.product['image_prev']
                    this.quantity =this.quantityInCart // присваиваем к инпуту количество если есть этот товар в корзине
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
        }
    },
    computed:{
        quantityInCart(){
            let quantity
            this.cart.filter(item =>{
                if( item.id === this.product.id){
                    console.log(item.id)
                    console.log('w')
                    quantity = item.quantity
                }else{
                    quantity = 1
                }
            })
            return quantity
        }
    },



}
</script>

<style>

</style>
