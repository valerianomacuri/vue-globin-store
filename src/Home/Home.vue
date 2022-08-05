<template>
    <template v-if="isLoading">
        Loading...
    </template>
    <template v-else-if="error">
        Error
    </template>
    <template v-else>
        <section v-for="{ name, items } in categories" :key="name" class="nes-container with-title showcase">
            <h2 class="title">{{ name }}</h2>
            <section class="items">
                <ProductCard v-for="item in items" :key="item.name" :datum="item" />
            </section>
        </section>
    </template>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import { useProducts } from './useProducts';

const { categories, error, isLoading } = useProducts()

</script>

<style scoped>
</style>