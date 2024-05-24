<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProjectTitle from './components/ProjectTitle.vue'
</script>

<template>
    <header>
        <div>
            <ProjectTitle msg="Messenger Live 2.0" />
            <nav>
                <RouterLink to="/">Accueil</RouterLink>
                <RouterLink to="/about">A propos</RouterLink>
                <RouterLink to="/Connexion">Connexion</RouterLink>
                <RouterLink to="/Inscription">Inscription</RouterLink>
                <RouterLink to="/MotDePasseOublie">Mot de passe oublié</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
</template>

<style scoped>

header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: white;
    background-color: hsla(160, 100%, 75%, 0.253);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

</style>
