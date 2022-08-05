<template>
    <template v-if="!products.length">
        Your cart is empty.
        <router-link to="/">Back to main page.</router-link>
    </template>
    <section v-else class="nes-container with-title is-centered">
        <h3 class="title">Cart Summary</h3>
        <div class="cart-items">
            <CartItem v-for="datum in products" :product="datum" :key="datum.name" @remove-from-cart="removeFromCart" />
            <p>Total: {{ totalPrice() }} Zm</p>
        </div>
        <div>
            <router-link to="/checkout">
                <button class="nes-btn is-primary">Go to checkout</button>
            </router-link>
        </div>
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cart';
import CartItem from './CartItem.vue';

const cartStore = useCartStore();
const { products } = storeToRefs(cartStore)
const { totalPrice, removeFromCart } = cartStore 
</script>

<style scoped>
</style>