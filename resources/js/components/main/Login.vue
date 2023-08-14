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
                                    <a class="active" data-toggle="tab" href="#lg1">
                                        <h4>Войти</h4>
                                    </a>
                                </div>
                                <div class="tab-content">
                                    <div id="lg1" class="tab-pane active">
                                        <div class="login-form-container">
                                            <div class="login-register-form">

                                                    <div class="form-box__single-group">
                                                        <input v-model="email" type="text" id="form-username" placeholder="Email">
                                                    </div>
                                                    <div class="form-box__single-group mb-3">
                                                        <input v-model="password" type="password" id="form-username-password" placeholder="Пароль">
                                                    </div>
                                                    <div class="">
                                                        <button @click="login()" class="btn btn--box btn--small btn--blue btn--uppercase btn--weight" >ВОЙТИ</button>
                                                    </div>
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
    name: "Login",

    data()
    {
        return{
            email: null,
            password: null
        }
    },

    methods:{
        login(){
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login',{email: this.email, password: this.password})
                    .then( r =>{
                        console.log(r);
                    }).catch(err =>{
                    console.log(err.response);
                })
            })
        }
    }

}
</script>

<style scoped>

</style>
