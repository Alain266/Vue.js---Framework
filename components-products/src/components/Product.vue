<script setup lang="ts">
    defineProps({
        product: Object
    })
</script>


<template>
    <li v-if="product">
        <h2>Nom : {{ product.name }}</h2>
        <p>Prix : {{ product.unit_price }}</p>
        <p>Quantité : {{ product.quantity }}</p>
        <p>Description : {{ product.description }}</p>
        <br>
    </li>
</template>

