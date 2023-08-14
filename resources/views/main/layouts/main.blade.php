<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <title>Kinle | Responsive eCommerce HTML Template</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- ::::::::::::::Favicon icon::::::::::::::-->
    <link rel="shortcut icon" href="{{asset('main/assets/img/favicon.png')}}" type="image/png">

    <!-- ::::::::::::::All CSS Files here :::::::::::::: -->

    <!-- Vendor CSS Files -->
    <link rel="stylesheet" href="{{asset('main/assets/css/vendor/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/vendor/fontawesome.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/vendor/plaza-icon.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/vendor/bootstrap.min.css')}}">

    <!-- Plugin CSS Files -->
    <link rel="stylesheet" href="{{asset('main/assets/css/plugin/swiper.min.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/plugin/material-scrolltop.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/plugin/price_range_style.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/plugin/in-number.css')}}">
    <link rel="stylesheet" href="{{asset('main/assets/css/plugin/venobox.min.css')}}">


    <!-- Main Style CSS File -->
    <link rel="stylesheet" href="{{asset('main/assets/css/main.css')}}">
</head>


<body>
<div id="app">
<!-- ::::::  Start  Header Section  ::::::  -->
@include('main.includes.header')
<!-- ::::::  End  Header Section  ::::::  -->

<!-- ::::::  Start  Breadcrumb Section  ::::::  -->
<div class="page-breadcrumb mb-3 p-4">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <ul class="page-breadcrumb__menu">
                    <li class="page-breadcrumb__nav"><a href="#">Home</a></li>
                    <li class="page-breadcrumb__nav active">Shop List Left Sidebar Page</li>
                </ul>
            </div>
        </div>
    </div>
</div> <!-- ::::::  End  Breadcrumb Section  ::::::  -->

<!-- ::::::  Start  Main Container Section  ::::::  -->
<main id="main-container" class="main-container">
    <div class="container">

            <!-- Start Leftside - Sidebar -->
{{--            @include('main.includes.sidebar')--}}
           <!-- End Left Sidebar -->

            <!-- Start Rightside - Content -->
            @yield('content')
             <!-- Start Rightside - Content -->


    </div>
</main> <!-- ::::::  End  Main Container Section  ::::::  -->

<!-- ::::::  Start  Footer Section  ::::::  -->
@include('main.includes.footer')
 <!-- ::::::  End  Footer Section  ::::::  -->

<!-- material-scrolltop button -->
<button class="material-scrolltop" type="button"></button>


