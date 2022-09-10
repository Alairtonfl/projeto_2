<template>
        <fieldset>
            <div id="createAccount">
                
               <div id="login-row">
                   <form id="login-form" class="form" @submit.prevent="register">
                       <img alt="Vue logo" src="../Login/quizsf.png" />
                        <div class="mb-2">
                            <input id="name" type="text" class="form-control" v-model="user.name" placeholder="Nome" required>
                        </div>
                        <div class="mb-2">
                            <input id="email" type="email" class="form-control" v-model="user.email" placeholder="E-mail" required>
                         </div>
                        <div class="mb-2">
                            <input id="password" type="password" class="form-control" v-model="user.password" placeholder="Senha" required>
                        </div>
                        <div class="mb-2">
                            <input id="avatar" type="img" class="form-control" v-model="user.avatar" placeholder="Avatar"  required>
                         </div>
                        <div class="mb-2">
                            <button id="registerBtn" class="btn btn-success" type="submit">ABRIR MINHA CONTA</button>
                        </div>
                   </form>
               </div>  
            </div>
        </fieldset>
    
</template>


<style scoped>
img {
  margin-left: 39.5%;
  width: 20%;
  height: 30%;
}

.form-control,
.btn-success {
  height: 20% !important;
  width: 30%;
  margin-left: 35%;
  position: relative;
  top: 50px;
}

.btn-success {
  background-color: rgb(241, 241, 18);
  color: #000;
  margin: 0%;
  height: 6.5% !important;
  position: relative;
  margin-left: 35%;
}

.btn-success:hover {
  background-color: rgb(255, 238, 0);
  color: rgb(29, 26, 26);
}


</style>

<script src='./register.js'></script>

