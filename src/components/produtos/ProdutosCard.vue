<script setup>
const props = defineProps(['id','titulo','genero','preco', 'imagem'])
import { ref } from 'vue';
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/ProdutoUtils';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 import{ faHeart } from '@fortawesome/free-solid-svg-icons'
const emit = defineEmits(['AdicionarCarrinho', 'Fechar', 'AdicionarFav'])
const quantidade = ref(1)
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
<ButtonChild class="fav" @clique="emit('AdicionarFav',props.id)"> <FontAwesomeIcon :icon="faHeart" class="icone"/> </ButtonChild>
    <ButtonChild class="btn" @clique="emit('Fechar')">Cancelar</ButtonChild>

       </div>
  </div>
</template>
<style scoped>
.produto-card{
    padding: 16px;
    margin-top: 16px;
    background: #C5AF90;
}
.icone {
  font-size: 2em;
}
.fav{
    border: none;
    background:#C5AF90 ;
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