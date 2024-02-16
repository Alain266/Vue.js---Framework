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
        <div class="case">
            <img src="../assets/add.png" class="addPicture">
        </div>
        <div class="case"><label for="name">Name : </label>{{ lineProps.name }}<input v-model="lineProps.name"/></div>
        <div class="case"><label for="unit_price">Unit price : </label>{{ lineProps.unit_price }}<input v-model="lineProps.unit_price"/></div>
        <div class="case"><label for="quantity">Quantity : </label>{{ lineProps.quantity }}<input v-model="lineProps.quantity"/></div>
        <div class="case"><label for="description">Description : </label>{{ lineProps.description }}<textarea v-model="lineProps.description"></textarea></div>
        <div class="case"><label for="total">Total : </label>{{ getTotalLine }}</div>
        <div class="case">
            <img src="../assets/supprimer.png" class="deletePicture">
        </div>
    </div>
</template>

<style scoped>
    .div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        border: 1px solid black;
        width: 100%;
    }

    .case {
        text-align: center;
        margin: 10px;
    }

    .addPicture{
        height: 25px;
        background-color: rgb(255, 255, 255);
        border-radius: 100%;
    }

    .addPicture:hover{
        height: 30px;
    }

    .deletePicture{
        height: 25px;
    }

    .deletePicture:hover{
        height: 30px;
    }

    input {
        position: relative;
        margin-bottom: 0;
    }
    
    img {
        display: flex;
        justify-content: center;
    }

</style>