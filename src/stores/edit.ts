import { ref } from "vue";
import { defineStore } from "pinia";

export const useEditStore = defineStore("edit",() => {
    const selectedDesign = ref({
        id: "",
        name: "",
        url: ""
    });
    const isPublished = ref(false);

    function $reset() {
        selectedDesign.value = {
            id: "",
            name: "",
            url: ""
        };
        isPublished.value = false;
    }

  return { selectedDesign, isPublished, $reset };
});