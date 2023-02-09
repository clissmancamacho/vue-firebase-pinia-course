<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Ingrese email" v-model.trim="email" />
            <input type="password" placeholder="Ingrese contraseña" v-model.trim="password" />
            <button type="submit" :disable="loadingUser">Ingresar</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const router = useRouter();
const useUser = useUserStore();
const { loginUser } = useUser
const { loadingUser } = storeToRefs(useUser)
const email = ref('')
const password = ref('')

const handleSubmit = async () => {
    if (!email.value || password.value.length < 6) {
        return alert('Complete los campos')
    }
    await loginUser(email.value, password.value);
    router.push('/')
}

</script>

<style lang="scss" scoped>

</style>