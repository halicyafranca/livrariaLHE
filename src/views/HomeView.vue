<script setup>
import ProdutosList from '@/components/produtos/ProdutosList.vue';
import FiltroGenero from '@/components/FiltroGenero.vue';
import { cart } from '@/utils/CartFun';
import AppCenter from '@/components/AppCenter.vue';
import AppInit from '@/components/AppInit.vue';
import AppFooter from '@/components/AppFooter.vue';

const {
    AdicionarCarrinho,
    livrosFiltradas,
} = cart
</script>

<template>
 <main>
    <AppInit></AppInit>
    <AppCenter></AppCenter>
    
    <div class="secao-topo">
      <h2>Lançamentos</h2>
      <FiltroGenero class="filtro-posicionamento" />
    </div>

    <div class="livraria">
      <ProdutosList 
        v-for="produto in livrosFiltradas" 
        :key="produto.id"  
        :produto="produto"
        class="produto-list2"
      />
    </div>
</main>
<AppFooter />
</template>
<style scoped>
main {
    background: #cdb99d;
    padding-bottom: 6vw;
}

.secao-topo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2vw 6vw 2vw 6vw; 
}

h2 {
    color: #fff;
    font-size: 2vw;
    margin: 0; 
}


.livraria {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 0 5vw;
}
</style>