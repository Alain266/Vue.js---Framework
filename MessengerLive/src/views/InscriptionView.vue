<script lang="ts">
import { db } from '../firebase';
import { collection, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default {
    name: 'InscriptionView',
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        async register() {
            if (this.password === this.confirmPassword) {
                try {
                    // Création de l'utilisateur avec Firebase Auth
                    const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                    const user = userCredential.user;

                    // Ajout de l'utilisateur à Firestore
                    const userRef = doc(collection(db, 'users'), user.uid);
                    await setDoc(userRef, {
                        email: this.email,
                        createdAt: new Date(),
                    });
                    alert('Utilisateur enregistré avec succès !');
                    console.log('Document écrit avec ID: ', user.uid);
                } catch (e) {
                    console.error('Erreur lors de l\'ajout de l\'utilisateur: ', e);
                    alert('Erreur lors de l\'inscription.');
                }
            } else {
                alert('Les mots de passe ne correspondent pas.');
            }
        }
    }
};
</script>

<template>
    <div>
        <h1>Inscription</h1>
        <form @submit.prevent="register">
            <label for="email">Email</label>
            <input type="email" v-model="email" id="email" name="email" required>

            <label for="password">Mot de passe</label>
            <input type="password" v-model="password" id="password" name="password" required>

            <label for="confirm-password">Confirmer le mot de passe</label>
            <input type="password" v-model="confirmPassword" id="confirm-password" name="confirm-password" required>

            <button type="submit"> S'inscrire </button>
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
</style>