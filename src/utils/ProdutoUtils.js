import { moedaPais, idioma } from "./Global";

function formataPreco(preco){
    return Number(preco).toLocaleString(idioma, {
        style: 'currency',
        currency: moedaPais
    })
}
export {formataPreco}