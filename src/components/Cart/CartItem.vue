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
        <div class="info">
        <div class="imagem-container">
            <img :src="props.imagem" class="produto-imagem">
        </div>
        <div class="textos">
         <h2>{{ props.titulo }}</h2>
           <h3>{{ formataPreco(props.preco) }}</h3>
               <p>{{ props.genero }}</p>
             </div>
</div>

<div class="controles">
  <ButtonChild class="btn" @clique="DecrementarCarrinho(props.id,1)">-</ButtonChild>
  <span> Quantidade : {{ props.quantidade }}</span>
  <ButtonChild class="btn" @clique="AdicionarCarrinho(props.id,1)">+</ButtonChild>
</div>

<ButtonChild class="btn-remover" @clique="RemoverDoCarrinho(props.id)"> </ButtonChild>

</div>
</template>
<style scoped>

.carrinho-item{
   display: flex;
   justify-content: space-between;
  align-items: center;
  margin: 20px;
  padding: 10px;
  border-bottom: 2px solid #6A2931;
}
.imagem-container{
    width: 225px;
    height: 334px;
    overflow: hidden;
    flex-shrink: 0;
}
.produto-imagem{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.info{
    display: flex;
    margin: 5vw;
}
.btn{
    border: none;
    background-color: #C5AF90;
    font-size: 30px;
    margin: 10px;
}
.controles{
 font-size: 1.5rem;
}
.textos{
    text-align: left;
    margin-left: 20px;
    font-weight: 400;
}

</style>