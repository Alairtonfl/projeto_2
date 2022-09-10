<template>
    <fieldset>
        <div id="EditAccount">
            <div id="login-row">
                <form id="login-form" class="formEdit">
                    <img alt="Vue logo" src="../Login/quizsf.png" />
                     <div class="mb-2">
                        <input id="name" type="text" class="form-control" placeholder="Nome" required>
                    </div>
                    <div class="mb-2">
                        <input id="e-mail" type="e-mail" class="form-control" placeholder="Email" required>
                    </div>
                    <div class="mb-2">
                        <input id="password" type="password" class="form-control" placeholder="Senha atual" required>
                    </div>
                    <div class="mb-2">
                        <input id="newPassword" type="password" class="form-control" placeholder="Nova senha" required>
                    </div>
                     <div class="mb-2">
                        <button class="" id="add" type="submit">EDITAR</button>
                        <button class="" id="cancel" type="submit">CANCELAR</button>
                    </div>
                </form>
            </div>
        </div>
    </fieldset>
</template>

<script src='./edit.js'></script>

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
 button{
        width: 15.2%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 55px;
        left: 35%;
        border-radius: 8px;

        background-color: rgb(241, 241, 18);;
    }

</style>

