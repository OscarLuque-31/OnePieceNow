<script setup>
import { computed, ref } from 'vue';


const props = defineProps({
    title: String,
    datosPersonajes: {
        type: Object,
        required: true
    }
})

// Variables para la paginación
const currentPage = ref(1)
const itemsPerPage = 50;

// Cálculo de los personajes por página
const paginatedCharacters = computed(() => {
    const comienzo = (currentPage.value - 1) * itemsPerPage;
    const final = comienzo + itemsPerPage;
    return props.datosPersonajes.slice(comienzo, final);
})

const nextPage = () => {
    if (currentPage.value < Math.ceil(props.datosPersonajes.length / itemsPerPage)) {
        currentPage.value++;
    }
}

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}


const handleImageError = (event) => {
    event.target.style.display = 'none'; // Ocultar la imagen si no se carga
};



</script>

<template>
    <div class="contenedorPersonajes">
        <h3 class="listResultados">{{ title }}</h3>
        <div class="columnas">
            <h2>Nombre</h2>
            <h2>Altura</h2>
            <h2>Edad</h2>
            <h2>Recompensa</h2>
            <h2>Fruta</h2>
            <h2>Trabajo</h2>
            <h2>Estado</h2>
        </div>
        <div class="filaPersonajes" v-for="personaje in paginatedCharacters" :key="personaje.id">
            <router-link to="#" class="enlacePersonaje">
                <div class="tarjetaPersonaje">
                    <h2>{{ personaje.name }}</h2>
                    <h2>{{ personaje.size }}</h2>
                    <h2>{{ personaje.age }}</h2>
                    <h2>{{ personaje.bounty }}</h2>
                    <div class="fruta">
                        <p>{{ personaje.fruit?.name || "No tiene fruta" }}</p>
                        <img v-if="personaje.fruit?.filename" :src="personaje.fruit?.filename" alt="Fruta del diablo"
                            style="height: 80px;" @error="handleImageError" />
                    </div>

                    <h2>{{ personaje.job }}</h2>
                    <h2
                        :class="{ vivo: personaje.status === 'vivant' || personaje.status === 'living', muerto: personaje.status === 'deceased' }">
                        {{ personaje.status }}</h2>
                </div>
            </router-link>
        </div>

        <!-- Controles de paginación -->
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <span>Página {{ currentPage }} de {{ Math.ceil(props.datosPersonajes.length / itemsPerPage) }}</span>
            <button @click="nextPage"
                :disabled="currentPage === Math.ceil(props.datosPersonajes.length / itemsPerPage)">Siguiente</button>
        </div>
    </div>
</template>

<style scoped>
/* Botones de paginación */
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    gap: 15px;

}

.pagination button {
    background-color: #db5050;
    color: white;
    border: none;
    font-family: 'Raleway', serif;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.pagination button:hover {
    background-color: #ff4f4f;
}

.pagination button:disabled {
    background-color: #4e4e4e;
    cursor: not-allowed;
}

.pagination span {
    font-size: 18px;
    color: #ebe8e8;
}

.columnas{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}

.tarjetaPersonaje {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    /* 7 columnas, una por cada dato */
    align-items: center;
    justify-content: space-between;
    background-color: #1a1919;
    margin: 10px;
    width: 70vw;
    border-radius: 20px;
    height: 130px;
    padding: 15px;
    text-align: center;
    /* Centra los textos */
}


.fruta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.fruta img {
    width: 80px;
    /* O ajusta el tamaño deseado */
    height: 80px;
    object-fit: contain;
    /* Mantiene la proporción sin recortar */
    border-radius: 8px;
    /* Opcional: bordes redondeados */
}


.enlacePersonaje {
    text-decoration: none;
    color: inherit;
}

.tarjetaPersonaje:hover {
    background-color: #4e4e4e;
}

.listResultados {
    padding: 14px;
    color: #db5050;
}

.contenedorPersonajes {
    color: #ebe8e8;
    margin: auto;
}

.vivo {
    color: rgb(82, 243, 82);
}

.muerto {
    color: #db5050;
}
</style>