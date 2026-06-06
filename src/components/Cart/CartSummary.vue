<script setup>
  import { cart } from '@/utils/CartFun';
  import { formataPreco } from '@/utils/ProdutoUtils';
  const { valorTotal , quantidadeTotal} = cart
</script>
<template>
  <h1 class="titulo"> Total da compra</h1>
  <div class="resultados"> 
     <p>Produtos : {{ quantidadeTotal }}</p>
      <p>Sub total : {{ formataPreco(valorTotal) }}</p>
  </div>
  <div class="final">
    <h2>Total : {{ formataPreco(valorTotal) }}</h2>
    <button class="btn"> Finalizar compra</button>
  </div>
</template>
<style scoped>
.titulo{
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 2vw;
 }
 .resultados{
  display: grid;
  gap: 20px;
  font-size: 1.2rem;
  padding-bottom: 20px;
  border-bottom: 2px solid #6A2931;
 }
 .final{
  margin: 10px;
 }
 .btn{
  background-color: #6A2931;
  padding: 20px 40px;
  color: #fff;
  border: none;
  border-radius: 50px;
  margin: 40px auto;
  font-size: 1.3rem;
 }
</style>