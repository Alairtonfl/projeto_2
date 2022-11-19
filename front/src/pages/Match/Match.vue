<template>
    <div>
        <button id="btnMenu">
            <img src="./icons8-back-64.png" alt="">
        </button>
        <div class="mb-3">
            <label class="form-control">
                <h2> Pegunta valendo {{prize}} reais</h2>
                <h2> Parar recebe {{prizeWin}} reais</h2>
            </label>
            <label class="form-control" id="exampleFormControlTextarea1" rows="3">
                {{data.question}}
            </label>
           <div class="d-grid gap-2">
                <button type="button" class="btn btn-secondary btn-lg" @click.prevent="answer(data.questionId, data.answerAId)"> <label id="A">A</label> {{data.answerA}}</button>
                <button type="button" class="btn btn-secondary btn-lg" @click.prevent="answer(data.questionId, data.answerBId)"> <label id="B">B</label> {{data.answerB}} </button>
                <button type="button" class="btn btn-secondary btn-lg" @click.prevent="answer(data.questionId, data.answerCId)"><label id="C">C</label> {{data.answerC}}</button>
                <button type="button" class="btn btn-secondary btn-lg" @click.prevent="answer(data.questionId, data.answerDId)"><label id="D">D</label> {{data.answerD}}</button>
            </div>
        </div>
        <div>
            <button id="removeQuestions">
                <img src="./baralho.png" style="height: 40px; margin-left: 5px;" alt="">
                Remover
            </button>
                <button type="button" id="skipQuestion" class="btn btn-success" @click.prevent="spikQuestion()">Pular</button>
                <button type="button" id="stopGame" class="btn btn-danger" @click.prevent="stopGame()">Parar</button>
        </div>
    </div>
</template>
<script src='./match.js'></script>

<style scoped>
    .form-control{

        width: 75%;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 90px;
        right: 70px;
        border-radius: 8px;

        background: rgb(226, 224, 224);

        font-size: 30px;
    }
    button{
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        top: 150px;
        right: 70px;
        border-radius: 8px;

        background: rgb(226, 224, 224);
        color: #000;
        font-size: 20px;
        text-align: start;        
    }
    #a, #b, #c, #d{
        text-align: center;
        width: 3%;
        background: yellow;
        border-radius: 50%;
    }
    #btnMenu {
        position: absolute;
        top: 2%;
        left: -20%;
        background: #000;
        
    }
    img{
        height: 35px;
    }
    #removeQuestions{
        background-color: #ECB730;
        position: absolute;
        height: 70px;
        width: 70px;
        top: 15%;
        right: 2%;
        font-size: 14px;
        border-radius: 8%;

        color: rgb(2, 2, 2);
    }

    #skipQuestion{
        position: absolute;
        height: 70px;
        width: 70px;
        top: 25%;
        right: 2%;
    }

    #stopGame{
        position: absolute;
        height: 70px;
        width: 70px;
        top: 35%;
        right: 2%;
    }
   
</style>