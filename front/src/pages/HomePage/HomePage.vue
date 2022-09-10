<template>
  <div>
    <img alt="Vue logo" src="\quizsf.png" />
    <h2 style="color: white">Bem vindo ao Quiz Show do Milhão !</h2>
    <div style="text-align: center">
      <button class="btn btn-primary" id="btnInit" @click="start">
        INICIAR JOGO
      </button>
    </div>
    <span>
      <button id="btnMenu">
        <svg
          fill="#ffff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 50"
          width="30px"
          height="30px"
        >
          <path
            d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
          />
        </svg>
      </button>
      <button id="btnLogout" @click="logout">
        Sair 
      </button>
    </span>
  </div>
</template>

<script src='./homePage.js'></script>

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

#btnMenu {
  position: absolute;
  top: 2%;
  left: 0.5%;
  background: #000;
}
#btnLogout,
#Logout {
  position: absolute;
  top: 2%;
  right: 2%;
  background: #000;
  color: #fff;
}
     button:hover {
            background-color: blue;
            color:white;
        }
</style>