import { defineStore } from "pinia";
import { ref } from "vue";

export const useMain = defineStore("main", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };

  return { count, increment };
});
