import { Navigate, Route } from "react-router-dom"
import { useAuth } from "./AuthProvider"
import { ROUTES } from "../../routes"

export const ProtectedRoute = ({element}) => {
    const {isAuth, checkAuth} = useAuth()
    console.log(isAuth)
    return checkAuth() ? element : <Navigate to={ROUTES.AUTH} />
}