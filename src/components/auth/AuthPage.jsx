import { lazy, Suspense, useState } from "react"

//Отобразить первым Login, по кнопке заменять компоненты
const authComponents = {
    LOGIN: lazy(()=> import('./LoginComponent')),
    REGISTER: lazy(()=> import('./RegisterComponent'))
}
export const authComponentsKeys = {LOGIN: "LOGIN", REGISTER: "REGISTER"}
export const AuthPage = () => {
    
    const [currentComponent, setCurrentComponent] = useState(authComponentsKeys.LOGIN)
    const ComponentToRender = authComponents[currentComponent]
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ComponentToRender setCurrentComponent={setCurrentComponent} />
        </Suspense>
    )
}