import { useState } from "react"
import "./css/login.css"
import { STATUSES } from "../../statuses"
import { loginRequest } from "../../services/api/authApi"
import { useAuth } from "../../services/auth/AuthProvider"
import { authComponentsKeys } from "./AuthPage"
const LoginComponent = ({setCurrentComponent}) => {
    const [status, setStatus] = useState(STATUSES.IDLE)
    const [email, setEmail] = useState(null)
    const [pass, setPass] = useState(null)
    const {login} = useAuth()
    const loginHandler = async () => {
        try {
            const response = await loginRequest(email, pass)
            login(response.data.token)
        } catch(err) {
            setStatus(STATUSES.ERROR)
        }
    }
    return (
        <>
        <div className="login-wrapper">
            {status === STATUSES.ERROR && <span style={{color: "red"}}>Error occured</span>}
            <p>Login component</p>
            <div className="login">
                <input type="text" placeholder="email" onChange={e => {setEmail(e.target.value)}} />
                <input type="password" placeholder="password" onChange={e => {setPass(e.target.value)}}/>
                <button onClick={loginHandler}>Логин</button>
            </div>
            <button onClick={()=> setCurrentComponent(authComponentsKeys.REGISTER)}>Регистрация</button>
        </div>
            
        </>
    )
}

export default LoginComponent