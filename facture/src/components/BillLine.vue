<script lang="ts">
    export default {
        props: ['lineProps'],
        name: "BillLine",
        computed: {
            getTotalLine() {
            return this.lineProps.unit_price * this.lineProps.quantity
            }
        }

    }
</script>

<template>
    <div class="div">
        <div class="case">{{ lineProps.name }}</div>
        <div class="case">{{ lineProps.unit_price }}</div>
        <div class="case">{{ lineProps.quantity }}</div>
        <div class="case">{{ lineProps.description }}</div>
        <div class="case">Total : {{ getTotalLine }}</div>
        <div class="case">
            <img src="../assets/supprimer.png" class="deletePicture">
        </div>
    </div>
</template>

<style scoped>
    .div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        border: 1px solid black;
    }

    .case {
        text-align: center;
        margin: 10px;
    }

    .deletePicture{
        height: 25px;
    }

    .deletePicture:hover{
        height: 30px;
    }

</style>