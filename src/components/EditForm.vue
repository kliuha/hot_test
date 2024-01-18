<script setup lang="ts">
import { computed, onBeforeUnmount } from 'vue';
import DragDrop from "./DragDrop.vue";
import { useEditStore } from "@/stores/edit";

const editStore = useEditStore();

const sliderText = computed(() => {
  return editStore.isPublished ? "Опублікований" : "Неопублікований";
});

onBeforeUnmount(() => {
  editStore.$reset();
});
</script>

<template>
    <div class="form-wrapper">
        <div class="form-header">
            <label class="switch">
                <input
                  type="checkbox"
                  v-model="editStore.isPublished">
                <span class="slider round"></span>
            </label>
            <span class="design-status">{{ sliderText }}</span>
        </div>
        <DragDrop />
        <div class="form-fields">
          <input
            v-model="editStore.selectedDesign.id"
            class="id-field"
            type="number"
            placeholder="###">
          <input
            v-model="editStore.selectedDesign.name"
            class="name-field"
            type="text"
            placeholder="Назва дизайну">
          <input
            v-model="editStore.selectedDesign.url"
            class="url-field"
            type="url"
            placeholder="https://design###.horoshop.ua/">
        </div>
    </div>
</template>

<style scoped>
.form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.form-header {
    display: flex;
    align-items: center;
}

.design-status {
    color: #000;
}

.form-fields {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.id-field {
  width: 80px;
}

.name-field {
  width: 512px;
}

.url-field {
  width: 600px;
}

.url-field,
.name-field,
.id-field {
  height: 32px;
  border: 1px solid #00000033;
  border-radius: 3px;
}

.url-field::placeholder,
.name-field::placeholder,
.id-field::placeholder {
  color: var(--20-grey, rgba(0, 0, 0, 0.20));
  font-size: 14px;
  line-height: 20px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-right: 10px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #7AB10E;
}

input:focus + .slider {
  box-shadow: 0 0 1px #7AB10E;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>