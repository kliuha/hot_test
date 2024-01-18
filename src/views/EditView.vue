<script setup lang="ts">
import EditForm from '@/components/EditForm.vue';
</script>

<template>
  <div class="edit-wrapper">
    <div class="edit-header">
        <svg @click="$router.push('/')" class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.36358 11.3636C4.01211 11.715 4.01211 12.2849 4.36358 12.6364L10.3636 18.6364L11.6364 17.3636L7.27277 13L20 13L20 11L7.27277 11L11.6364 6.63638L10.3636 5.36359L4.36358 11.3636Z" fill="#222222"/>
        </svg>
    </div>
    <EditForm />
    <div class="control-buttons">
        <button class="delete-button">Видалити</button>
        <button class="edit-button">Зберегти і вийти</button>
    </div>
  </div>
</template>

<style scoped>
.edit-wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 24px 32px;
    gap: 68px;
}

.edit-header {
    display: flex;
    justify-content: space-between;
    color: #fff;
}

.arrow {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}

.control-buttons {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-left: auto;
}

.edit-button {
    display: flex;
    height: 30px;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid var(--20-grey, rgba(0, 0, 0, 0.20));
    background: var(--active, #418AF2);
    color: #fff;
}

.delete-button {
    display: flex;
    height: 30px;
    padding: 6px 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid var(--20-grey, rgba(0, 0, 0, 0.20));
    background: transparent;
    color: #E61610;
}
</style>