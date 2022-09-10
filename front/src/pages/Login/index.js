import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api.js'

export default {
  name: 'Login',

  mounted() {
    const token = JSON.parse(localStorage.getItem("Token"))
    api.get("user", {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((Response) => {
      if(Response.data != null){
        this.$router.push({
          path: '/'
        })
      }
    })
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
      }
    }
  },

  methods: {
    LoginVerification() {
        api.post("auth", this.user).then((Response) => {
          if (Response.status == 200) {
            localStorage.setItem('User', JSON.stringify(Response.data.user));
            localStorage.setItem('Token', JSON.stringify(Response.data.token));
            this.$router.push({
            path: '/'
          })
          } 
        }).catch(() => {
          alert("Usuario nao cadastrado, registre-se primeiro...");
          this.$router.push({
           path: '/register'
          })
        });
    },
  },
}