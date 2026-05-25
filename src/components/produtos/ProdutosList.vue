<script setup>
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/ProdutoUtils';
import { ref } from 'vue';
const props = defineProps(['id','titulo','genero','preco', 'imagem'])
defineEmits(['AdicionarCarrinho'])
import ProdutosCard from './ProdutosCard.vue';
const mostrarDialog = ref(false)
import {cart} from '@/utils/CartFun';
const {
    AdicionarCarrinho,
} = cart
function Adicionar(id, quantidade) {
  AdicionarCarrinho(id, quantidade)
  mostrarDialog.value = false // Fecha o modal
}
</script>
<template>
<div class="prod-List">
    <div>
     <div>
        <img :src="props.imagem" class="produto-imagem">
     </div>
     <h2> {{ props.titulo }}</h2>
     <p>{{ formataPreco(props.preco)}}</p>
    </div>
     <ButtonChild @clique="mostrarDialog = true">Adicionar</ButtonChild>
     <ProdutosCard 
     v-if="mostrarDialog"
     :id="props.id"
      :titulo="props.titulo"
       :preco="props.preco"
       :imagem="props.imagem"
       :genero="props.genero"
        @adicionar-carrinho="Adicionar"
       @fechar="mostrarDialog = false"
       />
      </div>
 
</template>
<style scoped>
.prod-List{
    display: grid;
    border: 2px solid #E3E3E3;
    align-items: center;
    text-align: center;
    margin: 40px;
}
.prod-List h2 {
    font-weight: bold;
}
</style>