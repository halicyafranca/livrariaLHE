<script setup>
import { ref } from 'vue';
import { listaLivros } from '@/data/produtos';
 import ProdutoCard from '@/components/produtos/ProdutosCard.vue'
 const livros = ref(listaLivros);
 import ProdutosList from '@/components/produtos/ProdutosList.vue';

import { cart } from '@/utils/CartFun';
const {
    AdicionarCarrinho,
    livrosFiltradas,
} = cart

livros.value = livros.value.filter(p => p.id === 5);

 </script>

<template>
 
    <section class="recomendacoes">
  <h2>Você pode gostar...</h2>
  <div class="caixinha">
     <ProdutosList v-for="produto in livrosFiltradas" :key="produto.id"  
       :id="produto.id"
      :titulo="produto.titulo"
       :preco="produto.preco"
       :imagem="produto.imagem"
       :genero="produto.genero" 
       @adicionar-carrinho="AdicionarCarrinho">
  </ProdutosList>
  </div>
  </section>
  <section class="beneficios">
        <div class="freteimg">
          <div class="fretetext">
            <h3>Frete grátis para todos os produtos!</h3>
          </div>
        </div>
        
        <div class="conteudoEx">
          <div class="conteudoEx">
            <h3>Conteúdos exclusivos</h3>
            <p>Materiais para alunos e professores.</p>
          </div>
        </div>

        <div class="envioImg">
          <div class="envioText">
            <h3>Envio para toda a região</h3>
          </div>
        </div>
 
    </section>
 
</template>
