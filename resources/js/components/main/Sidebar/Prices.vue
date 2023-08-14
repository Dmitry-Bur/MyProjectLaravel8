<template>
    <div class="sidebar__widget gray-bg">
        <div class="sidebar__box">
            <h5 class="sidebar__title">Цена</h5>
        </div>
        <div class="sidebar__price-filter ">
            <div id="slider-range" class=""></div>
            <div class="slider__price-filter-input d-flex justify-content-between">
                <input type="number"  value="1" class="price-range-field" />
                <input type="number"  value="9000" class="price-range-field" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Prices"
}
</script>

<style scoped>

</style>
