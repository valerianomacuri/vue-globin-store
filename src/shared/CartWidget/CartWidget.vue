<template>
    <router-link to="/cart" class="nes-badge is-icon">
        <span class="is-error">{{ products?.length || 0 }}</span>
        <img data-testid="cart" :src="cart" width="64" height="64" alt="cart" />
    </router-link>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../../store/cart';
import cart from "./cart.svg";

const cartStore = useCartStore();
const { products } = storeToRefs(cartStore)
</script>

<style scoped>
</style>