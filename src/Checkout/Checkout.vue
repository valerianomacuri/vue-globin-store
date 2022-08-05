<template>
    <section class="nes-container with-title">
        <h1 class="title">Checkout</h1>
        <div class="nes-container is-rounded checkout-list-wrapper">
            <p>You are going to buy:</p>
            <CheckoutList :products="products" />
            <p>Total: {{ totalPrice() }} Zm</p>
        </div>
        <p>Enter your payment credentials:</p>
        <CheckoutForm :submit="submitCheckout" />
    </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useCartStore } from '../store/cart';
import { postCheckout } from '../utils/api';
import CheckoutForm from './CheckoutForm.vue';
import CheckoutList from './CheckoutList.vue';

const cartStore = useCartStore()
const { products } = storeToRefs(cartStore)
const { totalPrice, clearCart } = cartStore

const router = useRouter();
const submitCheckout = async () => {
    const { orderId } = await postCheckout({
        products: products.value,
    });
    clearCart();
    router.push(`/order?orderId=${orderId}`);
};

</script>

<style scoped>
</style>