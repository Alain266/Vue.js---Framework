<template>
    <div>
        <h1>Mot de passe oublié</h1>
        <p> Nous envoyons un email avec des instructions pour réinitialiser votre mot de passe.</p>
        <form @submit.prevent="resetPassword">
            <label for="email">📧</label>
            <input type="email" id="email" name="email" required autocomplete="email" placeholder="Entrez votre email">
            <button type="submit">Réinitialiser le mot de passe</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ForgotPassword',
    methods: {
        resetPassword() {
            const email = document.getElementById('email').value;
            // Ajoutez ici la logique pour envoyer l'email de réinitialisation
            console.log(`Email de réinitialisation envoyé à: ${email}`);
            alert('Un email de réinitialisation a été envoyé si l\'adresse est valide.');
        }
    }
}
</script>

<style scoped>
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5vh;
        margin: 50px;
    }

    p {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        margin-top: 1vh;
    }

    button {
        margin-top: 2vh;
        color: #000000;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #73b4ff;
    }
</style>
