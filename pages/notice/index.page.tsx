import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchNotice from "../../renderer/api/fetchNotice";
import fetchTender from "../../renderer/api/fetchTender";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import TenderCard from "../../renderer/components/layouts/Tender/Card";
import TenderNav from "../../renderer/components/layouts/Tender/Nav";
import TendersFilter from "../../renderer/components/sections/TendersFilter";
import Button, { ButtonVariants } from "../../renderer/components/ui/Button";
import Card from "../../renderer/components/ui/Card";
import INotice from "../../types/notice";

interface NoticePageProps {
  noticeId: string;
  serverNotice: any;
}

const NoticePage: React.FC<NoticePageProps> = ({ noticeId }) => {
  const noticeQuery = useQuery("notice", async () => {
    const data = await fetchNotice(noticeId);
    return {
      notice: data,
    };
  });
  const notice = noticeQuery.data?.notice as INotice;
  const procedureId = notice?.procedure_id;

  const procedureQuery = useQuery("procedure", async () => {
    const data = await fetchTender(procedureId);
    return data;
  });

  const procedure = procedureQuery?.data;

  // console.log("proceocoeoce", procedure);

  const lot = procedure?.lots[0];

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          {notice && (
            <HistoryBar
              historyData={[
                {
                  label: "Главная",
                  path: "/",
                  active: true,
                },
                {
                  label: "Поиск закупок",
                  path: "/tenders",
                  active: true,
                },
                {
                  label: "Извещение №1",
                },
              ]}
            />
          )}
          {notice && (
            <>
              <div className="d-flex align-items-center">
                <h2 className="text-black m-0">Извещение № {notice.id}</h2>
              </div>
              <div className="mt-3">
                <Card>
                  <Card.Header>Основные сведения</Card.Header>
                  <Card.Body>
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
                            Секция размещения:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {/* {notice.platform_type_localized} */}
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
                            Номер извещения:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.registry_number}
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
                            Редакция извещения:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            №{notice.version}
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
                            Наименование:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.title}
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
                            Способ проведения:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.procedure_type_localized}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* </div> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="mt-4">
                <Card>
                  <Card.Header>Сведения об организаторе</Card.Header>
                  <Card.Body>
                    {/* <div className="d-flex flex-wrap"> */}
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
                            Наименование:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.organizer_full_name}
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
                            Юридический адрес:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.organizer_legal_address}
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
                            Почтовый адрес:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.organizer_postal_address}
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
                            Контактный номер телефона:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.organizer_phone}
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
                            Адрес электронной почты:
                          </td>
                          <td
                            style={{
                              fontWeight: "500",
                              padding: "0.2rem 0.6rem",
                              fontSize: "0.9rem",
                              width: "50%",
                            }}
                          >
                            {notice.organizer_email}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* </div> */}
                  </Card.Body>
                </Card>
              </div>
              <div className="mt-4">
                <Card>
                  <Card.Header>Лоты</Card.Header>
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
                        Лот №1
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
                            {notice.price.amount}
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
                            {notice.start_bid_date}
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
                            {notice.close_bid_date}
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
                            {notice.summing_bid_date}
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
                            {notice.summing_up_date}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* </div> */}
                  </Card.Body>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default NoticePage;
