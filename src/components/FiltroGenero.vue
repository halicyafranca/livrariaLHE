<script setup>
import { cart } from '@/utils/CartFun';
import { computed } from 'vue';
import { listaLivros } from '@/data/produtos';

const { filtroGenero } = cart;

const generos = computed(() => {
  const todosGeneros = listaLivros.map(livro => livro.genero);
  return [...new Set(todosGeneros)]; 
});

function selecionarGenero(genero) {
  if (filtroGenero.value === genero) {
    filtroGenero.value = '';
  } else {
    filtroGenero.value = genero;
  }
}
</script>

<template>
  <div class="dropdown">
    <button class="dropbtn" :class="{ 'ativo': filtroGenero }">
        <i class="fa-solid fa-filter"></i>
    </button>

    <div class="dropdown-content">
      <button 
        class="genero-item" 
        :class="{ 'item-selecionado': filtroGenero === '' }"
        @click="filtroGenero = ''"
      >
        Todos
      </button>
      
      <button 
        v-for="genero in generos" 
        :key="genero" 
        class="genero-item"
        :class="{ 'item-selecionado': filtroGenero === genero }"
        @click="selecionarGenero(genero)"
      >
        {{ genero }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #531B24; 
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.dropbtn i {
    color: white;
}

.dropbtn:hover {
  background-color: #531B24;
}


.dropbtn.ativo {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #531B24;
}

.icone-filtro {
  width: 24px;
  height: 24px;
}

.dropdown-content {
  display: none;
  position: absolute;
  right: 0; 
  background-color: transparent;
  min-width: 140px;
  z-index: 100;
  padding-top: 8px; 
  flex-direction: column;
  gap: 4px;
}


.dropdown:hover .dropdown-content {
  display: flex;
}


.genero-item {
  background-color: #6A2931;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  display: block;
  border: none;
  border-radius: 20px; 
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s, color 0.2s;
}

.genero-item:hover {
  background-color: #fff;
  color: #6A2931;
  font-weight: bold;
}

.genero-item.item-selecionado {
  background-color: #e7d8c3e1;
  color: #531B24;
  font-weight: bold;
  border: 1px solid #531B24;
}
</style>