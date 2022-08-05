<template>
    <ul className="nes-list is-circle">
        <li v-for="product in products" :key="product.name">{{ product.name }}</li>
    </ul>
</template>

<script setup lang="ts">
import type { Product } from '../shared/types';

interface CheckoutListProps {
    products: Product[];
}

const props = defineProps<CheckoutListProps>()

</script>

<style scoped>
</style>