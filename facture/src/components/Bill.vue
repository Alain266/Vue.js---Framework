<script lang="ts">
import BillLine from './BillLine.vue';
import Total from './Total.vue';
    export default {
    name: "Bill",
    components: { BillLine, Total },
    data () {
        return {
            facture: "Factures",
            billsProduct: [
                {
                    name: "Ordinateur portable",
                    unit_price: 999.99,
                    quantity: 10,
                    description: "Ordinateur portable puissant avec processeur rapide et grand écran.",
                    total: 
                },
                {
                    name: "Souris",
                    unit_price: 49.99,
                    quantity: 5,
                    description: "Souris connectée à un clavier sans fil.",
                    total: 
                }
            ]
        }
    }
}
</script>

<template>
    <h1> {{ facture }} </h1>
    <BillLine v-for="line in billsProduct" :lineProps="line" />
    <Total />
</template>

<style>
    h1 {
        text-align: center;
        font-weight: bold;
    }
</style>