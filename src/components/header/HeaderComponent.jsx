import "../../styles/header.css"

import { useAuth } from "../../services/auth/AuthProvider"

import { ROUTES } from "../../routes.js"

import logo from "../../res/images/logo.png"
import { useNavigate } from "react-router-dom"

export const HeaderComponent = () => {
    const navigate = useNavigate()

    const { logout, checkAuth } = useAuth()
    return (
        <header>
            <div className="logo" onClick={() => navigate(ROUTES.HOME)}>
                <img src={logo} alt="logo"></img>
            </div>

            <div className="nav">
                <a onClick={() => navigate(ROUTES.HOME)}>Главная</a>
                <a onClick={() => navigate(ROUTES.PRODUCTS)}>Продукция</a>
                <a onClick={() => navigate(ROUTES.ABOUT)}>О нас</a>
                {checkAuth && <a onClick={() => navigate(ROUTES.ACCOUNT)}>Мои заказы</a>}
            </div>

            <div className="login">
                {checkAuth ? <button onClick={logout}>Выход</button> : <button>Войти</button>}
            </div>
        </header>
    )
}