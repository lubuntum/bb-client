import { useEffect, useState } from "react"
import { getBarrelComponentsRequest } from "../../services/api/barrelComponentsApi"

import { ReactComponent as MaterialIcon } from "../../res/icons/forest_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as FormIcon } from "../../res/icons/deployed_code_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as ColorIcon } from "../../res/icons/palette_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as OvenIcon } from "../../res/icons/bath_outdoor_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as OvenAddIcon } from "../../res/icons/add_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as WindowIcon } from "../../res/icons/grid_view_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as TankIcon } from "../../res/icons/home_speaker_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as DoorIcon } from "../../res/icons/door_front_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as SizeIcon } from "../../res/icons/straighten_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as FoundationIcon } from "../../res/icons/foundation_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"
import { ReactComponent as TentionIcon } from "../../res/icons/circle_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.svg"

export const ConfigureFunc = () => {
    const avaliableTypes = [
        "material", "form", "ovenType", "color", "ovenAddition", "door", "tank", "window", "base"
    ]
    const [settingsItems, setSettingsItems] = useState(null)
    const settingsItemsTemplate = [
        {
            name: "material_id",
            icon: <MaterialIcon className="icon" />,
            type: "material",
            title: "Выбор материала",
            description: "Выберите материал, из которого будет изготовлена ваша баня-бочка. Каждый из них обладает уникальными свойствами, такими как теплоизоляция и долговечность, что поможет создать идеальное пространство для отдыха и релаксации.",
            options: ["Сосна (200 р)", "Ель", "Лиственница", "Кедр", "Дуб", "Клен", "Сибирская лиственница", "Грецкий орех"]
        },
        {
            name: "form_id",
            icon: <FormIcon className="icon" />,
            type: "form",
            title: "Выбор формы",
            description: "Форма вашей бани-бочки влияет на её внешний вид и внутреннее пространство. Выберите ту, которая лучше всего соответствует вашему стилю и предпочтениям, чтобы создать уютное место для парения и отдыха.",
            options: ["Бочка", "Куб", "Овал", "Буханка", "Окта", "Хилл-хаус", "Викинг", "Европа"]
        },
        {
            name: "color_id", 
            icon: <ColorIcon className="icon" />,
            type: "color",
            title: "Выбор цвета",
            description: "Цвет вашей бани-бочки играет важную роль в её восприятии. Выберите оттенок, который гармонирует с окружающим ландшафтом и создаёт атмосферу уюта и спокойствия, подчеркивая природную красоту.",
            options: ["Светло-коричневый", "Темно-коричневый", "Золотистый", "Серый", "Кремовый", "Оливковый", "Темно-зеленый", "Бежевый", "Терракотовый", "Светло-зеленый", "Песочный", "Медовый"]
        },
        {   
            name: "oven_type_id", 
            icon: <OvenIcon className="icon" />,
            type: "ovenType",
            title: "Выбор типа печи",
            description: "Тип печи определяет комфорт и эффективность обогрева вашей бани-бочки. Выберите вариант, который обеспечит оптимальные условия для парения и создаст приятную атмосферу внутри.",
            options: ["Печь, с топкой внутри парной", "Печь, с выносной топкой на улицу"]
        },
        {
            name: "oven_addition_id", 
            icon: <><OvenIcon className="icon" /> <OvenAddIcon className="icon" /></>,
            type: "ovenAddition",
            title: "Выбор дополнения к печи",
            description: "Дополнения к печи могут улучшить её функциональность и эффективность. Выберите опцию, которая наилучшим образом соответствует вашим потребностям, чтобы сделать процесс парения ещё более комфортным.",
            options: ["Без дополнений", "Замена на черный дымоход", "Усиление камеры горения"]
        },
        {
            name: "window_id", 
            icon: <WindowIcon className="icon" />,
            type: "window",
            title: "Выбор окна",
            description: "Окна в бане-бочке обеспечивают естественное освещение и вентиляцию. Выберите вариант, который создаст комфортную атмосферу и позволит наслаждаться видами на природу, добавляя уют в ваше пространство.",
            options: ["Без окон", "Окно 300х400", "2 окна 300х400", "Панорамный стеклопакет"]
        },
        {
            name: "tank_id", 
            icon: <TankIcon className="icon" />,
            type: "tank",
            title: "Выбор бака для воды",
            description: "Бак для воды — важный элемент вашей бани-бочки. Выберите подходящий вариант, который обеспечит необходимый запас воды для комфортного парения и удобства в использовании.",
            options: ["Сетка для камней", "30 литров", "50 литров"]
        },
        {   
            name: "door_id", 
            icon: <DoorIcon className="icon" />,
            type: "door",
            title: "Выбор двери",
            description: "Дверь — это не только элемент безопасности, но и важная деталь дизайна вашей бани-бочки. Выберите дверь, которая будет сочетаться с общим стилем и обеспечит удобный доступ.",
            options: ["Деревянная дверь 1640х605 мм с окошком (правая)", "Деревянная дверь 1640х605 мм с окошком (левая)", "Дверь ПВХ 1640х605 мм (правая)", "Дверь ПВХ 1640х605 мм (левая)"]
        },
        {
            name: "area_id", 
            icon: <SizeIcon className="icon" />,
            type: "area",
            title: "Выбор размера",
            description: "Размер вашей бани-бочки влияет на её вместимость и комфорт. Выберите оптимальный размер, который соответствует вашим потребностям и возможностям участка, чтобы создать идеальное место для отдыха.",
            options: ["2 х 2 м", "2.5 х 2.5 м", "3 х 2 м", "3 х 3 м", "4 х 2.5 м", "4 х 3 м", "5 х 2.5 м", "5 х 3 м", "6 х 3 м", "7 х 3 м"]
        },
        {
            name: "base_id", 
            icon: <FoundationIcon className="icon" />,
            type: "base",
            title: "Выбор фундамента",
            description: "Правильный фундамент — залог долговечности и устойчивости вашей бани-бочки. Выберите подходящий вариант, который обеспечит надежную основу для вашего строения и защитит его от воздействия внешней среды.",
            options: ["Бетонное основание", "2 бруса под основание", "4 бруса под основание", "6 брусьев под основание"]
        },
        {
            name: "tension_ring_id", 
            icon: <TentionIcon className="icon" />,
            type: "tensionRing",
            title: "Выбор стяжных колец",
            description: "Стяжные кольца обеспечивают дополнительную прочность и устойчивость конструкции вашей бани-бочки. Выберите количество колец, которое обеспечит необходимую поддержку и защиту, гарантируя долговечность вашей бани.",
            options: ["2 стяжных кольца", "4 стяжных кольца", "6 стяжных колец"]
        }
    ]

    const [selectedOptions, setSelectedOptions] = useState({})
    const [barrelSauna, setBarrelSauna] = useState({})
    /**
     * Хук подгружает материалы и подставляет их в settingsItem
     */
    useEffect(() => {
        const getBarrelComponents = async () => {
            const request = await getBarrelComponentsRequest()
            const test = settingsItemsTemplate.map( item => {
                const dataForItem = request.data[item.type]
                if (!dataForItem) return item
                item.options = dataForItem
                return item
            })
            const preparedItems = avaliableTypes.map( type => {
                const foundItem = settingsItemsTemplate.find((item) => item.type === type) // находим нужный item по его типу (material и тд)
                foundItem.options = request.data[type] // у найденного item сохраняем в options список значений из запроса с таким же типом (material и тд)
                return foundItem
            })
            console.log(test)
            setSettingsItems(test)
        }
        getBarrelComponents()
    }, [])

    useEffect(() => {
        console.log(barrelSauna);
    }, [barrelSauna]);

    const handleOptionSelect = (name, option) => {
        setBarrelSauna(prevState => ({
            ...prevState,
            [name]: option
        }))
        
    }

    return (
        <div className="configureContainer">
            <div className="configureTitle">
                <p>Индивидуальная настройка банных бочек</p>
            </div>

            <div className="configureSubtitle">
                <p>Создайте идеальную банную бочку, которая подчеркнёт ваш стиль и гармонично впишется в ваш загородный отдых. <br/> Выберите материалы, размеры и дополнительные опции для создания уникального пространства для релаксации.</p>
            </div>

            <div className="configureContent">
                <div className="configureLeft">
                    <div className="configureLeftTitle">
                        <p>Настройки бочки</p>
                    </div>
                    <div className="configureSettings">
                        {settingsItems && settingsItems.map((item, index) => (
                            <div className="configureSettingsItem" key={`item${index}`}>
                                <div className="configureSettingsTitle">
                                    {item.icon}
                                    <div className="configureSettingsName">
                                        <p>{item.title}</p>
                                    </div>
                                </div>

                                <div className="configureSettingsDescription">
                                    <p>{item.description}</p>
                                </div>

                                <div className="configureSettingsButtons">
                                    {item.options.map((option, index) => (
                                        <button key={`itemOption${index}`}
                                                className={`configureItem ${barrelSauna[item.name] === option.id ? "configureSelected" : ""}`}
                                                onClick={() => handleOptionSelect(item.name, option.id)}>{option.type}</button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="configureRight">

                </div>
            </div>
        </div>
    )
}