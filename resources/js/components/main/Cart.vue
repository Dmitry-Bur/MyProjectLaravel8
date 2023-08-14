<template>
    <div class="row">
        <div class="col-12">
            <div class="section-content">
                <h5 class="section-content__title">Ваша корзина покупок</h5>
            </div>
            <!-- Start Cart Table -->
            <div class="table-content table-responsive cart-table-content m-t-30">
                <table>
                    <thead class="gray-bg" >
                    <tr>
                        <th>Изображение</th>
                        <th>Имя продукта</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Общая сумма</th>
                        <th>Удалить</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="cartProduct in cartProducts">
                        <td class="product-thumbnail">
                            <router-link :to="{name: 'main.show', params:{id: cartProduct.id}}">
                                <img class="img-fluid" :src="cartProduct.image" :alt="cartProduct.name">
                            </router-link>
                        </td>
                        <td class="product-name"><a href="#">{{ cartProduct.name }}</a></td>
                        <td class="product-price-cart"><span class="amount">₽{{cartProduct.price}}</span></td>
                        <td class="product-quantities">
                            <div class="quantity d-inline-block">
                                <input v-model="cartProduct.quantity" type="number" min="1" step="1" value="1">
                            </div>
                        </td>
                        <td class="product-subtotal">₽{{cartProduct.price*cartProduct.quantity }}</td>
                        <td class="product-remove">
                            <a href="#" @click.prevent="removeFromCart(cartProduct.id)"><i class="fa fa-times"></i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>  <!-- End Cart Table -->
            <!-- Start Cart Table Button -->
            <div class="cart-table-button m-t-10">
                <div class="cart-table-button--left">
                    <a href="#" class="btn btn--box btn--large btn--gray btn--uppercase btn--weight m-t-20">Очистить корзину</a>
                </div>
                <div class="cart-table-button--right">
                    <a href="#" class="btn btn--box btn--large btn--gray btn--uppercase btn--weight m-t-20 m-r-20">Продолжить покупки</a>
                    <a href="#" class="btn btn--box btn--large btn--blue btn--uppercase btn--weight m-t-20">Заказать</a>

                </div>

            </div>  <!-- End Cart Table Button -->
        </div>

        <div class="col-lg-4 col-md-6 offset-8">
                <h4 class="grand-total m-tb-25" v-if="cartProducts">Общая сумма заказа <span>₽{{ orderPrice }}</span></h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cart",
    data(){
      return{
          cartProducts: JSON.parse(localStorage.getItem('cart')),
          totalPrices: [],
          quantity: null
      }
    },


    mounted() {
        this.getCart()
    },

    methods:{
        getCart(){
            let pr = JSON.stringify(this.product)
           // localStorage.setItem('_cart',pr)
        },

        removeFromCart(id) {

            let cart_ = this.cartProducts.filter(item =>{
                return item.id !== id
            })
            localStorage.setItem('cart', JSON.stringify(cart_))
            this.cartProducts = cart_

            console.log(cart_);

        },


    },

    computed:{
        orderPrice: function (){
            let Sum = 0
            if(this.cartProducts){
            this.cartProducts.forEach(pr =>{
                Sum = Sum+pr.quantity*pr.price
            })
                return Sum
            }else{
                return 0
            }

        }
    },

    watch:{

        cartProducts: {
            handler: function (newVal, oldVal) {
                this.cartProducts = newVal
                localStorage.setItem('cart' , JSON.stringify(newVal))
        },
            deep: true
    }
    }
}
</script>

<style scoped>

</style>
