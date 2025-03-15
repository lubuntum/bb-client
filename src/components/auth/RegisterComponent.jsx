import { useState } from "react"
import { STATUSES } from "../../statuses"
import { registerRequest } from "../../services/api/authApi"
import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../routes"
import './css/register.css'
import { authComponentsKeys } from "./AuthPage"
const RegisterComponent = ({setCurrentComponent}) => {
    const [status, setStatus] = useState(STATUSES.IDLE)
    const [accountData, setAccountData] = useState({
        name: "",
        secondName: "",
        patronymic: "",
        phoneNumber: "",
        email: "",
        password: ""
    })
    const registerHandler = async () => {
        try {
            console.log(accountData)
            const response = await registerRequest(accountData)
            console.log(response)
            if (response.status === 201) setCurrentComponent(authComponentsKeys.LOGIN)
        } catch(err) {
            console.error(err)
            setStatus(STATUSES.ERROR)
        }
    }
    const handleUserInput = (key, value) => {
        setAccountData(prev => { return {...prev, [key] : value}})
    }
    return (
        <div className="register-wrapper">
            {status === STATUSES.ERROR && <p style={{color:'red'}}>Error occurred</p>}
            <div className="register-form">
                <input type="text" placeholder="Имя" onChange={e => handleUserInput('name', e.target.value)} />
                <input type="text" placeholder="Фамилия" onChange={e => handleUserInput('secondName',e.target.value)}/>
                <input type="text" placeholder="Отчество" onChange={e => handleUserInput('patronymic',e.target.value)}/>
                <input type="text" placeholder="Номер телефона"  onChange={e => handleUserInput('phoneNumber',e.target.value)}/>
                <input type="email" placeholder="Почта"  onChange={e => handleUserInput('email',e.target.value)}/>
                <input type="password" placeholder="Пароль" onChange={e => handleUserInput('password',e.target.value)}/>
                <input type="password" placeholder="Повторите Пароль"/>
                <button onClick={registerHandler}>Регистрация</button>
            </div>
            <button onClick={()=> {setCurrentComponent(authComponentsKeys.LOGIN)}}>Назад</button>
        </div>
    )
}

export default RegisterComponent