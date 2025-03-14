import axios from "axios"
import { LOGIN, SERVER_URL } from "./urls"

export const loginRequest = async (email, pass) => {
    const data = {email: email, pass: pass}
    return await axios.post(`${SERVER_URL}${LOGIN}`, data)
}