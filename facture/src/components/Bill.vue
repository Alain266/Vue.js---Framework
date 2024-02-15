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
                    unit_price: 550,
                    quantity: 10,
                    description: "Ordinateur portable puissant avec processeur rapide et grand écran.",
                },
                {
                    name: "Souris",
                    unit_price: 50,
                    quantity: 5,
                    description: "Souris connectée à un clavier sans fil.",
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