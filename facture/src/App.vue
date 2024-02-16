<script setup lang="ts">
import Bill from './components/Bill.vue';
</script>

<template>
  <header>
  </header>

  <main>
    <Bill />
  </main>
</template>

<style scoped>

main {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>
