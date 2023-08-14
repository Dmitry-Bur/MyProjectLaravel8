<template>
    <div class="header__top-content--right">
        <div class="user-info user-set-role">
            <a class="user-set-role__button" href="#" data-toggle="dropdown" aria-haspopup="true">Личный кабинет<i class="fal fa-chevron-down"></i></a>
            <ul class="expand-dropdown-menu dropdown-menu">
                <li><a href="my-account.html">Мой аккаунт</a></li>
                <li><router-link :to="{name: 'main.login'}">Войти</router-link></li>
                <li><router-link :to="{name: 'main.registration'}">Регистрация</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "MyAccount"
}
</script>

<style scoped>

</style>
