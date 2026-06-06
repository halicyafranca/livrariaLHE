<script setup>
import ProdutosList from '@/components/produtos/ProdutosList.vue';
import { cart } from '@/utils/CartFun';
import { computed } from 'vue';
const {
    livrosFiltradas,
} = cart
const produtosExibir = computed (()=> {
    return livrosFiltradas.value.slice(0,3)
})
</script>
<template>
       <section class="recomendacoes">
         
         <div class="caixinha">
             <h2>Você pode gostar..</h2>
             
             <ProdutosList v-for="produto in produtosExibir" :key="produto.id"  
     :produto="produto"
       class="produto-list">
  </ProdutosList>
  </div>
</section>
</template>
<style scoped>

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
</style>