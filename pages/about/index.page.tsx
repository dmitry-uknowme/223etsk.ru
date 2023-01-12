import React from "react";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import Card from "../../renderer/components/ui/Card";
import styles from "./index.module.sass";
import { useQuery } from "react-query";
import { DownloadIcon } from '@chakra-ui/icons'
import axios from "axios";

const reqData = [
    {
        label: "Полное наименование",
        value: `Общество с ограниченной
                                                        ответственностью
                                                        «ФОРВАРД»`,
    },
    {
        label: "Сокращенное наименование",
        value: "ООО «ФОРВАРД»",
    },
    {
        label: "Юридический адрес",
        value: "450018, Республика Башкортостан, г. Уфа, ул. Кооперативная, д. 67",
    },
    {
        label: "Почтовый адрес",
        value: "450018, Республика Башкортостан, г. Уфа, ул. Кооперативная, д. 67",
    },
    {
        label: "ИНН/КПП",
        value: "0274901367 / 027401001",
    },
    {
        label: "ОГРН",
        value: "1150280004071",
    },
    {
        label: "Расчётный счет",
        value: "40702810806000002043",
    },
    {
        label: "Корреспондентский счет",
        value: "30101810300000000601",
    },
    {
        label: "БИК банка",
        value: "048073601",
    },
    {
        label: "Банк",
        value: 'Башкирское отделение №8598 ПАО «Сбербанк России»',
    },
    {
        label: "Номер телефона",
        value: "8-800-350-65-79",
    },
    {
        label: "E-mail",
        value: "novorostorgi@yandex.ru",
    },
];

const API_URL = import.meta.env.VITE_API_URL


const AboutPage = () => {
    const { data: documentsData } = useQuery('documents', async () => {
        const { data } = await axios.get(`https://lk.novorostorgi.ru/api/documents`)
        const documents = data.data.documents
        return documents
    })
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
                        <div className="col-md-10 mt-3">
                            <Card>
                                <Card.Header>Документы</Card.Header>
                                <Card.Body>
                                    <div className="d-flex flex-wrap">
                                        <table
                                            className="table-responsive table-bordered mt-3"
                                            style={{ marginLeft: "1rem" }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th className="text-muted"
                                                        style={{
                                                            padding:
                                                                "0.2rem 0.6rem",
                                                            fontSize:
                                                                "0.85rem",
                                                        }}>Наименование файла</th>
                                                    <th className="text-muted"
                                                        style={{
                                                            padding:
                                                                "0.2rem 0.6rem",
                                                            fontSize:
                                                                "0.85rem",
                                                            maxWidth: "10%"
                                                        }}>Ссылка для скачивания</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {documentsData?.map(doc => (
                                                    <tr><td style={{
                                                        fontWeight:
                                                            "500",
                                                        padding:
                                                            "0.2rem 0.6rem",
                                                        fontSize:
                                                            "0.9rem",
                                                    }}>
                                                        {doc.file_name}.<span style={{ fontSize: "0.85rem" }}>
                                                            {doc.file_extension.toLowerCase()}
                                                        </span>
                                                    </td><td style={{
                                                        fontWeight:
                                                            "500",
                                                        padding:
                                                            "0.2rem 0.6rem",
                                                        fontSize:
                                                            "0.9rem",
                                                        textAlign: "center", width: "5%"
                                                    }}><a href={doc.url} target="_blank"><DownloadIcon color={"#3BB1E3"} /></a></td></tr>))}
                                                {/* {reqData.map(
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
                                                )} */}
                                            </tbody>
                                        </table>
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
