<script lang="ts">
    export default {
        data() {
            return {
                nom: '',
                prenom: '',
                date: '',
                pseudo: '',
                password1: '',
                password2: '',
                description: '',
                pays: '',
                toggle: ''
            };
        },
        
        methods: {
            submit() {
                if (this.toggle === 'true') {
                    window.alert(`Envoi du formulaire : \n Vous vous appelez : ${this.prenom} ${this.nom}, vous avez ${this.date} comme date de naissance, votre pseudo est ${this.pseudo}, votre mot de passe est ${this.password1} et votre pays est ${this.pays} et vous aimez le framework Vue.js.`);
                } else {
                    window.alert(`Envoi du formulaire : \n Vous vous appelez : ${this.prenom} ${this.nom}, vous avez ${this.date} comme date de naissance, votre pseudo est ${this.pseudo}, votre mot de passe est ${this.password1} et votre pays est ${this.pays} et vous n'aimez pas le framework Vue.js.`);
                }
            },
            init () {
                console.log("OK")
                if (this.nom !== null && this.prenom !== null && this.date !== null && this.pseudo !== null && this.password1 !== null && this.password2 !== null && this.description !== null && this.pays !== null) {
                    
            this.submit()
                }
            },
        }
    }
</script>

<template>
    <div>
        <form @submit.prevent="init" method="get" action="****">
            <h1>Formulaire d'inscription</h1>
            <label for="in1"> Nom :</label> 
            <input type="text" placeholder="Nom" size="15" maxlength="5" name="input1" id="in1" v-model="nom" required> 
            <br>
            <label for="in2"> Prénom :</label> 
            <input type="text" placeholder="Prénom" size="15" maxlength="5" name="input1" id="in2" v-model="prenom" required>
            <br>
            <label for="date">Date de naissance :</label>
            <input type="date" id="date" name="date" v-model="date" required>
            <br>
            <label for="pseudo">Pseudo :</label>
            <input type="text" placeholder="Pseudo" id="pseudo" name="pseudo" v-model="pseudo" required>
            <br>
            <label for="password">Mot de passe :</label>
            <input type="password" placeholder="Mot de passe" id="password" name="password" v-model="password1" required>
            <br>
            <label for="password-confirm">Confirmation du mot de passe :</label>
            <input type="password" placeholder="Mot de passe" id="password-confirm" name="password" v-model="password2" required>
            <br>
            <label for="desription">Description :</label>
            <textarea id="desription" placeholder="" name="desription" v-model="description" required></textarea >
            <br>
            <label for="pays"> Quels pays as-tu déjà visité ?</label>
            <select name="pays" id="pays" v-model="pays" required>
                <option value="espagne">Espagne</option>
                <option value="royaume-uni">Royaume-Uni</option>
                <option value="canada">Canada</option>
                <option value="japon">Japon</option>
            </select>
            <br>
            <label for="checkbox">Aimes-tu le framwork Vue.js ?</label>
            <input type="checkbox" id="checkbox" name="checkbox" v-model="toggle" true-value="true" false-value="false">
            <br>
            <button type="submit" id="submit">Envoyer</button>
        </form>
    </div>
</template>

<style>
    form {
        display: flex;
        flex-direction: column;
        background-color: rgb(19, 48, 63);
        padding: 15px;
        border-radius: 25px;
    }

    form h1 {
        text-align: center;
        color: white;
        font-weight: bold;
        margin: 15px;
    }

    #checkbox {
        margin-bottom: 25px;
        transform: scale(2); 
    }
</style>