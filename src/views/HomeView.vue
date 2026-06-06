<script setup>
import { ref } from 'vue';
import { listaLivros } from '@/data/produtos';
 import ProdutoCard from '@/components/produtos/ProdutosCard.vue'
 const livros = ref(listaLivros);
 import ProdutosList from '@/components/produtos/ProdutosList.vue';
import { cart } from '@/utils/CartFun';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTruck,
  faDownload,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
const {
    AdicionarCarrinho,
    livrosFiltradas,
} = cart

livros.value = livros.value.filter(p => p.id === 5);

 </script>

<template>
 <main>

     <section class="recomendacoes">
         
         <div class="caixinha">
             <h2>Você pode gostar...</h2>
             
             <ProdutosList v-for="produto in livrosFiltradas" :key="produto.id"  
       :id="produto.id"
       :titulo="produto.titulo"
       :preco="produto.preco"
       :imagem="produto.imagem"
       :genero="produto.genero" 
       @adicionar-carrinho="AdicionarCarrinho"
       class="produto-list">
  </ProdutosList>
  </div>
</section>

<section class="beneficios">
        <div class="freteimg">
          <div class="fretetext">
              <span><FontAwesomeIcon :icon="faTruck" style="color: #531b24; " /></span>
              <h3>Frete grátis para todos os produtos!</h3>
            </div>
        </div>
        
        <div class="conteudoEx">
            <div class="conteudoEx">
            <span><FontAwesomeIcon :icon="faDownload" style="color: #531b24;" /></span>
            <h3>Conteúdos exclusivos</h3>
            <p>Materiais para alunos e professores.</p>
        </div>
    </div>
    <div class="envioImg">
          <div class="envioText">
            <span><FontAwesomeIcon :icon="faLocationDot" style="color: #531b24;" /></span>
            <h3>Envio para toda a região</h3>
        </div>
        </div>
        
    </section>
    
</main>
</template>

<style scoped>
main{
    background: #cdb99d;
}
.recomendacoes {
    background: #cdb99d;
    padding: 50px 0;
}

.caixinha {
    width: 950px;
    max-width: 1200px;
    margin: 0 auto;
    background: #e8ddce;
    border-radius: 30px;
    padding: 20px ;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
    flex-wrap: wrap;

    position: relative;
}

.recomendacoes h2 {
    width: 100%;
    max-width: 1200px;
    padding: 10px 10px 0 60px;
    color: #5e2232;
    font-size: 1.6rem;
    font-weight: 700;
}

.caixinha::before {
    content: "";
    position: absolute;
    top: 75px;
    left: 40px;
    right: 40px;
    height: 1px;
    background: #b48d93;
}

.beneficios {
    background-color: #e8ddce;
    padding: 20px ;
    display: flex;
    margin-left: 70px;
    margin-right: 70px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    gap: 60px;
}

.freteimg,
.conteudoEx,
.envioImg {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #5e2232;
    position: relative;
}

/* divisórias */

.conteudoEx::after,
.freteimg::after {
    content: "";

    position: absolute;

    right: -30px;

    width: 1px;
    height: 50px;

    background: #b48d93;
}

.freteimg::before {
   
    font-size: 2rem;
}

.conteudoEx::before {
    
    font-size: 2rem;
}

.envioImg::before {
    
    font-size: 2rem;
}

.fretetext h3,
.conteudoEx h3,
.envioText h3 {
    font-size: 1.5rem;
    font-weight: 500;
}

.conteudoEx p {
    font-size: 1rem;
    margin-top: 4px;
}

.produto-list{
    display:grid ;
    grid-template-columns: repeat(3fr, 1fr);
}

.fretetext{
    display: flex;
}
.fretetext span {
    margin: 20px 20px 0 20px ;
}
.envioText{
    display: flex;
   
}

</style>