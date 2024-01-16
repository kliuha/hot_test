<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftPanel from '@/components/LeftPanel.vue';
</script>

<template>
  <div class="app-wrapper">
    <LeftPanel />
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
}
</style>

<style>
* {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

body {
  margin: 0;
}
</style>