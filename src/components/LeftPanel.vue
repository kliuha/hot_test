<template>
  <div :class="['left-panel', className]">
    <Logo :class="LOGOLogoClassName" />
    <img v-if="hasLogOut" class="log-out" alt="Log out" src="https://c.animaapp.com/wrJOuwGF/img/log-out.svg" />
    <img v-if="hasUser" class="user" alt="User" src="https://c.animaapp.com/wrJOuwGF/img/user@2x.png" />
  </div>
</template>

<script setup lang="ts">
import Logo from "./Logo.vue";

defineProps({
  className: {
    type: String,
    default: "",
  },
  LOGOLogoClassName: {
    type: String,
    default: "",
  },
  hasLogOut: {
    type: Boolean,
    default: true,
  },
  hasUser: {
    type: Boolean,
    default: true,
  },
})
</script>

<style>
.left-panel {
  background-color: #627b79;
  height: 700px;
  position: relative;
  width: 40px;
}

.left-panel .log-out {
  height: 15px;
  left: 13px;
  position: absolute;
  top: 672px;
  width: 15px;
}

.left-panel .user {
  height: 24px;
  left: 8px;
  position: absolute;
  top: 636px;
  width: 24px;
}
</style>