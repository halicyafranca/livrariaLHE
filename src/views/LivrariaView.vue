<script setup>
import { ref } from 'vue';
import { listaLivros } from '@/data/produtos';
import ProdutosList from '@/components/produtos/ProdutosList.vue';

import { cart } from '@/utils/CartFun';
const {
    AdicionarCarrinho,
    livrosFiltradas,
} = cart
</script>
<template>
    
 <div class="produtos">
     
  <ProdutosList v-for="produto in livrosFiltradas" :key="produto.id"  
       :id="produto.id"
      :titulo="produto.titulo"
       :preco="produto.preco"
       :imagem="produto.imagem"
       :genero="produto.genero" 
       @adicionar-carrinho="AdicionarCarrinho">
  </ProdutosList>
 </div>
</template>

<style scoped>

</style>
