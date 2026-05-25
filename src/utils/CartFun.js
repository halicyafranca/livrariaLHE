import { listaLivros } from "@/data/produtos";
import { ref, computed } from "vue";
const carrinho = ref([])
const filtro = ref('');
const livros = ref([...listaLivros])
function useCart (){

function AdicionarCarrinho(id, quantidadeInformada = 1) {
    const livroNoCarrinho = carrinho.value.find(item => item.id === id);
   if (livroNoCarrinho) {
     livroNoCarrinho.quantidade+= quantidadeInformada
   }
   else{
    const livroOriginal = listaLivros.find(t => t.id === id);
      if (livroOriginal) {
        carrinho.value.push({ ...livroOriginal, quantidade: quantidadeInformada })
      }
   }
}
 function DecrementarCarrinho(id, quantidadeInformada = 1) {
    const livroNoCarrinho = carrinho.value.find(item => item.id === id)

    if (livroNoCarrinho) {
      livroNoCarrinho.quantidade -= quantidadeInformada      
      if (livroNoCarrinho.quantidade <= 0) {
        RemoverDoCarrinho(id)
      }
    }
  }
 function RemoverDoCarrinho(id) {
    carrinho.value = carrinho.value.filter(item => item.id !== id)
  }

const quantidadeTotal = computed(()=> {
    let totalItems = 0 
    for (let item of carrinho.value) {
        totalItems+=item.quantidade
    }
    return totalItems
})
const valorTotal = computed(()=> {
    let totalValor = 0 
    for (let item of carrinho.value) {
        totalValor+=item.preco * item.quantidade
    }
    return totalValor
})
function filtrarTarefas(livros, filtro) {
  if (!filtro) return livros
    if (String(filtro.value).trim().length > 0 ) {
    return livros.filter(item => item.titulo.toLowerCase().includes(filtro.toLowerCase()));
  }
  else{
    return livros.value
  }
}


const livrosFiltradas = computed(() => {
  return filtrarTarefas(livros.value,filtro.value)
})
 console.log(carrinho.value)
return {
    carrinho,
    AdicionarCarrinho,
    DecrementarCarrinho,
    RemoverDoCarrinho,
    quantidadeTotal,
    valorTotal,
    filtrarTarefas,
    livrosFiltradas,
    filtro
}
}
const cart = useCart()
export {cart}