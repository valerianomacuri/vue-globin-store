import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Home/Home.vue";
import Cart from "../Cart/Cart.vue";
import Checkout from "../Checkout";
import OrderSummary from "../OrderSummary/OrderSummary.vue";
const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/order",
    name: "order",
    component: OrderSummary,
  },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes,
});
