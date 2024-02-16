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
        handleAddLine () {
                    this.billsProduct.push({
                        name: null,
                        unit_price: 1,
                        quantity: 1,
                        description: null,
                    });
                },

        handleDeleteLine () {
            if (this.billsProduct.length > 1) {
                this.billsProduct.pop();
            }
        },

        getTotalHT() {
            let total = 0;
            if (this.billsProduct !== null) {
                for (let product of this.billsProduct) {
                total += product.unit_price*product.quantity
                }
                return total
            }
        },

        getTotalTTC() {
            let total_ttc = 0;
            if (this.billsProduct !== null) {
                for (let product of this.billsProduct) {
                total_ttc += product.unit_price*product.quantity * 1.2
                }
            }
            return total_ttc
        }
    }
}
</script>

<template>
    <h1> {{ facture }} </h1>
    <BillLine v-for="line in billsProduct" :lineProps="line" @addLine="handleAddLine" @deleteLine="handleDeleteLine" />
    <Total />
    <p>{{ getTotalHT() }} $</p>
    <h1>Total T.T.C (+20%) :</h1>
    <p>{{ getTotalTTC() }} $</p>
</template>

<style>
    h1 {
        text-align: end;
        font-weight: bold;
    }
</style>