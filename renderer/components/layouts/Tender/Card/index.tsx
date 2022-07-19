import Card from "../../../ui/Card";
import React, { useState } from "react";
import styles from "./index.module.sass";

interface TenderCardProps {
    tender: any;
}

const TenderCard: React.FC<TenderCardProps> = ({ tender }) => {
    const lot = tender.lots[0];
    const date_time = lot.date_time;
    const organizer = tender.organizer;
    const customer = tender.customer;

    const [data, setData] = useState([
        {
            title: "Сведения о закупке",
            items: [
                { label: "Наименование", value: tender.name },
                { label: "Номер извещения", value: `№${tender.number}` },
                {
                    label: "Секция размещения",
                    value: tender.platform.type.translate,
                },
                { label: "Способ проведения", value: tender.type_translate },
                { label: "Реестровый номер  ЕИС", value: `№${tender.number}` },
            ],
        },
        {
            title: "Сведения об организаторе",
            items: [
                {
                    label: "Наименование организатора",
                    value: organizer.full_title,
                },
                {
                    label: "Юридический адрес",
                    value: organizer.legal_address.index,
                },
                {
                    label: "Почтовый адрес",
                    value: organizer.fact_address.index,
                },
                {
                    label: "Контактный номер телефона",
                    value: organizer.phone,
                },
                {
                    label: "Адрес электронной почты",
                    value: organizer.email,
                },
            ],
        },
        {
            title: "Сведения о заказчике",
            items: [
                {
                    label: "Наименование заказчика",
                    value: tender.organizer.full_title,
                },
                {
                    label: "Юридический адрес",
                    value: tender.organizer.legal_address.index,
                },
                {
                    label: "Почтовый адрес",
                    value: tender.organizer.fact_address.index,
                },
                {
                    label: "Контактный номер телефона",
                    value: tender.organizer.phone,
                },
                {
                    label: "Адрес электронной почты",
                    value: tender.organizer.email,
                },
            ],
        },
        {
            title: "Временные этапы",
            items: [
                {
                    label: "Дата и время начала подачи заявок",
                    value: lot.date_time.start_bids,
                },
                {
                    label: "Дата и время окончания подачи заявок",
                    value: lot.date_time.close_bids,
                },
                {
                    label: "Дата и время рассмотрения и оценки заявок",
                    value:
                        lot.date_time.summing_up_bids ||
                        lot.date_time.review_bids,
                },
                {
                    label: "Дата и время подведения итогов",
                    value: lot.date_time.summing_up_end,
                },
            ],
        },
    ]);
    return (
        <div className={styles.card}>
            {data.map(({ title, items }) => (
                <div className="mt-4">
                    <Card>
                        <Card.Header>{title}</Card.Header>
                        <Card.Body>
                            {/* <div className="d-flex flex-wrap"> */}
                            <table
                                className="table-responsive table-bordered"
                                style={{ width: "96%", margin: "0 2%" }}
                            >
                                <tbody>
                                    {items.map(({ label, value }) => (
                                        <tr style={{ width: "100%" }}>
                                            <td
                                                className="text-muted"
                                                style={{
                                                    padding: "0.2rem 0.6rem",
                                                    fontSize: "0.85rem",
                                                    width: "50%",
                                                }}
                                            >
                                                {label}:
                                            </td>
                                            <td
                                                style={{
                                                    fontWeight: "500",
                                                    padding: "0.2rem 0.6rem",
                                                    fontSize: "0.9rem",
                                                    width: "50%",
                                                }}
                                            >
                                                {value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* </div> */}
                        </Card.Body>
                    </Card>
                </div>
            ))}
            <div className="mt-4">
                <Card>
                    <Card.Header>Извещения</Card.Header>
                    <Card.Body>
                        <table
                            className="table-responsive table-bordered"
                            style={{ width: "96%", margin: "0 2%" }}
                        >
                            <thead>
                                <tr>
                                    <td
                                        className="text-muted"
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Наименование
                                    </td>
                                    <td
                                        className="text-muted"
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        № редакции
                                    </td>
                                    <td
                                        className="text-muted"
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Дата подписания
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            fontWeight: "500",
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.8rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Извещение о проведении закупки иным
                                        способом
                                    </td>
                                    <td
                                        style={{
                                            fontWeight: "500",
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.8rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        №1 (действующая)
                                    </td>
                                    <td
                                        style={{
                                            fontWeight: "500",
                                            // padding: "0.2rem 0.6rem",
                                            fontSize: "0.8rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        24.06.2022 15:47
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </div>
            <div className="mt-4">
                <Card>
                    <Card.Header>Протоколы</Card.Header>
                    <Card.Body>
                        <table
                            className="table-responsive table-bordered"
                            style={{ width: "96%", margin: "0 2%" }}
                        >
                            <thead>
                                <tr>
                                    <td
                                        className="text-muted"
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Наименование
                                    </td>
                                    <td
                                        className="text-muted"
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        № редакции
                                    </td>
                                    <td
                                        className="text-muted"
                                        style={{
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.85rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Дата подписания
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td
                                        style={{
                                            fontWeight: "500",
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.8rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        Извещение о проведении закупки иным
                                        способом
                                    </td>
                                    <td
                                        style={{
                                            fontWeight: "500",
                                            padding: "0.2rem 0.6rem",
                                            fontSize: "0.8rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        №1 (действующая)
                                    </td>
                                    <td
                                        style={{
                                            fontWeight: "500",
                                            // padding: "0.2rem 0.6rem",
                                            fontSize: "0.8rem",
                                            textAlign: "center",
                                        }}
                                    >
                                        24.06.2022 15:47
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default TenderCard;
