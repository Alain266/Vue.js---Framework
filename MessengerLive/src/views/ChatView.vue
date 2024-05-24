<script lang="ts">
import { defineComponent } from 'vue';
import { db, auth } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export default defineComponent({
    name: 'ChatView',
    data() {
        return {
            newMessage: '',
            messages: [] as any[],
            currentUser: null as any,
        };
    },
    methods: {
        async sendMessage() {
            if (this.newMessage.trim() === '') return;
            try {
                await addDoc(collection(db, 'messages'), {
                    text: this.newMessage,
                    user: this.currentUser.email,
                    timestamp: new Date(),
                });
                this.newMessage = '';
            } catch (error) {
                console.error('Erreur lors de l\'envoi du message : ', error);
            }
        },
    },
    mounted() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.currentUser = user;
            } else {
                // Redirigez vers la page de connexion ou gérez l'état non authentifié
            }
        });

        const messagesCollection = collection(db, 'messages');
        const messagesQuery = query(messagesCollection, orderBy('timestamp'));
        onSnapshot(messagesQuery, (querySnapshot) => {
            this.messages = [];
            querySnapshot.forEach((doc) => {
                this.messages.push({ ...doc.data(), id: doc.id });
            });
        });
    },
});
</script>


<template>
    <div class="chat-container">
        <div class="chat-header">
            <h1>Live chat</h1>
            <p v-if="currentUser"> Connecté avec l'adresse e-mail : {{ currentUser.email }}</p>
        </div>
        <div class="chat-messages">
            <div v-for="message in messages" :key="message.id"
                :class="{ 'my-message': message.user === currentUser.email, 'other-message': message.user !== currentUser.email }">
                <p><strong>{{ message.user }}</strong>: {{ message.text }}</p>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" v-model="newMessage" placeholder="Tapez votre message..." @keyup.enter="sendMessage" />
            <button @click="sendMessage">Envoyer</button>
        </div>
    </div>
</template>

<style scoped>
.chat-container {
    background-color: #0d532a77;
    color: white;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.chat-header {
    margin-top: 25px;
    background-color: #0d532a;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 25px;
}

.chat-messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
}

.my-message {
    text-align: right;
}

.other-message {
    text-align: left;
}

.chat-input {
    display: flex;
    padding: 10px;
    position:fixed;
    bottom: 25px;
}

.chat-input input {
    height: 50px;
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 25px;
    margin-right: 10px;
}

.chat-input button {
    margin-top: 2vh;
    color: rgb(0, 0, 0);
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
}

.chat-input button:hover {
    background-color: #0d532a;
}
</style>