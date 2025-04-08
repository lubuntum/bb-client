import galleryImage1 from "../res/images/barrelGallery1.webp"
import galleryImage2 from "../res/images/barrelGallery2.webp"
import galleryImage3 from "../res/images/barrelGallery3.webp"
import galleryImage4 from "../res/images/barrelGallery4.webp"
import galleryImage5 from "../res/images/barrelGallery5.webp"
import galleryImage6 from "../res/images/barrelGallery6.webp"

export const HomeGallery = () => {
    return (
        <div className="galleryContainer">
            <div className="galleryTitle">
                <p>Галерея наших работ</p>
            </div>
            
            <div className="gallerySubtitle">
                <p>Оцените красоту и качество наших банных бочек, <br/> созданных с любовью и вниманием к деталям.</p>
            </div>

            <div className="galleryImages">
                <div className="galleryItem">
                    <div className="galleryImage">
                        <img src={galleryImage1}></img>
                    </div>
                    <div className="galleryText">
                        <p>Традиционная бочка</p>
                    </div>
                </div>

                <div className="galleryItem">
                    <div className="galleryImage">
                        <img src={galleryImage2}></img>
                    </div>
                    <div className="galleryText">
                        <p>Сосновая бочка</p>
                    </div>
                </div>

                <div className="galleryItem">
                    <div className="galleryImage">
                        <img src={galleryImage3}></img>
                    </div>
                    <div className="galleryText">
                        <p>Еловая бочка</p>
                    </div>
                </div>

                <div className="galleryItem">
                    <div className="galleryImage">
                        <img src={galleryImage4}></img>
                    </div>
                    <div className="galleryText">
                        <p>Овальная бочка</p>
                    </div>
                </div>

                <div className="galleryItem">
                    <div className="galleryImage">
                        <img src={galleryImage5}></img>
                    </div>
                    <div className="galleryText">
                        <p>Традиционная бочка</p>
                    </div>
                </div>

                <div className="galleryItem">
                    <div className="galleryImage">
                        <img src={galleryImage6}></img>
                    </div>
                    <div className="galleryText">
                        <p>Традиционная бочка</p>
                    </div>
                </div>
            </div>
        </div>
    )
}