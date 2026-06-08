<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<template>
  <footer class="rodape">
    <div class="rodape-conteudo">
      
      <div class="coluna-esquerda">
        <h3 class="marca-titulo">Livraria LHE</h3>
        
        <div class="redes-sociais">
          <a href="#" class="instagram">
           <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="twitter">
          <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#" class="facebook">
           <i class="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>

      <div class="coluna-direita">
        <div class="bloco-info">
          <p class="linha-contato">
            <i class="fa-solid fa-phone"></i> +55 47 0000-0000
          </p>
          <p class="linha-contato">
           <i class="fa-solid fa-clock"></i> 8h às 21h - Seg a Sex
          </p>
          <p class="linha-contato">
            <i class="fa-solid fa-envelope"></i> contato@livraria.com
          </p>
        </div>

        <div class="cartoes-pagamento">
          <div class="cartao paypal"><img src="/public/images/paypallogo.png" alt="Cartão PayPal"></div>
          <div class="cartao mastercard"><img src="/public/images/mastercardlogo.png" alt="Cartão MasterCard"></div>
          <div class="cartao visa"><img src="/public/images/visalogo.png" alt="Cartão Visa"></div>
        </div>
      </div>

    </div>

    <div class="rodape-inferior">
      <p>© Alguns direitos reservados</p>
    </div>
  </footer>
</template>

<style scoped>
.rodape {
  background-color: #531B24; 
  color: #FFFFFF;
  padding: 50px 0 20px 0;
  font-family: sans-serif;
  width: 100%;
  display: block;
  
}

.rodape-conteudo {
  width: 88%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 30px;
}


.coluna-esquerda {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.marca-titulo {
  font-size: 1.4rem;
  font-weight: 600;
  color: #E8DDCE; 
  margin: 0;
}

.redes-sociais {
  display: flex;
  gap: 15px;
}

.redes-sociais a i {
  color: #ffffff;
  transition: color 0.2s; 
}


.coluna-direita {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 25px;
  text-align: right;
}


@media (max-width: 768px) {
  .rodape-conteudo {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .coluna-direita {
    align-items: center;
    text-align: center;
  }
}

.bloco-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.linha-contato {
  margin: 0;
  font-size: 0.95rem;
  color: #E8DDCE;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

.linha-contato i {
    color: white;
}

.cartoes-pagamento {
  display: flex;
  gap: 8px;
}

.cartao {
  padding: 4px 10px;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}


.rodape-inferior {
  width: 88%;
  max-width: 1200px;
  margin: 40px auto 0 auto;
  padding-top: 20px;
  border-top: 1px solid #7D2D38; 
  text-align: center;
}

.rodape-inferior p {
  margin: 0;
  font-size: 0.85rem;
  color: #CBB99D;
}
</style>