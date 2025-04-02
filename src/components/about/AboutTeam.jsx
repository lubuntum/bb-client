import sliderImage1 from "../../res/images/banya-bochka-image1.png"

export const AboutTeam = () => {
    return (
        <div className="teamContainer">
            <div className="teamContentWrapper">
                <div className="teamTitle">
                    <p>Наша команда</p>
                </div>

                <div className="teamSubtitle">
                    <p>Мы — команда мастеров и дизайнеров, которые объединены одной целью: <br/> создавать уникальные банные бочки, которые дарят тепло и радость.</p>
                </div>

                <div className="teamCards">
                    <div className="teamCard">
                        <div className="teamCardImg">
                            <img src={sliderImage1}></img>
                        </div>

                        <div className="teamCardName">
                            <p>Алексей Иванов</p>
                            <p>Основатель / директор</p>
                            <p>Абакан, Россия</p>
                        </div>
                    </div>

                    <div className="teamCard">
                        <div className="teamCardImg">
                            <img src={sliderImage1}></img>
                        </div>

                        <div className="teamCardName">
                            <p>Алексей Иванов</p>
                            <p>Основатель / директор</p>
                            <p>Абакан, Россия</p>
                        </div>
                    </div>

                    <div className="teamCard">
                        <div className="teamCardImg">
                            <img src={sliderImage1}></img>
                        </div>

                        <div className="teamCardName">
                            <p>Алексей Иванов</p>
                            <p>Основатель / директор</p>
                            <p>Абакан, Россия</p>
                        </div>
                    </div>

                    <div className="teamCard">
                        <div className="teamCardImg">
                            <img src={sliderImage1}></img>
                        </div>

                        <div className="teamCardName">
                            <p>Алексей Иванов</p>
                            <p>Основатель / директор</p>
                            <p>Абакан, Россия</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}