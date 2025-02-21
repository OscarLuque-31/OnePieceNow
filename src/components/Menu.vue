<template>
    <div class="menu-hamburguesa">
        <!-- Botón de la hamburguesa -->
        <div @click="toggleMenu" class="icono-hamburguesa">
            <div class="linea"></div>
            <div class="linea"></div>
            <div class="linea"></div>
        </div>
    </div>

    <!-- Menú desplegable -->
    <nav v-if="menuOpen" class="menu">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/personajes">Personajes</RouterLink>
        <RouterLink to="/capitulos">Capítulos</RouterLink>
        <RouterLink to="/espadas">Espadas</RouterLink>
        <RouterLink to="/localizaciones">Localizaciones</RouterLink>
    </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);

// Abrir/cerrar el menú
function toggleMenu(event) {
    event.stopPropagation();
    menuOpen.value = !menuOpen.value;
}

// Cerrar el menú si se hace clic fuera
function handleClickOutside(event) {
    const menuElement = document.querySelector('.menu');
    const hamburguerElement = document.querySelector('.menu-hamburguesa');

    if (menuElement && !menuElement.contains(event.target) && !hamburguerElement.contains(event.target)) {
        menuOpen.value = false;
    }
}

onMounted(() => {
    window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', handleClickOutside);
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap');

:root {
    --tamano-hamburguesa: 30px;
    --color-menu-bg: #4e4e4e;
    --color-menu-hover: #282828;
    --color-text: #ebe8e8;
}

/* Estilos del botón de menú hamburguesa */
.menu-hamburguesa {
    margin-top: 20px;
    margin-left: 20px;
    width: var(--tamano-hamburguesa);
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}

.menu-hamburguesa:hover {
    background-color: var(--color-menu-hover);
}

.icono-hamburguesa {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: var(--tamano-hamburguesa);
    height: 20px;
}

.linea {
    height: 2px;
    background-color: var(--color-text);
    border-radius: 2px;
}

/* Menú desplegable */
.menu {
    position: absolute;
    top: 55px;
    left: 30px;
    background-color: var(--color-menu-bg);
    width: 200px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeInDown 0.3s forwards;
}

/* Animación de aparición */
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Estilos de los enlaces del menú */
.menu a {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color: var(--color-text);
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.2s ease-in-out;
}

/* Efecto hover en los enlaces */
.menu a:hover {
    background-color: var(--color-menu-hover);
}

/* Estilo para el enlace activo */
.menu a.router-link-exact-active {
    background-color: var(--color-menu-hover);
    font-weight: bold;
}
</style>
