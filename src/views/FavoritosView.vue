<script setup>
import ProdutosList from '@/components/produtos/ProdutosList.vue';
import { cart } from '@/utils/CartFun';
import AppFooter from '@/components/AppFooter.vue';

const {
    favoritos
} = cart
</script>

<template>
  <main class="main-favoritos">
    <h2 class="sessao-titulo">Seus Favoritos</h2>

    <div v-if="favoritos.length === 0" class="container-vazio">
      <div class="cartao-aviso">
        <i class="fa-regular fa-heart icone-coracao"></i>
        <p>Você ainda não adicionou nada aqui :(</p>
      </div>
    </div>

    <div v-else class="livraria">
      <ProdutosList 
        v-for="produto in favoritos" 
        :key="produto.id" 
        :produto="produto" 
        class="produto1"
      />
    </div>
  </main>
  
  <AppFooter />
</template>

<style scoped>
.main-favoritos {
  background-color: #C5B28E;
  min-height: 80vh; 
  padding: 2vw 6vw 4vw 6vw; 
  box-sizing: border-box;
}

.sessao-titulo {
    color: #5c272e;
    font-size: 2vw;
    margin-bottom: 2vw;
    font-weight: 700;
}

.livraria {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
}

.container-vazio {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40vh; 
  width: 100%;
}

.cartao-aviso {
  background-color: #E8DDCE; 
  padding: 40px 60px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05); 
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.cartao-aviso p {
  color: #5E1922; 
  font-size: 1.3rem;
  font-weight: 600;
  margin: 0;
}

.icone-coracao {
  font-size: 2.5rem;
  color: #5E1922;
  opacity: 0.7;
}

@media (max-width: 1024px) {
  .sessao-titulo { font-size: 1.8rem; }
  .livraria { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .livraria { grid-template-columns: 1fr; }
}
</style>