<script setup>
  import CartItem from './CartItem.vue';
  import CartSummary from './CartSummary.vue';
  import { cart } from '@/utils/CartFun';
  const {
     carrinho,
  } = cart
</script>
<template>
    <div class="carrinho-painel">
    <div class="item1">
    <CartItem v-for="item in carrinho" :key="item.id"
     :id="item.id"
      :genero="item.genero"
       :titulo="item.titulo"
        :imagem="item.imagem"
         :preco="item.preco" 
         :quantidade="item.quantidade"/>
  </div>
    <div class="item2">
     <CartSummary/>
   </div>
   </div>
</template> 
<style scoped>
.carrinho-painel{
  background-color: #C5AF90;
  display: flex;
  align-items: center;
  padding: 20px;
}
.item1{
  border-right: 2px solid #000;
  width: 80%;
}
.item2{
  margin-left: 2vw;
}
</style>