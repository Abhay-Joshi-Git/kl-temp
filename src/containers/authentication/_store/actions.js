
let actions = store => ({
  setLogedIn: ({}) => ({ isAuthenticated: true }),
  getAuth: ({}) => ({ testString: '12321321' }),  
})

export default actions;
