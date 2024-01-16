<script setup>
import Dropzone from "vue3-simple-dropzone";

function handler(event) {
  // Handel event
}
</script>

<template>
    <Dropzone class="drop-wrapper" @onSelect="handler">
      <img class="drop-image" src="../assets/img/drop.svg" />
    </Dropzone>
</template>

<style scoped>
.drop-image {
  width: 60px;
  height: 48px;
}

.drop-wrapper {
  display: flex;
  width: 600px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border: 2px dashed #0000001A;
}

</style>