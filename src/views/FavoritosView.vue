<script setup>
import ProdutosList from '@/components/produtos/ProdutosList.vue';
import { cart } from '@/utils/CartFun';
const {
    favoritos
} = cart
</script>
<template>
    <main class="main">
    <ProdutosList v-for="produto in favoritos" :key="produto.id" :produto="produto" class="produto1"></ProdutosList>
</main>
</template>
<style scoped>
.main{
    background-color:  #C5AF90;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
.produto1 {
   

}
</style>