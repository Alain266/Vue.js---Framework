<script setup lang="ts">
</script>

<template>
  <div>
    <header>
      <nav>
        <router-link :to="{name:'home'}">Accueil</router-link>
        <router-link :to="{name:'about'}">A propos</router-link>
        <router-link :to="{name:'bill'}">Factures</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
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

header nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: aliceblue;
  font-size: 25px;
}

header nav a {
  padding: 10px;
  color: aliceblue;
  text-decoration: none;
}

header nav a:hover {
  color : rgb(90, 117, 255);
}

header nav a:active {
  color : rgb(90, 117, 255);
}
</style>

