<script lang="ts">
    export default {
        props: ['lineProps'],
        name: "BillLine",
        computed: {
            getTotalLine() {
            return this.lineProps.unit_price * this.lineProps.quantity
            }
        },
        methods: {
            addLine() {
                this.$emit('addLine');
            },
            deleteLine() {
                this.$emit('deleteLine');
            }
        }

    }
</script>

<template>
    <div class="div">
        <div class="case">
            <img @click="$emit('addLine')" src="../assets/add.png" class="addPicture">
        </div>
        <div class="case"><label for="name">Name : </label>{{ lineProps.name }}</div><input v-model="lineProps.name" placeholder="Name" class="placeholder"/>
        <div class="case"><label for="unit_price">Unit price : </label>{{ lineProps.unit_price }} $</div><input v-model="lineProps.unit_price" placeholder="Unit price" class="placeholder"/>
        <div class="case"><label for="quantity">Quantity : </label>{{ lineProps.quantity }}</div><input v-model="lineProps.quantity" placeholder="Quantity" class="placeholder"/>
        <div class="case"><label for="description">Description : </label>{{ lineProps.description }}</div><textarea v-model="lineProps.description" class="case placeholder" placeholder="Description"></textarea>
        <div class="case"><label for="total">Total : </label>{{ getTotalLine }} $</div>
        <div class="case">
            <img @click="$emit('deleteLine')" src="../assets/supprimer.png" class="deletePicture">
        </div>
    </div>
</template>

<style scoped>
    .div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 1px solid black;
        width: 150%;
        max-width: 500px;
    }

    .case {
        text-align: center;
        margin: 10px;
        max-width: 96%;
        min-width: 96.5%;
    }

    .placeholder {
        text-align: center;
    }

    .addPicture{
        margin: auto;
        height: 25px;
        background-color: rgb(255, 255, 255);
        border-radius: 100%;
        transition: all .2s ease;
    }

    .addPicture:hover{
        scale: 1.2;
    }

    .addPicture:active {
        scale: 1;
    }

    .deletePicture{
        margin: auto;
        height: 25px;
        transition: all .2s ease;
    }

    .deletePicture:hover{
        scale: 1.2;
    }
    .deletePicture:active {
        scale: 1;
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