<template>
  <form id="login-form" class="form" @submit.prevent="LoginVerification">
    <img alt="Vue logo" src="./quizsf.png" />
    <div class="mb-2">
      <input
        type="email"
        name="email"
        v-model="user.email"
        id="email"
        class="form-control"
        placeholder="Email"
        required
      />
    </div>
    <div class="mb-2">
      <input
        type="password"
        name="password"
        v-model="user.password"
        id="password"
        class="form-control"
        placeholder="Senha"
        required
      />
    </div>

    <button class="btn btn-primary" id="button_login" type="submit">
      ENTRE EM SUA CONTA
    </button>
     <h6>Não possui conta? <a href="./register">Cadastre-se</a></h6>
    <div class="inline"></div>
  </form>
</template>

<style scoped>
.form-control,
.btn-primary {
  height: 20% !important;
  width: 30%;
  margin-left: 35%;
  position: relative;
  top: 50px;
}

.btn-primary {
  background-color: rgb(241, 241, 18);
  color: #000;
  border-color: none;
  margin: 0%;
  height: 6.5% !important;
  position: relative;
  margin-left: 35%;
}

.btn-primary:hover {
  background-color: rgb(255, 238, 0);
  color: rgb(29, 26, 26);
}
img {
  margin-left: 39.5%;
  width: 20%;
  height: 30%;
}
h6{
  color: #fff;
  text-align: center;
  position: relative;
  top: 55px;
}
a{
    top: 55px;
    color: #fff;
}
</style>

<script src='./index.js'></script>







