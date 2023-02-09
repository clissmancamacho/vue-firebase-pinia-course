<template>
  <h1>App</h1>

  <nav v-if="!loadingSession">
    <RouterLink to="/" v-if="userData">Home</RouterLink> |
    <RouterLink to="/login" v-if="!userData">Login</RouterLink> |
    <RouterLink to="/register" v-if="!userData">Register</RouterLink> |
    <button v-if="userData" @click="logoutUser">Logout</button>
  </nav>
  <div v-else>Cargando...</div>
  <RouterView />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';

const useUser = useUserStore();
const { userData, loadingSession } = storeToRefs(useUser);
const { logoutUser } = useUser;
</script>

<style lang="scss" scoped>

</style>