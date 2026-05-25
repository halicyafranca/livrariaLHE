<script setup>
import { cart} from '@/utils/CartFun';
import { formataPreco } from '@/utils/ProdutoUtils';
import ButtonChild from '../ButtonChild.vue';
const props = defineProps(['id','titulo','genero','preco', 'imagem', 'quantidade'])
const {
    AdicionarCarrinho,
    DecrementarCarrinho,
    RemoverDoCarrinho
}= cart
</script>
<template>
    <div class="carrinho-item">
        <div>
            <img :src="props.imagem" class="produto-imagem">
        </div>
        <div>
<h2>{{ props.titulo }}</h2>
<h3>{{ formataPreco(props.preco) }}</h3>
<p>{{ props.genero }}</p>
</div>
<div class="controles">
  <ButtonChild @clique="DecrementarCarrinho(props.id,1)">-</ButtonChild>
  <span> Quantidade : {{ props.quantidade }}</span>
  <ButtonChild @clique="AdicionarCarrinho(props.id,1)">+</ButtonChild>
</div>
<ButtonChild class="btn-remover" @clique="RemoverDoCarrinho(props.id)"> remover</ButtonChild>
</div>
</template>
<style scoped>
</style>