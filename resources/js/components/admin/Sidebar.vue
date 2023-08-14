<template>
<div>


    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'admin.categories'}">
                    <i class="mdi mdi-buffer menu-icon"></i>
                    <span class="menu-title">Категории</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'admin.subcategories'}">
                    <i class="mdi mdi-layers-outline menu-icon"></i>
                    <span class="menu-title">Подкатегории</span>
                </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{name: 'admin.products'}">
                    <i class="mdi mdi-desktop-tower menu-icon"></i>
                    <span class="menu-title">Продукция</span>
                </router-link>
            </li>
        </ul>
    </nav>

</div>
</template>

<script>
export default {
    name: "Sidebar"
}
</script>

<style scoped>

</style>
