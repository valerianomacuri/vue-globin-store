import { onMounted, ref } from "vue";
import { Category } from "../shared/types";
import { getProducts } from "../utils/api";

export const useProducts = () => {
  const categories = ref<Category[]>([]);
  const isLoading = ref(true);
  const error = ref<any>(false);

  onMounted(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        categories.value = data.categories || [];
      } catch (err) {
        error.value = err;
      } finally {
        isLoading.value = false;
      }
    };
    fetchProducts();
  });

  return { categories, isLoading, error };
};
