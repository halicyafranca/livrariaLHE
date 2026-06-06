<script setup>
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/ProdutoUtils';
import { ref } from 'vue';
defineProps({
    produto:{
        type:Object,
        required:true,
    },
})
defineEmits(['AdicionarCarrinho'])
import ProdutosCard from './ProdutosCard.vue';
const mostrarDialog = ref(false)
import {cart} from '@/utils/CartFun';
const {
    AdicionarCarrinho,
    AdicionarFav
} = cart
function AdicionarCar(id, quantidade) {
  AdicionarCarrinho(id, quantidade)
  mostrarDialog.value = false 
}
function AdicionarFavoritos(id){
     AdicionarFav(id)
    mostrarDialog.value = false 

}
</script>
<template>
<div class="prod-List">
    <div>
     <div>
        <img :src="produto.imagem" class="produto-imagem">
     </div>
     <h2> {{ produto.titulo }}</h2>
     <p class="preco">{{ formataPreco(produto.preco)}}</p>
    </div>
     <ButtonChild @clique="mostrarDialog = true" class="btn">Adicionar</ButtonChild>
     <ProdutosCard 
     v-if="mostrarDialog"
     :id="produto.id"
      :titulo="produto.titulo"
       :preco="produto.preco"
       :imagem="produto.imagem"
       :genero="produto.genero"
        @adicionar-carrinho="AdicionarCar"
       @fechar="mostrarDialog = false"
       @adicionar-fav="AdicionarFavoritos"
       />
      </div>
 
</template>
<style scoped>
 .prod-List{
 padding: 10px;
 text-align: center;
 }
 .produto-imagem{
    width: fit-content;
    height: 340px;
    object-fit: cover;
 }
 .preco{
    font-size: 20px;
 }
 .btn {
    padding: 10px 40px;
    background-color:#6A2931 ;
    color: #fff;
    border: none;
    margin-top: 10px;
    font-size: 15px;
    border-radius: 50px;
 }
</style>