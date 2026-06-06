<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTruck,
  faDownload,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
</script>
<template>
<section class="beneficios">
        <div class="freteimg">
          <div class="fretetext">
              <span><FontAwesomeIcon :icon="faTruck" style="color: #531b24; " /></span>
              <h3>Frete grátis para todos os produtos!</h3>
            </div>
        </div>
        
        <div class="conteudoEx">
            <div class="conteudoEx">
            <span><FontAwesomeIcon :icon="faDownload" style="color: #531b24;" /></span>
            <h3>Conteúdos exclusivos</h3>
            <p>Materiais para alunos e professores.</p>
        </div>
    </div>
    <div class="envioImg">
          <div class="envioText">
            <span><FontAwesomeIcon :icon="faLocationDot" style="color: #531b24;" /></span>
            <h3>Envio para toda a região</h3>
        </div>
        </div>
        
    </section>
    
</template>
<style scoped>

.beneficios {
    background-color: #e8ddce;
    padding: 20px ;
    display: flex;
    margin-left: 70px;
    margin-right: 70px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    gap: 60px;
}

.freteimg,
.conteudoEx,
.envioImg {
    display: flex;
    align-items: center;
    gap: 15px;
    color: #5e2232;
    position: relative;
}

/* divisórias */

.conteudoEx::after,
.freteimg::after {
    content: "";

    position: absolute;

    right: -30px;

    width: 1px;
    height: 50px;

    background: #b48d93;
}

.freteimg::before {
   
    font-size: 2rem;
}

.conteudoEx::before {
    
    font-size: 2rem;
}

.envioImg::before {
    
    font-size: 2rem;
}

.fretetext h3,
.conteudoEx h3,
.envioText h3 {
    font-size: 1.5rem;
    font-weight: 500;
}

.conteudoEx p {
    font-size: 1rem;
    margin-top: 4px;
}

.produto-list{
    display:grid ;
    grid-template-columns: repeat(3fr, 1fr);
}

.fretetext{
    display: flex;
}
.fretetext span {
    margin: 20px 20px 0 20px ;
}
.envioText{
    display: flex;
   
}

</style>