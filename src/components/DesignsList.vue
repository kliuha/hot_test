<script setup lang="ts">
import DesignCard from "./DesignCard.vue";
const DESIGNS_MOCK = [{
    cardId: "130",
    cardName: "Ostrov",
    src: "/src/assets/img/design.png"
},{
    cardId: "110",
    cardName: "SunWear",
    src: "/src/assets/img/design2.png"
},{
    cardId: "112",
    cardName: "Flora",
    src: "/src/assets/img/design3.png"
},{
    cardId: "105",
    cardName: "SunWear",
    src: "/src/assets/img/design2.png"
},{
    cardId: "135",
    cardName: "Flora",
    src: "/src/assets/img/design3.png"
},{
    cardId: "100",
    cardName: "SunWear",
    src: "/src/assets/img/design2.png"
},{
    cardId: "103",
    cardName: "Flora",
    src: "/src/assets/img/design3.png"
}]
</script>

<template>
  <div class="list-wrapper">
    <div class="list-header">
        <h2>Всі дизайни</h2>
        <button class="add-button">Додати дизайн</button>
    </div>
    <div class="designs-list">
        <DesignCard
        v-for="design in DESIGNS_MOCK"
        :card-id="design.cardId"
        :card-name="design.cardName"
        :src="design.src" />
    </div>
  </div>
</template>

<style scoped>
.list-wrapper {
    width: 100%;
    padding: 24px 32px;
    background-color: #2C3D39;
}

.list-header {
    display: flex;
    justify-content: space-between;
    color: #fff;
}

.add-button {
    display: flex;
    height: 30px;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 1px solid var(--20-grey, rgba(0, 0, 0, 0.20));
    background: var(--active, #418AF2);
    color: #fff;
}

.designs-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>