<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Product from "./components/Product.vue";
import productData from "./data/product.json";



</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it !" />
    </div>
  </header>

  <main>
    <ul>
      <Product v-for="product in productData" :product="product" />
    </ul>
    <!-- <p>{{ productData[0].unit_price }}</p> -->
    <p>
      <!--  -->
    </p>
  </main>
</template>

<style scoped></style>