<!-- Start Modal Quickview cart -->
<div class="modal fade" id="modalQuickView" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-center">Quick View</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="product-gallery-box m-b-60">
                                <div class="modal-product-image--large overflow-hidden">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-large/product-gallery-large-1.jpg')}}" alt=""></div>
                                        <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-large/product-gallery-large-2.jpg')}}" alt=""></div>
                                        <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-large/product-gallery-large-3.jpg')}}" alt=""></div>
                                        <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-large/product-gallery-large-4.jpg')}}" alt=""></div>
                                        <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-large/product-gallery-large-5.jpg')}}" alt=""></div>
                                    </div>
                                </div>
                                <div class="pos-relative">
                                    <div class="modal-product-image--thumb overflow-hidden swiper-outside-arrow-hover m-lr-30">
                                        <div class="swiper-wrapper ">
                                            <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-thumb/product-gallery-thumb-1.jpg')}}" alt=""></div>
                                            <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-thumb/product-gallery-thumb-2.jpg')}}" alt=""></div>
                                            <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-thumb/product-gallery-thumb-3.jpg')}}" alt=""></div>
                                            <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-thumb/product-gallery-thumb-4.jpg')}}" alt=""></div>
                                            <div class="swiper-slide"><img class="img-fluid" src="{{asset('main/assets/img/product/gallery/gallery-thumb/product-gallery-thumb-5.jpg')}}" alt=""></div>
                                        </div>
                                    </div>
                                    <div class="swiper-buttons">
                                        <!-- Add Arrows -->
                                        <div class="swiper-button-next gallery__nav gallery__nav--next"><i class="fal fa-chevron-right"></i></div>
                                        <div class="swiper-button-prev gallery__nav gallery__nav--prev"><i class="fal fa-chevron-left"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product-details-box">
                                <h5 class="section-content__title">Canon Vista Fhd 4k Camcorder 2214c002</h5>
                                <span class="text-reference">Reference: Jhon Doe</span>
                                <div class="review-box">
                                    <ul class="product__review m-t-10 m-b-15">
                                        <li class="product__review--fill"><i class="icon-star"></i></li>
                                        <li class="product__review--fill"><i class="icon-star"></i></li>
                                        <li class="product__review--fill"><i class="icon-star"></i></li>
                                        <li class="product__review--fill"><i class="icon-star"></i></li>
                                        <li class="product__review--blank"><i class="icon-star"></i></li>
                                    </ul>
                                </div>
                                <div class="product__price">
                                    <span class="product__price-del">$35.90</span>
                                    <span class="product__price-reg">$31.69</span>
                                </div>
                                <div class="product__desc m-t-25 m-b-30">
                                    <p>The ATH-S700BT offers clear, full-bodied audio reproduction with Bluetooth® wireless operation. The headphones are equipped with a mic, and music and volume controls, allowing you to ...</p>
                                </div>
                                <div class="product-var p-t-30">
                                    <div class="product-size product-var__item">
                                        <span class="product-var__text">Size</span>
                                        <select id="product-size">
                                            <option value="small">S</option>
                                            <option value="medium">M</option>
                                            <option value="large">L</option>
                                            <option value="extraLarge">XL</option>
                                            <option value="doubleLarge">XXL</option>
                                        </select>
                                    </div>
                                    <div class="product-color product-var__item">
                                        <span class="product-var__text">Color</span>
                                        <div class="sidebar__color-filter ">
                                            <label class="product-color"><input name="product-color" type="radio" class="product-color-select" value="color-red"><span></span></label>
                                            <label class="product-color" ><input name="product-color" type="radio" class="product-color-select"   value="color-green" checked><span></span></label>
                                            <label class="product-color" ><input name="product-color" type="radio" class="product-color-select"   value="color-blue"><span></span></label>
                                        </div>
                                    </div>
                                    <div class="product-quantity product-var__item">
                                        <span class="product-var__text">Quantity</span>
                                        <div class="product-quantity-box">
                                            <div class="quantity">
                                                <input type="number" min="1" max="9" step="1" value="1">
                                            </div>
                                            <a href="#modalAddCart" data-toggle="modal" data-dismiss="modal" class="btn btn--box btn--small btn--blue btn--uppercase btn--weight m-l-20">Add to cart</a>
                                        </div>

                                    </div>
                                </div>
                                <div class="product-links ">
                                    <div class="product-social m-tb-30">
                                        <span>Share</span>
                                        <ul class="product-social-link">
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                            <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        </ul>
                                    </div>
                                    <a href="wishlist.html" class="link--gray link--icon-left shop__wishlist-icon m-b-5"><i class="icon-heart"></i>Add To Wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> <!-- End Modal Quickview cart -->

</div>
<!-- ::::::::::::::All Javascripts Files here ::::::::::::::-->

<!-- Vendor JS Files -->
<script src="{{ asset('js/app.js') }}" defer></script>
<script src="{{asset('main/assets/js/vendor/jquery-3.5.1.min.js')}}" ></script>
<script src="{{asset('main/assets/js/vendor/modernizr-3.7.1.min.js')}}"></script>
<script src="{{asset('main/assets/js/vendor/jquery-ui.min.js')}}"></script>
<script src="{{asset('main/assets/js/vendor/bootstrap.bundle.js')}}"></script>

<!-- Plugins JS Files -->
<script src="{{asset('main/assets/js/plugin/swiper.min.js')}}"></script>
<script src="{{asset('main/assets/js/plugin/jquery.countdown.min.js')}}"></script>
<script src="{{asset('main/assets/js/plugin/material-scrolltop.js')}}"></script>
<script src="{{asset('main/assets/js/plugin/price_range_script.js')}}"></script>
<script src="{{asset('main/assets/js/plugin/in-number.js')}}"></script>
<script src="{{asset('main/assets/js/plugin/jquery.elevateZoom-3.0.8.min.js')}}"></script>
<script src="{{asset('main/assets/js/plugin/venobox.min.js')}}"></script>

<!-- Use the minified version files listed below for better performance and remove the files listed above -->
<!-- <script-->

<!-- Main js file that contents all jQuery plugins activation. -->
<script src="{{asset('main/assets/js/main.js')}}"></script>

</body>

</html>
