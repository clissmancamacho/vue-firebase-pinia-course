<template>
    <div>
        <h1>Home</h1>
        <p>{{ userData }}</p>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '../stores/user';

const useUser = useUserStore();
const { userData } = storeToRefs(useUser);
</script>

<style lang="scss" scoped>

</style>