<script setup>
const props = defineProps(['id','titulo','genero','preco', 'imagem'])
import { ref } from 'vue';
import ButtonChild from '../ButtonChild.vue';
import { formataPreco } from '@/utils/ProdutoUtils';
const emit = defineEmits(['AdicionarCarrinho', 'Fechar'])
const quantidade = ref(1)
</script>
<template>
  <div class="overlay">
       <div class="produto-card">
        <div>
            <img :src="props.imagem" class="produto-imagem">
        </div>
        <div>
        <h2> {{ props.titulo }}</h2>
        <h3>{{ props.genero }}</h3>
        <p>{{ formataPreco(props.preco) }}</p>
        </div>
        <div>
        <input type="number" v-model.number="quantidade">
        <ButtonChild @clique="emit('AdicionarCarrinho',props.id , quantidade)">Adicionar</ButtonChild>
</div>
    <ButtonChild @clique="emit('Fechar')">Cancelar</ButtonChild>
       </div>
  </div>
</template>
<style scoped>
.produto-card{
    border: 1px solid #ccc;
    padding: 16px;
    margin-top: 16px;
    background: #1d1d1d;
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

</style>