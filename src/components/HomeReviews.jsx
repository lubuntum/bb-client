import { useEffect, useState } from "react"
import reviewsData from "../res/reviews.json"

export const HomeReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        setReviews(reviewsData)
    }, [])

    return (
        <div className="reviewsContainer">
            <div className="reviwesTitle">
                <p>Rustic Retreat в жизни наших пользователей</p>
            </div>

            <div className="reviewsSubtitle">
                <p>Отзывы наших клиентов</p>
            </div>

            <div className="reviewsWrapper">
                {reviews.map((item, index) => (
                    <div className="reviewsCard" key={index}>
                        <div className="reviewText">
                            <p>{item.text}</p>
                        </div>
                        <div className="reviewAuthor">
                            <div className="reviewAuthorName">
                                <p>{item.author}</p>
                                <p>{item.username}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}