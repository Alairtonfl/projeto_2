<template>
    <div>
        
        <form action="addQuestions" id="form" @submit.prevent="insertQuestion">
            <h2>Adicionar Pergunta</h2>
            <div class="form-group">
                <label for="questions" >Pergunta</label>
                <input type="text" v-model="data.question" class="form-control" id="question">
            </div>
             <div class="form-group">
                <label for="theme" >Tema</label>
                <input type="text" v-model="data.theme" class="form-control" id="theme">
            </div>
             <div class="form-group">
                <label for="dificulty">Dificuldade</label>
                <select class="form-control" v-model="data.dificulty" id="sel1">
                    <option value="1">Facil</option>
                    <option value="2">Média</option>
                    <option value="3">Dificil</option>
                </select>
            </div>
            <div class="form-group">
                <label for="true" >Resposta Correta</label>
                <input type="text" v-model="answerA" class="form-control" id="true">
            </div>
            <div class="form-group">
                <label for="falseOne" >Resposta Incorreta</label>
                <input type="text" v-model="answerB" class="form-control" id="falseOne">
            </div>
             <div class="form-group" >
                <label for="falseTwo">Resposta Incorreta</label>
                <input type="text" v-model="answerC" class="form-control" id="falseTwo">
            </div>
             <div class="form-group">
                <label for="falseThree">Resposta Incorreta</label>
                <input type="text" v-model="answerD" class="form-control" id="falseThree">
            </div>
            <div class="form-group">
                <button class="" id="add" type="submit">ADICIONAR</button>
                <button class="" id="cancel" type="submit">CANCELAR</button>
            </div>
        </form>
    </div>
</template>

<script src='./questions.js'></script>

<style scoped>
    .form-group{
        color: #fff;
        width: 35%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 40px;
    }
    h2{
        color: #fff;
        text-align: center;
        position: relative;
        top: 40px;
    }
    button{
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 20px;

        border-radius: 8px;

        background-color: rgb(241, 241, 18);;
    }
</style>