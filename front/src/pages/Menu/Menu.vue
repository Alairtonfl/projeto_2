<template>
  <div>
    <img alt="Vue logo" src="\quizsf.png" />
    <h2 style="color: white">Bem vindo ao Quiz Show do Milhão !</h2>
    <div style="text-align: center">
      <button class="btn btn-primary" id="btnInit" type="submit">
        INICIAR JOGO
      </button>
    </div>
    <nav id="menu">
    <fieldset>
      <a href="./edit">
       <input id="edit" type="button" value="Editar Conta">
      </a>
      <a href="./edit">
      <input  id="remove" type="button" value="Remover Conta">
      </a>
      <a href="./questions">
      <input  id="addQuestions" type="button" value="Adicionar Perguntas">
      </a>
      <input  id="delete" type="button" value="Lista de Perguntas">
    </fieldset>
    </nav>
  </div>
</template>

<script src='./menu.js'></script>

<style scoped>

img {
  margin-left: 39.5%;
  width: 20%;
  height: 30%;
  position: relative;
  top: 10%;
}
h2 {
  font-size: 24px;
  text-align: center;
  position: relative;
  top: 15%;
}
.btn-primary {
  background-color: rgb(241, 241, 18) !important;
  color: #000 !important;
  margin-top: 10%;
}

.btn-primary:hover {
  background-color: rgb(255, 238, 0) !important;
  color: rgb(29, 26, 26) !important;
}

#btnInit {
  width: 33%;
}

#menu{
  position: absolute;
  top: 0;
  bottom: 0;  
  left: 0;
  display: grid;
  width: 18%;
  background-color: #505050;
  color: #fff;
}
fieldset{
     position: absolute;
     top: 0;
     left: 18%;
}
input{
    border: none;
    display: grid;
    position: relative;
    top: 100px;
    width: 100%;
    height: 45px;    
    padding-left: 5px;
    box-sizing: border-box;

    background-color: #505050;
    color: #fff;
}
a{
  color: #fff;
  text-decoration: none;
}

</style>