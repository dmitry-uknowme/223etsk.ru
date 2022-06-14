import React from "react";
import Sections from "../Sections";
import { ISectionItem } from "../Sections/SectionCard";

const sections: ISectionItem[] = [
    {
        title: "Коммерческие закупки",
        desc: "Закупки для нужд коммерческих предприятий",
        btnText: "Перейти к закупкам",
        // link:"",
        btnOnClick: () => null,
    },
    {
        title: "Закупки по 223-ФЗ",
        desc: "Закупки государственных и муниципальных предприятий",
        btnText: "Перейти к закупкам",
        btnOnClick: () => null,
    },
    {
        title: "ЭТСК-маркет",
        desc: "Электронный магазин для проведения закупок и продаж малого бизнеса",
        btnText: "Перейти в маркет",
        btnOnClick: () => null,
    },
];

const HomeSections = () => {
    return (
        <div className="home__sections">
            <div className="container mt-5">
                <h3>Секции размещения</h3>
                <div className="mt-5">
                    <Sections items={sections} />;
                </div>
            </div>
        </div>
    );
};

export default HomeSections;
