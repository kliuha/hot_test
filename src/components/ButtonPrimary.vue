<template>
  <div :class="['button-primary', className]">
    <ButtonLabel
      :class="buttonLabelButtonLabelClassName"
      :div-class="buttonLabelDivClassName"
      :text="buttonLabelText"
    />
  </div>
</template>

<script setup lang="ts">
import ButtonLabel from "./ButtonLabel.vue";

defineProps({
  className: {
    type: String,
    default: "",
  },
  buttonLabelButtonLabelClassName: {
    type: String,
    default: "",
  },
  buttonLabelDivClassName: {
    type: String,
    default: "",
  },
  buttonLabelText: {
    type: String,
    default: "Button",
    },
})
</script>

<style>
.button-primary {
  display: flex;
  justify-content: center;
  background-color: var(--active);
  border: 1px solid;
  border-color: var(--x20-grey);
  border-radius: 3px;
  height: 32px;
  width: 64px;
}
</style>