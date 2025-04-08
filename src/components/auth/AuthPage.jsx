import "../../styles/auth_page/auth.css"
import "../../styles/auth_page/registration.css"
import "../../styles/auth_page/login.css"

import banner from "../../res/images/authBanner.webp"

import { lazy, Suspense, useState } from "react"
import('./LoginComponent')

const authComponents = {
    LOGIN: lazy(() => import('./LoginComponent')),
    REGISTER: lazy(() => import('./RegisterComponent'))
}

export const authComponentsKeys = {LOGIN: "LOGIN", REGISTER: "REGISTER"}

export const AuthPage = () => {
    const [currentComponent, setCurrentComponent] = useState(authComponentsKeys.LOGIN)
    const ComponentToRender = authComponents[currentComponent]

    return (
        <div className="authContainer">
            <div className="authPic">
                <img src={banner}></img>
            </div>
            
            <div className="formContainer">
                <Suspense fallback={<div>Loading...</div>}>
                    <ComponentToRender setCurrentComponent={setCurrentComponent}/>
                </Suspense>
            </div>
        </div>
    )
}