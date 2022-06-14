import Card from "../../../ui/Card";
import React from "react";
import styles from "./index.module.sass";

const data = [
    {
        title: "Сведения о закупке",
        items: [
            { label: "Наименование", value: "Наименование закупки" },
            { label: "Номер извещения", value: "№894721" },
            { label: "Секция размещения", value: "Закупки по 223-ФЗ" },
            { label: "Способ проведения", value: "Конкурентный отбор" },
            { label: "Реестровый номер  ЕИС", value: "№32211462968" },
        ],
    },
    {
        title: "Сведения об организаторе",
        items: [
            {
                label: "Наименование организатора",
                value: 'АКЦИОНЕРНОЕ ОБЩЕСТВО "БАШКИРСКАЯ СОДОВАЯ КОМПАНИЯ"',
            },
            {
                label: "Юридический адрес",
                value: "453110, RU, Респ Башкортостан, Стерлитамак, Техническая, 32",
            },
            {
                label: "Почтовый адрес",
                value: "453110, RU, Респ Башкортостан, Стерлитамак, Техническая, 32",
            },
            { label: "Контактный номер телефона", value: "7(347)329-5146" },
            {
                label: "Адрес электронной почты",
                value: "khabibullin.vr@soda.ru",
            },
        ],
    },
    {
        title: "Временные этапы",
        items: [
            {
                label: "Дата и время начала подачи заявок",
                value: "10.06.2022 12:30",
            },
            {
                label: "Дата и время окончания подачи заявок",
                value: "20.06.2022 16:30",
            },
            {
                label: "Дата и время рассмотрения и оценки заявок",
                value: "23.06.2022 16:00",
            },
            {
                label: "Дата и время подведения итогов",
                value: "27.06.2022 16:00",
            },
        ],
    },
];

const TenderCard = () => {
    return (
        <div className={styles.card}>
            {data.map(({ title, items }) => (
                <div className="mt-4">
                    <Card>
                        <Card.Header>{title}</Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap">
                                {items.map(({ label, value }) => (
                                    <table
                                        className="table-responsive table-bordered mt-3"
                                        style={{ marginLeft: "1rem" }}
                                    >
                                        <tbody>
                                            <tr>
                                                <td
                                                    className="text-muted"
                                                    style={{
                                                        padding:
                                                            "0.2rem 0.6rem",
                                                        fontSize: "0.85rem",
                                                    }}
                                                >
                                                    {label}:
                                                </td>
                                                <td
                                                    style={{
                                                        fontWeight: "500",
                                                        padding:
                                                            "0.2rem 0.6rem",
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    {value}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default TenderCard;
