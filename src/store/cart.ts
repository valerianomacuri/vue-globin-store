import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { Product } from "../shared/types";

const saveProducts = (products: Product[]) => {
  localStorage.setItem("products", JSON.stringify(products));
};

export const useCartStore = defineStore("cart", () => {
  const products = ref<Product[]>([]);

  onMounted(() => {
    try {
      const storedProducts = localStorage.getItem("products");
      const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
      products.value = parsedProducts;
    } catch (error) {}
  });

  function totalPrice() {
    return products.value.reduce(
      (total: number, product) => total + Number(product.price),
      0
    );
  }

  function addToCart(newProduct: Product) {
    const isThereProduct = products.value.find(
      (product) => newProduct.name === product.name
    );
    if (isThereProduct) return;
    products.value = [...products.value, newProduct];
    saveProducts(products.value);
  }

  function removeFromCart(product: Product) {
    products.value = products.value.filter((p) => p.name !== product.name);
    saveProducts(products.value);
  }

  function clearCart() {
    products.value = [];
    saveProducts([]);
  }

  return {
    products,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
  };
});
