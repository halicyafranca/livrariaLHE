<script setup>
import { RouterLink } from 'vue-router';
import { cart } from '@/utils/CartFun';
const {
    filtro
} = cart
</script>
<template>
    <header>
    <nav>
 <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/livraria">Livraria</RouterLink>
        <RouterLink to="/carrinho">Carrinho</RouterLink>
       <input type="text" placeholder="Pesquise aqui" v-model="filtro">
    </nav>
    </header>
</template>
<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #B4D3D9;
    z-index: 100;
    padding: 16px;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
}
nav{
display: flex;
gap: 16px;
}
a{
    text-decoration: none;
    color: #333;
}
.router-link-active {
    font-weight: bold;
}
</style>