<script setup>
const props = defineProps(['id','titulo','genero','preco', 'imagem'])
import { ref, computed } from 'vue';
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/ProdutoUtils';
import { cart } from '@/utils/CartFun';

const emit = defineEmits(['AdicionarCarrinho', 'Fechar', 'AdicionarFav'])

const quantidade = ref(1)

const { favoritos } = cart;

const isFavorito = computed(() => {
  return favoritos.value.some(item => item.id === props.id);
});
</script>

<template>
  <div class="overlay">
       <div class="produto-card">
        <div class="info">
        <div>
            <img :src="props.imagem" class="produto-imagem">
        </div>
        <div>
        <h2> {{ props.titulo }}</h2>
        <h3>{{ props.genero }}</h3>
        <p>{{ formataPreco(props.preco) }}</p>
        </div>
        </div>
        <div>
        <input type="number" v-model.number="quantidade" class="caixa">
        <ButtonChild class="btn" @clique="emit('AdicionarCarrinho',props.id , quantidade)">Adicionar</ButtonChild>
</div>

<ButtonChild 
  class="fav" 
  :class="{ 'favoritado': isFavorito }" 
  @clique="emit('AdicionarFav', props.id)"
> 
  <i v-if="isFavorito" class="fa-solid fa-heart icone"></i>
  <i v-else class="fa-regular fa-heart icone"></i>
</ButtonChild>

    <ButtonChild class="btn" @clique="emit('Fechar')">Cancelar</ButtonChild>

       </div>
  </div>
</template>

<style scoped>
.produto-card{
    padding: 2.5vw;
    background: #c5af90f0;
    border-radius: 20px;
}
.icone {
  font-size: 2em;
  color: #5E1922; 
  transition: transform 0.2s, color 0.2s;
  margin: 15px;
}
.fav{
    border: none;
    background:#C5AF90 ;
    cursor: pointer;
}

.fav.favoritado .icone {
  color: #6A2931;
  transform: scale(1.1);
}

.info{
    display: flex;
}
.overlay{
    position: fixed;
    top: 0;left: 0;
    width: 100%;height: 100%;
    background-color: #080808a1;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}
.btn{
    margin: 13px;
    padding: 5px 10px;
    border-radius: 20px;
    border: none;
    color: #fff;
    background-color: #6A2931;
}
.caixa{
    border: none;
    border-radius: 5px;
    padding: 5px  20px;
}
</style>