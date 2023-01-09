import React from "react";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import Card from "../../renderer/components/ui/Card";
import styles from "./index.module.sass";

const PricelistPage = () => {
    return (
        <MainLayout>
            <div className="pricelist-page">
                <div className="container">
                    <div className="row">
                        <HistoryBar
                            historyData={[
                                { label: "Главная", path: "/", active: true },
                                {
                                    label: "Тарифы",
                                    path: "/tenders",
                                    // active: true,
                                },
                            ]}
                        />
                        <h2 className="text-black">Тарифы</h2>
                        <div className="col-md-6 mt-3">
                            <Card>
                                <Card.Header>Заказчикам</Card.Header>
                                <Card.Body>
                                    <div
                                        className=""
                                        style={{
                                            paddingLeft: "1rem",
                                            paddingRight: "1rem",
                                            height: "410px",
                                        }}
                                    >
                                        <h4>Бесплатные услуги:</h4>
                                        <ul>
                                            <li>
                                                Регистрация на торговой площадке
                                            </li>
                                            <li>Размещение закупок на ЭТП</li>
                                            <li>
                                                Обучение по работе на площадке
                                            </li>
                                            <li>
                                                Юридическая поддержка в рамках
                                                223-ФЗ
                                            </li>
                                            <li>
                                                Настройка рабочего места
                                                специалиста по закупкам
                                            </li>
                                            <li>
                                                Помощь в выборе электронной
                                                подписи для работы на площадке
                                            </li>
                                            <li>Техническая поддержка</li>
                                        </ul>
                                        <p>
                                            При размещении и проведении
                                            неконкурентной закупки Предложение
                                            делать оферты (ПДО) -&nbsp;
                                            <b>6 000 ₽</b>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-6 mt-3">
                            <Card>
                                <Card.Header>Поставщикам</Card.Header>
                                <Card.Body>
                                    <div
                                        className=""
                                        style={{
                                            paddingLeft: "1rem",
                                            paddingRight: "1rem",
                                            // height: "410px",
                                        }}
                                    >
                                        <h4>Бесплатные услуги:</h4>
                                        <ul>
                                            <li>
                                                Аккредитация на торговой
                                                площадке
                                            </li>
                                            <li>Участие в закупках</li>
                                            <li>Техническая поддержка</li>
                                        </ul>
                                        <p>Плата взимается с победителя закупки, в размере комиссионного вознаграждения, установленного Регламентом ЭТП и Тарифом ЭТП  - <b>Плата с победителя закупки</b></p>

                                        <p>
                                            Закупки, начальная максимальная цена
                                            (НМЦ) которых составляет менее 50
                                            000 рублей, включительно -{" "}
                                            <b>Бесплатно</b>
                                        </p>
                                        <p>
                                            Закупки, по которым, Заказчик
                                            установил начальную максимальную
                                            цену (НМЦ) -&nbsp;
                                            <b>
                                                3% от
                                                объявленной суммы торгов
                                            </b>
                                        </p>
                                        <p>
                                            Закупки, по которым Заказчик не
                                            определил начальную максимальную
                                            цену (НМЦ) -&nbsp;
                                            <b>30 000 ₽</b>
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        {/* <div className="col-md-12 mt-5">
                            <Card>
                                <Card.Header
                                    className={styles.pricelist__cardFullHeader}
                                >
                                    Тарифы отдельных заказчиков
                                </Card.Header>
                                <Card.Body>
                                    <div className="row">
                                        <div className="col-md-4">

                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div> */}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PricelistPage;
