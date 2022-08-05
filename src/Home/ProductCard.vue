<template>
    <div class="nes-container is-rounded item">
        <img :style="{ 'image-rendering': 'pixelated' }" :src="datum.image" width="64" height="64" alt="globin">
        <p>{{ datum.name }}</p>
        <p>{{ datum.price }} Zm</p>
        <button v-if="isInCart" disabled class="nes-btn is-disabled">
            Added to cart
        </button>
        <button v-else class="nes-btn is-primary" @click="addToCart(datum)">
            Add to cart
        </button>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import type { Product } from '../shared/types';
import { useCartStore } from "../store/cart"

interface ProductCardProps {
    datum: Product;
}

const props = defineProps<ProductCardProps>()

const cartStore = useCartStore()

const { products } = storeToRefs(cartStore)
const { addToCart } = cartStore

const isInCart = computed(
    () => !!products.value.find((product) => props.datum.name === product.name)
);
</script>

<style scoped>
</style>