<template>
  <div :class="['design-preview', className]">
    <img class="thumb" alt="Thumb" :src="thumb" />
    <div class="title">
      <div class="overlap-group">
        <div class="count">{{ text1 }}</div>
      </div>
      <div class="ostrov">{{ text }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  className: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "Ostrov",
  },
  text1: {
    type: String,
    default: "105",
  },
  thumb: {
    type: String,
    default: "https://c.animaapp.com/wrJOuwGF/img/thumb.svg",
  },
})
</script>

<style scoped>
.design-preview {
  box-shadow: var(--shadow-dashboard);
  height: 400px;
  position: relative;
  width: 300px;
}

.design-preview .title {
  height: 16px;
  width: 304px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
}

.design-preview .ostrov {
  color: var(--white);
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 16px;
  letter-spacing: 0;
  line-height: 18px;
  white-space: nowrap;
  width: 259px;
}

.design-preview .overlap-group {
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  height: 16px;
  width: 33px;
}

.design-preview .count {
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 11px;
  font-weight: 400;
  height: 16px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  white-space: nowrap;
  width: 23px;
}

.design-preview .thumb {
  height: 400px;
  object-fit: cover;
  width: 300px;
}

</style>
