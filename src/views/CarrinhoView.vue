<script setup>
import CartPainel from '@/components/Cart/CartPainel.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
<main>
    <h2 class="sessao-titulo">Seu carrinho</h2>
<CartPainel/>
</main>
<AppFooter />
</template>
<style scoped>
main {
  background-color:  #C5B28E;
    }

    .sessao-titulo {
    color: #5c272e;
    padding: 3vw 0 0 5vw;
    font-size: 2vw;
    font-weight: 700;
}
</style>
