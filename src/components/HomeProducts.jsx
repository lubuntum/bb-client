import { useNavigate } from "react-router-dom"
import { ROUTES } from "../routes.js"

import classicStyleBarrelSauna from "../res/images/classicStyleBarrelSauna.webp"
import modernStyleBarrelSauna from "../res/images/modernStyleBarrelSauna.webp"

export const HomeProducts = () => {
    const navigate = useNavigate()

    return (
        <div className="productsContainer">
            <div className="productsCard">
                <div className="productImage">
                    <img src={classicStyleBarrelSauna}></img>
                </div>
                <div className="proudctText">
                    <div className="productTitle">
                        <p>Классические модели</p>
                    </div>
                    <div className="productSubtitle">
                        <p>Откройте для себя традиционные бочки, которые идеально подходят для любого дома.</p>
                    </div>
                    <div className="productButton">
                        <a onClick={() => navigate(ROUTES.PRODUCTS)}>Подробнее &#8594;</a>
                    </div>
                </div>
            </div>

            <div className="productsCard">
                <div className="productImage">
                    <img src={modernStyleBarrelSauna}></img>
                </div>
                <div className="proudctText">
                    <div className="productTitle">
                        <p>Современные решения</p>
                    </div>
                    <div className="productSubtitle">
                        <p>Элегантные и стильные бочки для тех, кто ценит современный дизайн.</p>
                    </div>
                    <div className="productButton">
                        <a onClick={() => navigate(ROUTES.PRODUCTS)}>Подробнее &#8594;</a>
                    </div>
                </div>
            </div>
        </div>
    )
}