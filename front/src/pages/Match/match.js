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
      }
    },
    methods: {

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
        })
      },
      answer(questionId, answerId){
        console.log(questionId, answerId);
      }
    },
  }