<template>
    <div class="row">
        <div class="col-12">
            <!-- login area start -->
            <div class="login-register-area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                            <div class="login-register-wrapper">
                                <div class="login-register-tab-list nav">
                                    <a class="active" data-toggle="tab">
                                        <h4>Регистрация</h4>
                                    </a>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane-active">
                                        <div class="login-form-container">
                                            <div class="login-register-form">
                                                <form action="#" method="post">
                                                    <div class="form-box__single-group">
                                                        <input type="text" id="form-register-username" placeholder="Username">
                                                    </div>
                                                    <div class="form-box__single-group">
                                                        <input type="email" id="form-uregister-sername-email" placeholder="Enter email">
                                                    </div>
                                                    <div class="form-box__single-group m-b-20">
                                                        <input type="password" id="form-register-username-password" placeholder="Enter password">
                                                    </div>
                                                    <button class="btn btn--box btn--small btn--blue btn--uppercase btn--weight" type="submit">REGISTER</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- login area end -->
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration"
}
</script>

<style scoped>

</style>
