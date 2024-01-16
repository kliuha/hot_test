<script setup lang="ts">
defineProps({
    cardId: String,
    cardName: String,
    src: String
})

</script>

<template>
  <div class="card-wrapper">
    <img class="card-image" :src="src" />
    <div  class="card-footer">
        <div class="card-id">{{ cardId }}</div>
        {{ cardName }}
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
    width: fit-content;
}

.card-image {
    width: 300px;
    height: 400px;
}

.card-footer {
    display: flex;
    gap: 8px;
    color: #fff;
    margin-top: 16px;
}

.card-id {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 16px;
    border-radius: 8px;
    background: #fff;
    font-size: 11px;
    color: #000;
}
</style>