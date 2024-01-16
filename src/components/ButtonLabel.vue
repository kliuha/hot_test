<template>
  <button :class="['button-label', className]">
    <div :class="['button', divClassName]">{{ text }}</div>
  </button>
</template>

<script setup lang="ts">
defineProps({
  className: {
    type: String,
    default: "",
  },
  divClassName: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "Button",
  },
})
</script>

<style scoped>
.button-label {
  all: unset;
  box-sizing: border-box;
  height: 30px;
  position: relative;
  width: 40px;
}

.button-label .button {
  font-family: var(--UI-label-font-family);
  font-size: var(--UI-label-font-size);
  font-style: var(--UI-label-font-style);
  font-weight: var(--UI-label-font-weight);
  height: 18px;
  left: -1px;
  letter-spacing: var(--UI-label-letter-spacing);
  line-height: var(--UI-label-line-height);
  position: absolute;
  text-align: center;
  top: 5px;
  white-space: nowrap;
  width: 42px;
  color: var(--white);
}
</style>