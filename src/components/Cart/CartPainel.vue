<script setup>
  import CartItem from './CartItem.vue';
  import CartSummary from './CartSummary.vue';
  import { cart } from '@/utils/CartFun';
  const {
     carrinho,
  } = cart
</script>
<template>
    <div>
    <div>
    <CartItem v-for="item in carrinho" :key="item.id"
     :id="item.id"
      :genero="item.genero"
       :titulo="item.titulo"
        :imagem="item.imagem"
         :preco="item.preco" 
         :quantidade="item.quantidade"/>
  </div>
    <div>
     <CartSummary/>
   </div>
   </div>
</template> 
<style scoped>
</style>