<script setup>
  import CartItem from './CartItem.vue';
  import CartSummary from './CartSummary.vue';
  import { cart } from '@/utils/CartFun';
  const {
     carrinho,
  } = cart
</script>

<template>
  <main class="main-carrinho">
    <div v-if="carrinho.length === 0" class="container-vazio">
      <div class="cartao-aviso">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Você ainda não adicionou nada aqui :(</p>
      </div>
    </div>

    <div v-else class="carrinho-painel">
      <div class="item1">
        <CartItem 
          v-for="item in carrinho" 
          :key="item.id"
          :id="item.id"
          :genero="item.genero"
          :titulo="item.titulo"
          :imagem="item.imagem"
          :preco="item.preco" 
          :quantidade="item.quantidade"
        />
      </div>

      <div class="item2">
        <CartSummary />
      </div>
    </div>
  </main>
</template> 

<style scoped>
.main-carrinho {
  background-color: #C5B28E;
  min-height: 80vh; 
  padding: 3vw 6vw;
  box-sizing: border-box;
}

.container-vazio {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh; 
  width: 100%;
}

.cartao-aviso {
  background-color: #E8DDCE; 
  padding: 60px;
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

i {
  font-size: 2.5rem;
  color: #5E1922;
  opacity: 0.7;
}

.carrinho-painel {
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  gap: 40px; 
  width: 100%;
}

.item1 {
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.item2 {
  width: 350px; 
  position: sticky;
  top: 20px;
}

@media (max-width: 900px) {
  .carrinho-painel {
    flex-direction: column;
    align-items: center;
  }
  
  .item2 {
    width: 100%;
  }
}
</style>