import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api';
export default {
    name: 'Match',
    mounted() {
      const token = JSON.parse(localStorage.getItem("Token"))
      if(token == null){
        this.$router.push({
          path: '/login'
        })
      } else {
        api.get("user", {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then(() => {}).catch(() => {
          this.$router.push({
            path: '/login'
          })
        })
      }
      this.nextquestion()
    },
    data() {
      return {
        data: {
          question: "",
          questionId: 0,
          theme: "",
          answerA: "",
          answerAId: 0,
          answerB: "",
          answerBId: 0,
          answerC: "",
          answerCId:0,
          answerD: "",
          answerDId:0
        },
        prize: 1000,
        prizeWin: 0,
        prizeLose: 0,
        phase: 1,
        skip: false
      }
    },
    methods: {
      stopGame(){
        const token = JSON.parse(localStorage.getItem("Token"))
        alert("Você decidiu parar..")
        let prizee = this.prizeWin;
        let answer_questions = this.phase;
        let defeats = 1;
        let wins = 0;

        const data = {
          prizee,
          answer_questions,
          defeats,
          wins
        }

        api.put("userStats", data, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }})
        this.$router.push({
          path: '/'
         })
        },
      spikQuestion(){
        if(this.skip == false){
          const token = JSON.parse(localStorage.getItem("Token"))
          api.get("skipQuestion",{
            headers: {
              'Authorization': `Bearer ${token}`,
            }
          }).then((Response) => {
              this.data.question = Response.data.result.question;
              this.data.questionId = Response.data.result.id;
              this.data.theme = Response.data.result.theme;
              this.data.answerA = Response.data.result.answers[0].answer
              this.data.answerAId = Response.data.result.answers[0].id
              this.data.answerB = Response.data.result.answers[1].answer
              this.data.answerBId = Response.data.result.answers[1].id
              this.data.answerC = Response.data.result.answers[2].answer
              this.data.answerCId = Response.data.result.answers[2].id
              this.data.answerD = Response.data.result.answers[3].answer
              this.data.answerDId = Response.data.result.answers[3].id
              this.skip = true;
          })
        }
      },

      nextquestion(){
        const token = JSON.parse(localStorage.getItem("Token"))
        api.get("nextquestion",{
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then((Response) => {
          if (Response.status == 200) {
            this.data.question = Response.data.question;
            this.data.questionId = Response.data.id;
            this.data.theme = Response.data.theme;
            this.data.answerA = Response.data.answers[0].answer
            this.data.answerAId = Response.data.answers[0].id
            this.data.answerB = Response.data.answers[1].answer
            this.data.answerBId = Response.data.answers[1].id
            this.data.answerC = Response.data.answers[2].answer
            this.data.answerCId = Response.data.answers[2].id
            this.data.answerD = Response.data.answers[3].answer
            this.data.answerDId = Response.data.answers[3].id
          }
        } )
      },
      answer(questionId, answerId){
        let phase = this.phase;
        const data = {
          questionId, 
          answerId,
          phase
        }
        const token = JSON.parse(localStorage.getItem("Token"))
        api.post("verifyanswer", data, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then((Response) => {
          if (Response.data.result != null) {
            this.phase++;
            this.prize = Response.data.prize;
            this.prizeWin = Response.data.prizeWin;
            this.prizeLose = Response.data.prizeLose;
            this.data.question = Response.data.result.question;
            this.data.questionId = Response.data.result.id;
            this.data.theme = Response.data.result.theme;
            this.data.answerA = Response.data.result.answers[0].answer
            this.data.answerAId = Response.data.result.answers[0].id
            this.data.answerB = Response.data.result.answers[1].answer
            this.data.answerBId = Response.data.result.answers[1].id
            this.data.answerC = Response.data.result.answers[2].answer
            this.data.answerCId = Response.data.result.answers[2].id
            this.data.answerD = Response.data.result.answers[3].answer
            this.data.answerDId = Response.data.result.answers[3].id

            if(this.phase > 6){
              alert("Parabens, você acertou todas as questões")
              this.$router.push({
                path: '/'
               })

               let prizee = this.prize;
               let answer_questions = this.phase;
               let defeats = 0;
               let wins = 1;
               const data = {
                prizee,
                answer_questions,
                defeats,
                wins
              }
              api.put("userStats", data, {
                headers: {
                  'Authorization': `Bearer ${token}`,
                }})
            }
          } else {
            alert("Resposta incorreta")
            let prizee = this.prizeLose;
            let answer_questions = this.phase;
            let defeats = 1;
            let wins = 0;

            const data = {
              prizee,
              answer_questions,
              defeats,
              wins
            }

            api.put("userStats", data, {
              headers: {
                'Authorization': `Bearer ${token}`,
              }})
            this.$router.push({
              path: '/'
             })
          }
        })
      }
    },
  }