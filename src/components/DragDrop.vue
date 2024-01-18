<script setup>
import UploadImages from "vue-upload-drop-images";

function handler(event) {
  // Handel event
}
</script>

<template>
    <UploadImages class="drop-wrapper" :max="1" />
</template>

<style scoped>
.drop-wrapper {
  display: flex;
  width: 600px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border: 2px dashed #0000001A;
}

.drop-wrapper :deep(svg) {
  width: 60px;
  height: 48px;
  fill: #0000001A;
}

.drop-wrapper :deep(.mainMessage) {
  display: none;
}

.drop-wrapper :deep(.imgsPreview .imageHolder) {
  width: 60px;
  height: 48px;
  fill: #0000001A;
}
</style>