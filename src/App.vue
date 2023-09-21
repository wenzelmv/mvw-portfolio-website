<template>
  <header>
    <div class="wrapper">
      <TheNavigation />
    </div>
  </header>

  <RouterView :key="$route.path" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
</script>

<style scoped></style>
