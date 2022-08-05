<template>
    <Loader v-if="isLoading" />
    <div v-else-if="!order">Couldn't load order info.</div>
    <section v-else class="nes-container with-title">
        <h1 class="title">Order Summary</h1>
        <div class="nes-container is-rounded order-summary-container">
            <ul class="nes-list is-circle">
                <li v-for="product in order?.products" :key="product.name">{{ product.name }}</li>
            </ul>
        </div>
        <router-link to="/">
            <button class="nes-btn is-primary">Back to the store</button>
        </router-link>
    </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useOrder } from './useOrder';

const route = useRoute()
const { isLoading, order } = useOrder(route.query.orderId as string || "-1")
</script>

<style scoped>
</style>