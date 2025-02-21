<script setup>
import { ref } from 'vue';


const textInput = ref('');
const dropdownFiltro = ref('');

const emit = defineEmits([
    'HacerBusqueda',
    'dropdownFiltro'
])


function filtrarBusqueda() {
    console.log("Emit textInput:", textInput.value, dropdownFiltro.value);
    emit('HacerBusqueda', textInput.value)
}

function actualizarFiltro(){
    console.log("Emit filtro:", textInput.value, dropdownFiltro.value);
    emit('dropdownFiltro', dropdownFiltro.value)
}

</script>

<template>
    <div class="contenedorBuscador">
        <select name="Filtrar" class="dropdownFiltro" @change="actualizarFiltro" v-model="dropdownFiltro">
            <option value="" disabled selected>Filtrar</option> 
            <option value="name">Nombre</option>
            <option value="size">Altura</option>
            <option value="age">Edad</option>
            <option value="bounty">Recompensa</option>
            <option value="job">Trabajo</option>
            <option value="status">Actualidad</option>
        </select>
        <input type="text" class="inputText" placeholder="Buscar..." v-model="textInput">
        <button class="btnBuscar" @click="filtrarBusqueda">Buscar</button>
    </div>
</template>

<style scoped>
.contenedorBuscador {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.dropdownFiltro {
    background-color: #db5050;
    margin-right: 20px;
    font-family: 'Raleway', serif;
    border-radius: 10px;
    color: #ebe8e8;
    font-size: 15px;
    font-weight: 600;
    width: 130px;
    padding: 10px;
    cursor: pointer;
    border: none;
    transition: background-color 0.3s ease;
}

.dropdownFiltro:focus {
    outline: none;
    background-color: #ff4f4f; /* Cambia el color cuando esté en foco */
}

.dropdownFiltro:hover {
    background-color: #ff4f4f; /* Cambia el color al pasar el mouse */
}

.dropdownFiltro option {
    background-color: #db5050;
    font-family: 'Raleway', serif;
    color: #ebe8e8;
    font-size: 15px;
    padding: 10px;
    border-radius: 10px;
}

.dropdownFiltro option:checked {
    background-color: #f33d3d; /* Color cuando la opción está seleccionada */
}

.inputText {
    padding: 10px;
    width: 400px;
    border-radius: 10px;
    font-family: 'Raleway', serif;
    font-weight: 600;
    font-size: 15px;
    color: #db5050;
    background-color: #ebe8e8;
    border-color: #ebe8e8;
}

.btnBuscar {
    padding: 10px;
    font-family: 'Raleway', serif;
    font-weight: 600;
    font-size: 15px;
    color: #ebe8e8;
    background-color: #db5050;
    border-radius: 10px;
    margin-left: 20px;
    transition: background-color 0.3s ease;
}

.btnBuscar:hover {
    color: #ffffff;
    background-color: #ff4f4f;
    border-radius: 10px;
}

</style>