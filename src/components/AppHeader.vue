<script setup>
import { RouterLink } from 'vue-router';
import { cart } from '@/utils/CartFun';
const {
    filtro
} = cart
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBagShopping,
  faMagnifyingGlass,
  faHeart,
  faUser
} from '@fortawesome/free-solid-svg-icons'


</script>

<template>
  <header>
    <nav>

      <div class="navbar-links">
            <RouterLink to="/home">Home</RouterLink>
            <RouterLink to="/livraria">Livraria</RouterLink>
    </div>

      <div class="pesquisa">
        <input type="text" placeholder="O que você deseja?" v-model="filtro">
        <FontAwesomeIcon :icon="faMagnifyingGlass" class="lupa"/>
      </div>

      <div class="menu-direita">

        <div class="opcao">
          <FontAwesomeIcon :icon="faHeart" class="icone"/>
          <span>Lista de desejos</span>
        </div>

        <div class="opcao">
          <FontAwesomeIcon :icon="faUser" class="icone"/>
          <span>Minha conta</span>
        </div>

        <RouterLink to="/carrinho" class="carrinho">
          <FontAwesomeIcon :icon="faBagShopping" class="icone"/>
             <div class="carrinho-info">
             <span>O item</span>
             <strong>R$0,00</strong>
             </div>
        </RouterLink>

      </div>

    </nav>

    
  </header>
</template>

<style scoped>


header {
  background: #e8d8c4;
}

nav {
  max-width: 1300px;
  height: 70px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 30px;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #6a2435;
}

/* PESQUISA */

.pesquisa {
  width: 350px;
  position: relative;
}

.pesquisa input {
  width: 100%;
  height: 42px;

  border: none;
  outline: none;

  border-radius: 30px;

  background: #6a2435;
  color: white;

  padding: 0 50px 0 20px;
}

.pesquisa input::placeholder {
  color: #d7bcc3;
}

.lupa {
  position: absolute;
  right: 18px;
  top: 50%;

  transform: translateY(-50%);

  color: white;
  cursor: pointer;
}

.menu-direita {
  display: flex;
  align-items: center;
  gap: 25px;
}

.opcao {
  display: flex;
  align-items: center;
  gap: 8px;

  color: #6a2435;
  font-size: .85rem;

  cursor: pointer;
}

.icone {
  font-size: 1rem;
}

.carrinho {
  text-decoration: none;
  color: #6a2435;

  display: flex;
  align-items: center;
  gap: 8px;
}

.carrinho-info {
  display: flex;
  flex-direction: column;
}

.carrinho-info span {
  font-size: .7rem;
}

.carrinho-info strong {
  font-size: .85rem;
}

.navbar-links {
 
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.navbar-links a {
  text-decoration: none;
  color: #6a2435;
  font-weight: 600;

  transition: .3s;
}

.navbar-links a:hover {
  color: #8c3247;
}


</style>