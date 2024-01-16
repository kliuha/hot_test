<template>
  <div :class="['LOGO', className]"></div>
</template>

<script setup lang="ts">

defineProps({
  className: {
    type: String,
    default: "",
  },
})
</script>

<style>
.LOGO {
  background-image: url(https://c.animaapp.com/wrJOuwGF/img/subtract-2.svg);
  background-size: 100% 100%;
  height: 24px;
  width: 24px;
}
</style>