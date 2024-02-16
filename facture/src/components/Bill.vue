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
                    name: null,
                    unit_price: null,
                    quantity: null,
                    description: null,
                },
            ],
            Total: null,
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