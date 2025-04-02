import { ReactComponent as SettingsIcon } from "../../res/icons/settings_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as CardIcon } from "../../res/icons/credit_card_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as ShipIcon } from "../../res/icons/local_shipping_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as HammerIcon } from "../../res/icons/hardware_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as DoneIcon } from "../../res/icons/task_alt_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as BankIcon } from "../../res/icons/account_balance_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as PercentIcon } from "../../res/icons/percent_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"

export const OrderDetails = () => {
    return (
        <div className="detailsContainer">
            <div className="detailsStatusContainer">
                <div className="detailsStatusItem">
                    <div className="statusIconContainer">
                        <div className="statusIcon statusActive">
                            <SettingsIcon className="icon"/>
                        </div>
                    </div>

                    <div className="statusName statusActive">
                        <p>Конфигурация</p>
                    </div>
                </div>

                <div className="detailsStatusItem">
                    <div className="statusIconContainer">
                        <div className="statusIcon statusActive">
                            <CardIcon className="icon"/>
                        </div>
                    </div>

                    <div className="statusName statusActive">
                        <p>Оплата</p>
                    </div>
                </div>

                <div className="detailsStatusItem">
                    <div className="statusIconContainer">
                        <div className="statusIcon">
                            <ShipIcon className="icon"/>
                        </div>
                    </div>

                    <div className="statusName">
                        <p>Доставка материала</p>
                    </div>
                </div>

                <div className="detailsStatusItem">
                    <div className="statusIconContainer">
                        <div className="statusIcon">
                            <HammerIcon className="icon"/>
                        </div>
                    </div>

                    <div className="statusName">
                        <p>Строительство</p>
                    </div>
                </div>

                <div className="detailsStatusItem">
                    <div className="statusIconContainer">
                        <div className="statusIcon">
                            <DoneIcon className="icon"/>
                        </div>
                    </div>

                    <div className="statusName">
                        <p>Готово</p>
                    </div>
                </div>
            </div>

            <div className="detailsPriceContainer">
                <div className="priceContainer">
                    <div className="priceTitle">
                        <p>Детали заказа</p>
                    </div>

                    <div className="configItems">
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                        <div className="configItem">
                            <p>Материал</p>
                            <p>Сосна</p>
                        </div>
                    </div>

                    <div className="priceNumber">
                        <p>Итого: <span>1500000 ₽</span></p>
                    </div>

                    <button>Отменить заказ</button>
                </div>

                <div className="paymentContainer">
                    <div className="priceTitle">
                        <p>Варианты оплаты</p>
                    </div>

                    <div className="priceButtons">
                        <div className="priceButton" onClick={()=>{}}>
                            <CardIcon className="icon"/>
                            <p>Банковская карта</p>
                        </div>
                        <div className="priceButton" onClick={()=>{}}>
                            <BankIcon className="icon"/>
                            <p>Банковский перевод</p>
                        </div>
                        <div className="priceButton" onClick={()=>{}}>
                            <PercentIcon className="icon"/>
                            <p>Рассрочка</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}