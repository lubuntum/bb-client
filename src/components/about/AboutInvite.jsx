import { useNavigate } from "react-router-dom"
import { ROUTES } from "../../routes.js"
import { useAuth } from "../../services/auth/AuthProvider"

export const AboutInvite = () => {
    const navigate = useNavigate()
    const { checkAuth } = useAuth()

    return (
        <div className="inviteContainer">
            <div className="inviteTitle">
                <p>Заказывайте наши бани бочки</p>
            </div>

            <div className="inviteSubtitle">
                <p>Поддержите традиции и наслаждайтесь комфортом. Узнайте, как <br/> Rustic Retreat может стать частью вашего уюта.</p>
            </div>

            <div className="inviteButton">
                <button className="outline" style={{fontSize: "1.25rem", height: "50px", padding: "0 50px"}} onClick={() => navigate(ROUTES.PRODUCTS)}>Наши бочки</button>
                {!checkAuth && <button style={{fontSize: "1.25rem", height: "50px", padding: "0 50px"}} onClick={() => navigate(ROUTES.AUTH)}>Регистрация</button>}
            </div>
        </div>
    )
}