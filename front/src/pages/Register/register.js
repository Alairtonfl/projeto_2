import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api.js'

export default {
  name: 'Register',

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
        name: "",
        email: "",
        password: "",
        avatar: ""
      }
    }
  },

  methods: {
    register() {
        api.post('user', this.user).then((Response) => {
          if(Response.data){
            localStorage.setItem('User', JSON.stringify(Response.data.user));
            localStorage.setItem('Token', JSON.stringify(Response.data.token));
            this.$router.push({
            path: '/'
          })
          } else {
            alert('Ocorreu algum erro')
          }
        })
    }
  },
}

