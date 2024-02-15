<script lang="ts">
    export default {
        props: {
            rating: {
                type: Number,
                default: 1
            }
        }
    };
</script>

<template>
    <div>
        <p> {{ rating }} </p>
    </div>
</template>