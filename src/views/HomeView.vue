<template>
    <div class="contenedorHome">
        <h1 class="titulo">Bienvenido a One Piece</h1>
        <p class="subtitulo">Consulta cualquier cosa sobre One Piece</p>
    </div>
</template>

<script scoped>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100..900&display=swap');

.contenedorHome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 90vh;
    font-family: 'Raleway', serif;
    font-weight: 600;
}

/* Animación de color degradado */
.titulo {
    font-size: 80px;
    background-image: linear-gradient(45deg, #db5050, #ff914d, #ffcf40, #1fa2ff, #db5050);
    background-size: 300% 300%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    animation: animarDegradado 6s infinite linear;
}

/* Keyframes para el degradado animado */
@keyframes animarDegradado {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.subtitulo {
    font-size: 30px;
    color: #ebe8e8;
}
</style>
