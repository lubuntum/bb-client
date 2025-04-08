import classicBarrelSauna from "../res/images/classicBarrelSauna.webp"

export const HomeContacts = () => {
    return (
        <div className="contactsContainer">
            <div className="contactsLeft">
                <div className="contactsTitle">
                    <p>Свяжитесь с нами</p>
                </div>

                <div className="contactsSubtitle">
                    <p>Мы готовы ответить на ваши вопросы и помочь выбрать идеальную <br/> банную бочку для вашего дома.</p>
                </div>
            </div>

            <div className="contactsRight">
                <div className="contactsImage">
                    <img src={classicBarrelSauna}></img>
                </div>
            </div>

            <div className="contactsBootom">
                <div className="contactsItem">
                    <div className="contactsItemTitle">
                        <p>Часы работы</p>
                    </div>
                    <div className="contactsItemText">
                        <p>Понедельник - Пятница</p>
                        <p>9:00 - 18:00</p>
                    </div>
                </div>

                <div className="contactsItem">
                    <div className="contactsItemTitle">
                        <p>Наш адрес</p>
                    </div>
                    <div className="contactsItemText">
                        <p>Абакан, ул. Некрасова 31А</p>
                    </div>
                </div>

                <div className="contactsItem">
                    <div className="contactsItemTitle">
                        <p>Свяжитесь с нами</p>
                    </div>
                    <div className="contactsItemText">
                        <p>+7 (800) 555-35-35</p>
                        <p>+7 (345) 678-91-90</p>
                    </div>
                </div>
            </div>
        </div>
    )
}