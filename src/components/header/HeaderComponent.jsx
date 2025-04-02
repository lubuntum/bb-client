import "../../styles/header.css"

import { useAuth } from "../../services/auth/AuthProvider"

import logo from "../../res/images/logo.png"

export const HeaderComponent = () => {
    const { logout, checkAuth } = useAuth()
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"></img>
            </div>

            <div className="nav">
                <a>Главная</a>
                <a>Продукция</a>
                <a>О нас</a>
                {checkAuth && <a>Мои заказы</a>}
            </div>

            <div className="login">
                {checkAuth ? <button onClick={logout}>Выход</button> : <button>Войти</button>}
            </div>
        </header>
    )
}