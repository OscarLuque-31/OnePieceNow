<script setup>
import SearchCharacters from '@/components/SearchCharacters.vue';
import ListCharacters from '@/components/ListCharacters.vue'
import { ref, onMounted, computed } from 'vue';

const title = 'Personajes de One Piece'

// Lista de todos los personajes
const datos = ref([]);

// Lista de todos los personajes filtrados
const datosFiltrados = ref([]);

// Variable para mostrar la pantalla de carga
const cargando = ref(true);

// Titulo filtrado (Ejemplo: 773 ejemplos)
const tituloFiltrado = computed(() => `${datosFiltrados.value.length} resultados`);

// Filtro seleccionado
const filtroSeleccionado = ref("");

// Obtiene los datos de la API
const obtenerPersonajes = async () => {
  try {
    const response = await fetch('https://api.api-onepiece.com/v2/characters/en')

    if (!response.ok) {
      throw new Error('Error al obtener los datos')
    }

    datos.value = await response.json();
    // Se inicializan los datosFiltrados con todos los valores de los datos
    datosFiltrados.value = datos.value;

    // Cuando han cargado los datos deja de mostrarse la pantalla de carga
    cargando.value = false;

  } catch (err) {
    console.log('Error al obtener los datos');
  }
}

// Función para realizar la búsqueda y filtrar los personajes
function realizarBusqueda(textInput) {
  console.log("[RealizarBusqueda] Filtro: ",filtroSeleccionado.value);

  if (!textInput) {
    // Si no hay texto, mostramos todos los personajes
    datosFiltrados.value = datos.value;
  } else {
    datosFiltrados.value = datos.value.filter(personaje => {
      const filtro = personaje[filtroSeleccionado.value];
      // Verificamos que la propiedad existe y es una cadena (o que tiene un valor adecuado)
      return filtro && filtro.toString().toLowerCase().includes(textInput.toLowerCase());
    });
  }
}

function actualizarFiltro(dropdownFiltro){
  filtroSeleccionado.value = dropdownFiltro;
  console.log("[ActualizarFiltro] Filtro: ", filtroSeleccionado.value);
}

onMounted(obtenerPersonajes)
</script>

<template>
  <div class="contenedorPrincipal">
    <h1 class="tituloPrincipal">{{ title }}</h1>
    <SearchCharacters @dropdownFiltro="actualizarFiltro" @HacerBusqueda="realizarBusqueda" />

    <div v-if="cargando" class="pantallaCarga">
        <p>Cargando personajes...</p>
        <div class="spinner"></div>
    </div>
    <ListCharacters v-else :title="tituloFiltrado" :datosPersonajes="datosFiltrados" />

  </div>
  <RouterView/>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.contenedorPrincipal {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  font-family: 'Raleway', serif;
}

.tituloPrincipal {
  color: #ebe8e8;
}

.pantallaCarga {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50vh;
    font-size: 24px;
    color: #ebe8e8;
}

/* Estilo de spinner */
.spinner {
    border: 5px solid rgba(255, 255, 255, 0.3);
    border-top: 5px solid #db5050;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

</style>
