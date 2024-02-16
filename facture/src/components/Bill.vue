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
                    unit_price: 1,
                    quantity: 1,
                    description: null,
                },
                {
                    name: null,
                    unit_price: 1,
                    quantity: 1,
                    description: null,
                },
            ],
        }
    },
    methods: {
        getTotal() {
            let total = 0;
            if (this.billsProduct !== null) {
                for (let product of this.billsProduct) {
                total += product.unit_price*product.quantity
                }
                return total
            }
        }
    }
}
</script>

<template>
    <h1> {{ facture }} </h1>
    <BillLine v-for="line in billsProduct" :lineProps="line" />
    <Total />
    <p>{{ getTotal() }}</p>
</template>

<style>
    h1 {
        text-align: end;
        font-weight: bold;
    }
</style>