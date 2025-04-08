import { useNavigate } from "react-router-dom"
import sliderImage1 from "../../res/images/banya-bochka-image1.png"

import { ROUTES } from "../../routes.js"

export const ProductSelection = () => {
    const navigate = useNavigate()

    return (
        <div className="productSelectionContainer">
            <div className="productSelectionTitle">
                <p>Наши банные бочки</p>
            </div>

            <div className="productSelectionSubtitle">
                <p>Выберите основу бочки из нашего ассортимента, сочетающих природное очарование и функциональность.</p>
            </div>

            <div className="productSelectionBase">
                <div className="productSelectionBaseItem" onClick={() => navigate(ROUTES.CONFIGURE)}>
                    <div className="baseImage">
                        <img src={sliderImage1}></img>
                    </div>
                    <p>Кедровая бочка</p>
                </div>

                <div className="productSelectionBaseItem" onClick={() => navigate(ROUTES.CONFIGURE)}>
                    <div className="baseImage">
                        <img src={sliderImage1}></img>
                    </div>
                    <p>Кедровая бочка</p>
                </div>

                <div className="productSelectionBaseItem" onClick={() => navigate(ROUTES.CONFIGURE)}>
                    <div className="baseImage">
                        <img src={sliderImage1}></img>
                    </div>
                    <p>Кедровая бочка</p>
                </div>

                <div className="productSelectionBaseItem" onClick={() => navigate(ROUTES.CONFIGURE)}>
                    <div className="baseImage">
                        <img src={sliderImage1}></img>
                    </div>
                    <p>Кедровая бочка</p>
                </div>

                <div className="productSelectionBaseItem" onClick={() => navigate(ROUTES.CONFIGURE)}>
                    <div className="baseImage">
                        <img src={sliderImage1}></img>
                    </div>
                    <p>Кедровая бочка</p>
                </div>

                <div className="productSelectionBaseItem" onClick={() => navigate(ROUTES.CONFIGURE)}>
                    <div className="baseImage">
                        <img src={sliderImage1}></img>
                    </div>
                    <p>Кедровая бочка</p>
                </div>
            </div>

            <div className="productSelectionButton">
                <button className="configure" onClick={() => navigate(ROUTES.CONFIGURE)}>Конфигуратор <span>&#8594;</span></button>
            </div>
        </div>
    )
}