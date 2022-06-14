import React from "react";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import Card from "../../renderer/components/ui/Card";
import styles from "./index.module.sass";

const reqData = [
    {
        label: "Полное наименование",
        value: `Общество с ограниченной
                                                        ответственностью
                                                        «Электронная торговая система качества»`,
    },
    {
        label: "Сокращенное наименование",
        value: "ООО «ЭТСК»",
    },
    {
        label: "Юридический адрес",
        value: "450931, г. Москва, ул. Пресненская набережная, д. 4, к. 2",
    },
    {
        label: "Почтовый адрес",
        value: "450931, г. Москва, ул. Пресненская набережная, д. 4, к. 2",
    },
    {
        label: "ИНН/КПП",
        value: "9842198497 / 924190882",
    },
    {
        label: "ОГРН",
        value: "9841294982196",
    },
    {
        label: "Расчётный счет",
        value: "41272818941942189482",
    },
    {
        label: "Корреспондентский счет",
        value: "49128912494910289219",
    },
    {
        label: "БИК банка",
        value: "897421978",
    },
    {
        label: "Банк",
        value: 'АО "ТИНЬКОФФ БАНК"',
    },
    {
        label: "E-mail",
        value: "etsk@gmail.com",
    },
];

const AboutPage = () => {
    return (
        <MainLayout>
            <div className="about-page">
                <div className="container">
                    <div className="row">
                        <HistoryBar
                            historyData={[
                                { label: "Главная", path: "/", active: true },
                                {
                                    label: "О площадке",
                                },
                            ]}
                        />
                        <h2 className="text-black">О площадке</h2>
                        <div className="col-md-10 mt-3">
                            <Card>
                                <Card.Header>Реквизиты</Card.Header>
                                <Card.Body>
                                    <div className="d-flex flex-wrap">
                                        {/* {items.map(({ label, value }) => ( */}
                                        <table
                                            className="table-responsive table-bordered mt-3"
                                            style={{ marginLeft: "1rem" }}
                                        >
                                            <tbody>
                                                {reqData.map(
                                                    ({ label, value }) => (
                                                        <tr>
                                                            <td
                                                                className="text-muted"
                                                                style={{
                                                                    padding:
                                                                        "0.2rem 0.6rem",
                                                                    fontSize:
                                                                        "0.85rem",
                                                                }}
                                                            >
                                                                {label}:
                                                            </td>
                                                            <td
                                                                style={{
                                                                    fontWeight:
                                                                        "500",
                                                                    padding:
                                                                        "0.2rem 0.6rem",
                                                                    fontSize:
                                                                        "0.9rem",
                                                                }}
                                                            >
                                                                {value}
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                        {/* ))} */}
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AboutPage;
