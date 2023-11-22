import { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./LoginPage.css"




const LoginPage = () => {

    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate()
    

   

    const reset = () => {
        setEmail(' ')
        setPassword('')
    }

    const LoginAuth = (e) =>{
        e.preventDefault()

        if(email==="Admin" && password==="admin"){
            navigate("/home")
            
        }
        else{
            alert("invalid username or password");
        }

       

    }


    

    return(
        <div>
            <div className="row">
            <h1 className="heading" style={{margintop:"10%"}}>Student Tracking System</h1>
            </div>
            <div>
                <img src="./login.png"/>
            </div>
            <div className="login">
                <div className="form">
                    <form className="login-form">
                    <span className="material-icons">Login</span>
                    <div>
                        <input type="text" name="email" placeholder="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required  
                         value={email} onChange ={(e) => setEmail(e.target.value)} />    
                   </div>
                    
                    <div>
                        <input type="password"  name="password" placeholder="password" required 
                          value={password} onChange= {(e) => setPassword(e.target.value)} />
                    </div>
                    <button onClick={(e) => LoginAuth(e)}>login</button>
                    
                    <button onClick={() => reset()} style ={{marginTop:"10px"}}>Reset</button>
                    </form>  
                </div>
                </div>
      
        </div>
    )
}
export default LoginPage