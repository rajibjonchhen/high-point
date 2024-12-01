let user = {
    username:"",
    password:""
}
let errorMsg =  document.getElementById("error-msg")
let showPassword =  document.getElementById("showPassword")
const username = document.getElementById("username")
const password = document.getElementById("password")

let isSubmit = false

window.onload =(e) => {
    showPassword.addEventListener("change",() =>{
       password.type = password.type === "password"? "text":"password"
    } ) 
    
    username.addEventListener('change', (event) => {
        user.username = event.target.value;
        if(isSubmit){
            setErrorMsg(validateInput(user))
        }
      });

      password.addEventListener('change', (event) => {
        user.password = event.target.value;
        if(isSubmit){
            
            setErrorMsg(validateInput(user))
        }
      });

      const loginBtn = document.getElementById("loginBtn") 
      loginBtn.addEventListener("click", handleSubmit)

      return () =>{
          showPassword.addEventListener("change",() =>{})
          username.removeEventListener('change', () => {})
          showPassword.removeEventListener("change",() =>{})
        }
}
console.log("credential page")
// let user = {
//     username:"codex-admin",
//     password:"Codex-Img-2022"
// }
function handleSubmit (){
    isSubmit = true
    const errResult  = validateInput(user)
    setErrorMsg(errResult)
    if(!errResult.username && !errResult.password){
        checkCredentials()
    }
}
function validateInput (user) {
    const err = {}
    err.username = !user.username?  "username is missing" : ""
    err.password = !user.password? "password is missing" : ""
    console.log(err)
    return err
  }

  function setErrorMsg(errResult) {
      const errUsername = document.getElementById("errUsername")
    errUsername.innerHTML = errResult.username
    const errPassword = document.getElementById("errPassword")
    errPassword.innerHTML = errResult.password
  }

async function checkCredentials(){
    console.log("fetch result")
    try {
        const response = await fetch("http://localhost:3001/users/credentials",{
            method:"POST",
            body:JSON.stringify({user}),
            headers:{
                "authorization": {user},
                "content-type":"application/json"
            }
        })
        const data  =  await response.json()
        if(data.credentials){
            localStorage.setItem("credentials", data.credentials)
            window.location.replace("/")
        }else{
            errorMsg.innerHTML = data.message
        }
        console.log("fetch result",data)
    } catch (error) {
        console.log(error)
    }
    
}