<script setup>
import ProdutosList from '@/components/produtos/ProdutosList.vue';
import { cart } from '@/utils/CartFun';
import AppCenter from '@/components/AppCenter.vue';
import AppInit from '@/components/AppInit.vue';
const {
    AdicionarCarrinho,
    livrosFiltradas,
} = cart
 </script>

<template>
 <main>
    <AppInit></AppInit>
<AppCenter></AppCenter>
  <h2>Lançamentos</h2>
  <div class="livraria">
  <ProdutosList v-for="produto in livrosFiltradas" :key="produto.id"  
     :produto="produto"
       class="produto-list2"></ProdutosList>
       </div>
</main>
</template>

<style scoped>
main{
    background: #cdb99d;
}
h2 {
    color: #fff;
   margin: 2vw 2vw 2vw 6vw;
   font-size: 2vw;
}
.livraria {
    display: grid;
    grid-template-columns: repeat(4,1fr);
}
</style>