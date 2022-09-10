import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api'

export default {
    name: 'Questions',

    mounted() {
      const token = JSON.parse(localStorage.getItem("Token"))
      api.get("user", {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
    },
    data() {
      return {
        data: {
          question: "",
          answers: [],
          dificulty: 0,
          theme: ""
        },
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
      }
    },

    methods: {
      insertQuestion() {
        const token = JSON.parse(localStorage.getItem("Token"));
        this.data = this.formatPost(this.data);
        api.post('question', this.data,{
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        }).then((Response) => {
          if(Response.data){
            alert("Pergunta adcionada")
            location.reload(true);
          } else {
            alert('Ocorreu algum erro')
          }
        })
    },

    formatPost(data){
      var answers = [
        {
          "answer": this.answerA,
          "correct": true
        },
        {
          "answer": this.answerB,
          "correct": false
        },
        {
          "answer": this.answerC,
          "correct": false
        },
        {
          "answer": this.answerD,
          "correct": false
        }
      ];
      data.answers = answers;
      return data;
    }
    },
}