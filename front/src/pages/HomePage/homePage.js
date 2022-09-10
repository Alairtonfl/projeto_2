import 'bootstrap/dist/css/bootstrap.css'
import api from '../../services/api.js'

export default {
  name: 'HomePage',

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
  },

  methods: {
    logout(){
      localStorage.clear();
      this.$router.push({
        path: '/login'
      })
    },
    start(){
      this.$router.push({
        path: '/match'
      })
    }
  },
}