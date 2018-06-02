import axios from "axios";
import qs from 'qs'

let actions = store => ({
  setLogedIn: ({}) => ({ isAuthenticated: true }),
  getAuth: ({}) => ({ testString: '12321321' }),
  checkAuth: (store, userId, pass) => {
    const loginObj = {
      username: userId,
      password: pass,
      client_id: 'demo',
      grant_type: 'password'
    }
    var authOptions = {
      method: 'POST',
      url: 'http://localhost:8080/auth/realms/demo/protocol/openid-connect/token',
      data: qs.stringify(loginObj),
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    return axios(authOptions)
      .then(({ data }) => {
        console.log("DATA::::"+data)
        alert("success")
      })
      .catch(error => {
        console.log("ERROR:::"+error)
      });
  } 
})

export default actions;