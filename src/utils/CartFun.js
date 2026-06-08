import { listaLivros } from "@/data/produtos";
import { ref, computed } from "vue";

const carrinho = ref([])
const filtro = ref('');
const filtroGenero = ref('');
const livros = ref([...listaLivros])
const favoritos = ref([])

function useCart (){

function AdicionarCarrinho(id, quantidadeInformada = 1) {
    const livroNoCarrinho = carrinho.value.find(item => item.id === id);
    if (quantidadeInformada >0) {
         if (livroNoCarrinho ) {
     livroNoCarrinho.quantidade+= quantidadeInformada
   }
   else{
    const livroOriginal = listaLivros.find(t => t.id === id);
      if (livroOriginal) {
        carrinho.value.push({ ...livroOriginal, quantidade: quantidadeInformada })
      }
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


function filtrarTarefas(livros, filtroTexto, genero) {
  let resultado = livros;

 
  if (genero && genero.trim().length > 0) {
    resultado = resultado.filter(item => item.genero === genero);
  }


  if (filtroTexto && String(filtroTexto).trim().length > 0) {
    resultado = resultado.filter(item => item.titulo.toLowerCase().includes(filtroTexto.toLowerCase()));
  }

  return resultado;
}

function AdicionarFav(id) {
    const livroNoFavoritos = favoritos.value.find(item => item.id === id);
         if (livroNoFavoritos) {
     favoritos.splice(livroNoFavoritos,1)
   }
   else{
    const livroOriginal = listaLivros.find(t => t.id === id);
      if (livroOriginal) {
        favoritos.value.push({ ...livroOriginal })
      }
   }
}


const livrosFiltradas = computed(() => {
  return filtrarTarefas(livros.value, filtro.value, filtroGenero.value)
})

 return {
    carrinho,
    AdicionarCarrinho,
    DecrementarCarrinho,
    RemoverDoCarrinho,
    quantidadeTotal,
    valorTotal,
    filtrarTarefas,
    livrosFiltradas,
    livros, 
    filtro,
    filtroGenero,
    AdicionarFav,
    favoritos
}
}
const cart = useCart()
export {cart}