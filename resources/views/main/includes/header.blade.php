<header>
    <!-- ::::::  Start Large Header Section  ::::::  -->
    <div class="header header--1" id="app">
        <!-- Start Header Top area -->
        <div class="header__top header__top--style-1">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__top-content">
                            <div class="header__top-content--left">
                                <div class="contact_cms">
                                    <span class="cms1">Telephone Enquiry: </span>
                                    <span class="cms2">(012) 800 456 789 - 987</span>
                                </div>
                            </div>
                            <my-account></my-account>
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- Start Header Top area -->

        <!-- Start Header Middle area -->
        <div class="header__middle header__top--style-1 p-tb-30">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                        <div class="header__logo">

<router-link :to="{name: 'main.home'}">
                                <img src="{{asset('main/assets/img/logo/logo-color.jpg')}}" alt="" class="header__logo-img">
</router-link>
                        </div>
                    </div>
                    <div class="col-lg-9">

                          <main-header  @tosearch_="Search"></main-header>

                    </div>
                </div>
            </div>
        </div> <!-- End Header Middle area -->

        <!-- Start Header Menu Area -->
        <div class="header-menu">
            <div class="container">
                <div class="row col-12">
                    <nav>
                        <ul class="header__nav">
                            <!--Start Single Nav link-->
                            <li class="header__nav-item pos-relative">
                                <a href="{{route('home','')}}" class="header__nav-link">Home <i class=""></i></a>
                                <!--Single Dropdown Menu-->
                                <!--Single Dropdown Menu-->
                            </li> <!-- End Single Nav link-->
                        </ul>
                    </nav>
                </div>
            </div>
        </div> <!-- End Header Menu Area -->
    </div> <!-- ::::::  End Large Header Section  ::::::  -->




</header>

