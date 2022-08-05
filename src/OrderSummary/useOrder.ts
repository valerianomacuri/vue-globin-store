import { onMounted, reactive, ref } from "vue";
import { Product } from "../shared/types";
import { getOrder } from "../utils/api";

export interface Order {
  products: Product[];
}

const getOrderId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("orderId");
};

export const useOrder = (orderId = getOrderId(), apiGetOrder = getOrder) => {
  const order = ref<Order>();
  const isLoading = ref(true);

  onMounted(() => {
    const fetchData = async () => {
      try {
        if (!orderId) {
          return;
        }
        const newOrder = await apiGetOrder(orderId);
        if (newOrder.success) {
          order.value = newOrder;
        }
        isLoading.value = false;
      } catch (error) {}
    };
    fetchData();
  });

  return { order, isLoading };
};
