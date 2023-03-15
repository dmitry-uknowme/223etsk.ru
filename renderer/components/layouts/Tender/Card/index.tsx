import Card from "../../../ui/Card";
import React, { useState } from "react";
import styles from "./index.module.sass";
import ProtocolsList from "../ProtocolsList";
import NoticesList from "../NoticesList";
import fetchLotPositions from "../../../../api/fetchLotPositions";
import { useQuery } from "react-query";
import { getLocalizedStatus } from "../../../../../pages/tenders/index.page";
import formatDate from "../../../../utils/formatDate";

interface TenderCardProps {
  tender: any;
}

const TenderCard: React.FC<TenderCardProps> = ({ tender }) => {
  const lot = tender?.lots[0];
  const lotId = lot.id;
  const date_time = lot.date_time;
  const organizer = tender.organizer;
  const customer = tender.customer;
  const protocol = tender.protocols[0];

  const positionsQuery = useQuery(["lotPositions"], async () => {
    const positions = await fetchLotPositions(lotId);
    return positions;
  });

  const lotPositions = positionsQuery?.data;
  // console.log("prrrrrrrr", protocol);
  const [data, setData] = useState([
    {
      title: "Сведения о закупке",
      items: [
        { label: "Наименование", value: tender.name },
        { label: "Статус", value: getLocalizedStatus(tender.status) },
        {
          label: "Номер извещения",
          value: `${
            tender.registry_number ? `№ ${tender.registry_number}` : ""
          }`,
        },
        {
          label: "Секция размещения",
          value: tender.platform_type_localized,
        },
        { label: "Способ проведения", value: tender.type_localized },
        // { label: "Реестровый номер  ЕИС", value: `№${tender.registry_number}` },
      ],
    },
    {
      title: "Сведения об организаторе",
      items: [
        {
          label: "Наименование организатора",
          value: organizer.full_title,
        },
        // {
        //   label: "Юридический адрес",
        //   value: organizer.legal_address.index,
        // },
        // {
        //   label: "Почтовый адрес",
        //   value: organizer.fact_address.index,
        // },
        {
          label: "Контактный номер телефона",
          value: organizer.phone_number,
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
        // {
        //   label: "Юридический адрес",
        //   value: tender.organizer.legal_address.index,
        // },
        // {
        //   label: "Почтовый адрес",
        //   value: tender.organizer.fact_address.index,
        // },
        {
          label: "Контактный номер телефона",
          value: tender.organizer.phone_number,
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
          value: formatDate(tender.start_bid_date),
        },
        // {
        //   label: "Дата и время начала подачи заявок",
        //   value: lot.date_time.start_bids,
        // },
        {
          label: "Дата и время окончания подачи заявок",
          value: formatDate(tender.close_bid_date),
        },
        // {
        //   label: "Дата и время окончания подачи заявок",
        //   value: lot.date_time.close_bids,
        // },
        {
          label: "Дата и время рассмотрения и оценки заявок",
          value: formatDate(tender.review_bid_date),
        },
        // {
        //   label: "Дата и время рассмотрения и оценки заявок",
        //   value: lot.date_time.summing_up_bids || lot.date_time.review_bids,
        // },

        {
          label: "Дата и время подведения итогов",
          value: formatDate(tender.summing_up_date),
        },
        // {
        //   label: "Дата и время подведения итогов",
        //   value: lot.date_time.summing_up_end,
        // },
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
        <NoticesList notices={tender.notices} tender={tender} />
      </div>
      <div className="mt-4">
        <ProtocolsList protocols={tender.protocols} tender={tender} />
      </div>
      <div className="mt-4">
        <Card>
          <Card.Header>Лот №1</Card.Header>
          <Card.Body>
            {/* <div className="d-flex flex-wrap"> */}
            <div
              style={{
                background: "#FF3838",
                width: "96%",
                height: "2rem",
                marginLeft: "2%",
                borderRadius: "1em 1em 0 0",
                display: "flex",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <h4
                style={{
                  fontSize: "0.8rem",
                  marginBottom: "0",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Общие сведения
              </h4>
            </div>
            <table
              className="table-responsive table-bordered"
              style={{ width: "96%", margin: "0 2%" }}
            >
              <tbody>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Наименование
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender.name}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Начальная цена
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender?.price?.amount
                      ? ` ${(tender.price.amount / 100).toFixed(2)} руб.`
                      : "Не предусмотрено"}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время начала подачи заявок
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {formatDate(tender.start_bid_date)}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время окончания подачи заявок
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {formatDate(tender.close_bid_date)}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время рассмотрения и оценки заявок
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {formatDate(tender.summing_bid_date)}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время подведения итогов
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {formatDate(tender.summing_up_date)}
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                background: "#FF3838",
                width: "96%",
                height: "2rem",
                marginLeft: "2%",
                borderRadius: "1em 1em 0 0",
                display: "flex",
                alignItems: "center",
                padding: "1rem",
                marginTop: "1.5rem",
              }}
            >
              <h4
                style={{
                  fontSize: "0.8rem",
                  marginBottom: "0",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Перечень товаров, работ, услуг
              </h4>
            </div>
            <table
              className="table-responsive table-bordered"
              style={{ width: "96%", margin: "0 2%" }}
            >
              <thead>
                <tr>
                  <th className="table-row-key" style={{ width: "50px" }}>
                    №
                  </th>
                  <th className="table-row-key" style={{ width: "50px" }}>
                    Количество, Ед. измерения
                  </th>
                  <th className="table-row-key" style={{ width: "150px" }}>
                    ОКПД 2
                  </th>
                  <th className="table-row-key" style={{ width: "150px" }}>
                    ОКВЭД 2
                  </th>
                  <th className="table-row-key" style={{ width: "150px" }}>
                    Место поставки
                  </th>
                </tr>
              </thead>
              <tbody>
                {lotPositions?.map((position, number) => (
                  <tr>
                    <td className="table-row-value" style={{ width: "50px" }}>
                      {number + 1}
                    </td>
                    <td className="table-row-value" style={{ width: "50px" }}>
                      {position?.qty || position?.unit_name
                        ? `${position.qty}, ${position.unit_name}`
                        : ""}
                    </td>
                    <td className="table-row-value" style={{ width: "150px" }}>
                      {position.okpd_code}. {position.okpd_name}
                    </td>
                    <td className="table-row-value" style={{ width: "150px" }}>
                      {position.okved_code}. {position.okved_name}
                    </td>
                    <td className="table-row-value" style={{ width: "150px" }}>
                      {position.region_name}. {position.region_address}
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* <tbody>
                <tr style={{ width: "100%" }}>
                  <td className="table-row-key">Наименование</td>
                  <td className="table-row-value">{tender.name}</td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Начальная цена
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender.price.amount}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время начала подачи заявок
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender.start_bid_date}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время окончания подачи заявок
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender.close_bid_date}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время рассмотрения и оценки заявок
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender.summing_bid_date}
                  </td>
                </tr>
                <tr style={{ width: "100%" }}>
                  <td
                    className="text-muted"
                    style={{
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.85rem",
                      width: "50%",
                    }}
                  >
                    Дата и время подведения итогов
                  </td>
                  <td
                    style={{
                      fontWeight: "500",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.9rem",
                      width: "50%",
                    }}
                  >
                    {tender.summing_up_date}
                  </td>
                </tr>
              </tbody> */}
            </table>
            {/* </div> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TenderCard;
