<script setup>
  import { cart } from '@/utils/CartFun';
  import { formataPreco } from '@/utils/ProdutoUtils';
  const { valorTotal , quantidadeTotal} = cart
</script>
<template>
  <h1> Total da compra</h1>
  <div> 
     <p>Produtos : {{ quantidadeTotal }}</p>
      <p>Sub total : {{ formataPreco(valorTotal) }}</p>
  </div>
  <div>
    <h2>Total : {{ formataPreco(valorTotal) }}</h2>
  </div>
</template>
<style scoped>
</style>