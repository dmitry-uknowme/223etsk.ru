import React from "react";
import Services from "../Services";
import { IServiceItem } from "../Services/ServiceCard";

const services: IServiceItem[] = [
  {
    title: "Электронная подпись",
    btnText: "Подробнее",
    btnOnClick: () => null,
    // link: "https://elpod.novorostorgi.ru/"
    link: "/elpod-start",
  },
  {
    title: "Обучение по торгам",
    btnText: "Подробнее",
    btnOnClick: () => null,
  },
  {
    title: "Тендерное сопровождение",
    btnText: "Подробнее",
    btnOnClick: () => null,
  },
];

const HomeServices = () => {
  return (
    <div className="home__services">
      <div className="container mt-5">
        <h3>Услуги и сервисы</h3>
        <div className="mt-5">
          <Services items={services} />
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
