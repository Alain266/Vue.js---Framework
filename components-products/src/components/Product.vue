<script lang="ts">
import Rating from './Rating.vue';

export default {
    props: {
        product: Object
    },

    data() {
        return {
            rating: 1
        }
    }
}


</script>


<template>
    <li v-if="product">
        <h2>Nom : {{ product.name }}</h2>
        <p>Prix : {{ product.unit_price }}</p>
        <p>Quantité : {{ product.quantity }}</p>
        <p>Description : {{ product.description }}</p>
        <p>Note : 
            <Rating :rating="rating" />
        </p>
        <br>
    </li>
</template>

