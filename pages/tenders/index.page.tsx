import React from "react";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import TenderCard from "../../renderer/components/sections/TenderCard";
import Filter from "../../renderer/components/sections/TendersFilter";
import Search from "../../renderer/components/sections/TendersSearch";

const TendersPage = () => {
    return (
        <MainLayout>
            {/* <div style={{ background: "#f5f5f5" }}> */}
            <div className="container">
                <div className="row">
                    <HistoryBar
                        historyData={[
                            { label: "Главная", path: "/", active: true },
                            {
                                label: "Поиск закупок",
                                path: "/tenders",
                                // active: true,
                            },
                        ]}
                    />
                    <h2 className="text-black">Поиск закупок</h2>
                    <div className="col-md-8">
                        <Search />
                        <div className="mt-5">
                            <TenderCard />
                        </div>
                        <div className="mt-4">
                            <TenderCard />
                        </div>
                        <div className="mt-4">
                            <TenderCard />
                        </div>
                    </div>
                    <div className="col-md-3 offset-md-1 mt-5">
                        <Filter />
                    </div>
                </div>
            </div>
            {/* </div> */}
        </MainLayout>
    );
};

export default TendersPage;
