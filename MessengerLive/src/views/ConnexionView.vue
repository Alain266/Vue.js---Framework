<script lang="ts">
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
export default {
    name: 'ConnexionView',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                alert('Utilisateur connecté avec succes !');
                this.$router.push({ name: 'chat' });
                console.log('Utilisateur connecté avec ID: ', user.uid);
            } catch (e) {
                alert('Erreur lors de la connexion: ', e);
                console.log('Erreur lors de la connexion: ', e);
            }
        }
    }
}
</script>

<template>
    <div>
        <h1>Connexion</h1>
        <form @submit.prevent="login">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" name="email" required>

            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" id="password" name="password" required>

            <button @click="login">Se connecter</button>
        </form>
    </div>
</template>

<style scoped>
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5vh;
        margin: 50px;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    button {
        margin-top: 2vh;
        color: rgb(0, 0, 0);
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #73b4ff;
    }
</style>