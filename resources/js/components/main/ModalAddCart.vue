<template>
<div>

    <div class="modal fade"  :id="'modalAddCart'+id" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered modal-xl" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center">Товар успешно добавлен в вашу карзину покупок!!!</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="modal__product-img">
                                            <img class="img-fluid" :src="imgUrl" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" >
                                        <span class="modal__product-title">{{ name }}</span>
                                        <span class="modal__product-price m-tb-15">₽ {{ price }}</span>
                                        <ul class="modal__product-info ">
                                            <li>Брэнд:<span> {{ brand }} </span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 modal__border">
                                <span class="modal__product-cart-item">В вашей корзине 3 товар(а).</span>
                                <ul class="modal__product-shipping-info m-tb-15">
                                    <li>Общая стоимость заказа:<span>₽88999</span></li>
                                </ul>

                                <div class="modal__product-cart-buttons mb-4">
                                    <a href="#" class="btn btn--box btn--large btn--blue btn--uppercase btn--weight" data-dismiss="modal">Продолжить покупки</a>
                                    <router-link :to="{name: 'main.cart'}" class="btn btn--box btn--large btn--blue btn--uppercase btn--weight " data-dismiss="modal">Пеs в корзину</router-link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> <!-- End Modal Add cart -->

</div>
</template>

<script>
export default {
    name: "ModalAddCart",

    props:['id', 'brand', 'name', 'price', 'imgUrl'],

}
</script>

<style scoped>

</style>
