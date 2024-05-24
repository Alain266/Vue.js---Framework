<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <div class="greetings">
        <img src="@/assets/icons8-bavarder-100.png" alt="Logo Messenger Live" />
        <h1 class="green">{{ msg }}</h1>
    </div>
</template>

<style scoped>
.greetings h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
    text-align: center;
}

.greetings img {
    margin-right: 2rem;
    width: 12%;
    height: 12%;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
