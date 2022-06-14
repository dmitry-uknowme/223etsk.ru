import React from "react";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import TenderCard from "../../renderer/components/layouts/Tender/Card";
import TenderNav from "../../renderer/components/layouts/Tender/Nav";
import TendersFilter from "../../renderer/components/sections/TendersFilter";
import Button, { ButtonVariants } from "../../renderer/components/ui/Button";
import styles from "./index.module.sass";

const TenderPage = (props) => {
    console.log("propssss", props);
    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <HistoryBar
                        historyData={[
                            { label: "Главная", path: "/", active: true },
                            {
                                label: "Поиск закупок",
                                path: "/tenders",
                                active: true,
                            },
                            {
                                label: "Закупка № 894721",
                            },
                        ]}
                    />
                    <div className="d-flex align-items-center">
                        <h2 className="text-black m-0">Закупка № 894721</h2>
                        <Button
                            label="Подать заявку"
                            variant={ButtonVariants.SECONDARY}
                            className={styles.tender__btn}
                        />
                    </div>
                    <div className="col-md-9 mt-3">
                        <TenderCard />
                    </div>
                    <div className="col-md-3">
                        <TenderNav />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default TenderPage;
