import { useState } from "react"
import { STATUSES } from "../../statuses"
import { loginRequest } from "../../services/api/authApi"
import { useAuth } from "../../services/auth/AuthProvider"
import { authComponentsKeys } from "./AuthPage"
import { ROUTES } from "../../routes.js"

import { ReactComponent as FaceIcon } from "../../res/icons/face_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { useNavigate } from "react-router-dom"

const LoginComponent = ({setCurrentComponent}) => {
    const navigate = useNavigate()
    
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
        <div className="loginContainer">
            <div className="loginTitle">
                <button className="link" onClick={()=> navigate(ROUTES.HOME)}>Назад</button>
                <p>Вход</p>
                <button className="link" onClick={()=> setCurrentComponent(authComponentsKeys.REGISTER)}>Создать аккаунт</button>
            </div>
            
            {status === STATUSES.ERROR && <span style={{color: "red"}}>Error occured</span>}

            <div className="loginForm">
                <div className="formTitle">
                    <FaceIcon className="icon"/>
                    <p>Войти в аккаунт</p>
                </div>

                <div className="formSubtitle">
                    <p>Введите свои данные для входа</p>
                </div>

                <input autoComplete="off" type="text" placeholder="Почта" onChange={e => {setEmail(e.target.value)}} />
                <input autoComplete="off" type="password" placeholder="Пароль" onChange={e => {setPass(e.target.value)}}/>
                
                <div className="forgotPassword">
                    <button className="link">Забыли пароль?</button>
                </div>

                <button onClick={loginHandler}>Войти</button>
            </div>
        </div>
    )
}

export default LoginComponent