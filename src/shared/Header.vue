<template>
    <header>
        <div class="container">
            <div class="nav-brand">
                <router-link to="/">
                    <h1>Globin Store</h1>
                </router-link>
                <p>Everything for your Typescript adventure</p>
            </div>
            <div class="cart">
                <CartWidget />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import CartWidget from './CartWidget/CartWidget.vue';

</script>

<style scoped>
</style>