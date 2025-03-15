import { useAuth } from "../../services/auth/AuthProvider"

export const HeaderComponent = () => {
    const {logout, checkAuth} = useAuth()
    return (
        <div>
            {checkAuth() && <button onClick={logout}>Выход</button>}
        </div>
    )
}