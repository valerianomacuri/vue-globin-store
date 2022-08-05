<template>
    <div class="cart-item">
        <img :style="{ imageRendering: 'pixelated' }" :src="product.image" width="64" height="64" alt={product.name} />
        <p>{{ product.name }}</p>
        <p>{{ product.price }} Zm</p>
        <button @click="emit('remove-from-cart', product)" class="nes-btn is-error">
            Remove
        </button>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '../shared/types';

interface CartItemProps {
    product: Product;
}
const props = defineProps<CartItemProps>()

const emit = defineEmits<{
    (event: 'remove-from-cart', product: Product): void
}>()

</script>

<style scoped>
</style>