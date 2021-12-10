const Auth = {
     getToken() {
          const token = localStorage.getItem('token')
          if (!token) {
               return null
          }
          else return token
     },
     setToken(token) {
          localStorage.setItem('token', token)
     },
     destroyToken() {
          localStorage.removeItem('token')
     },
     isAuthenticated() {
          if (this.getToken()) {
               return true
          }
          else return false
     }
}

export default Auth