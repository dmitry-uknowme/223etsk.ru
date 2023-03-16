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
import { Link } from "../../renderer/Link";
import INotice from "../../types/notice";
import { DownloadIcon } from "@chakra-ui/icons";
import formatDate from "../../renderer/utils/formatDate";
import getProcedureProtocol from "../../renderer/api/getProcedureProtocol";

interface NoticePageProps {
  noticeId: string;
  serverNotice: any;
}

const NoticePage: React.FC<NoticePageProps> = ({ protocolId, procedureId }) => {
  const protocolQuery = useQuery("protocol", async () => {
    const data = await getProcedureProtocol(protocolId);
    return {
      protocol: data,
      // procedure: procedure,
    };
  });

  const protocol = protocolQuery.data?.protocol;
  // const procedureId = notice?.procedure_id;

  const procedureQuery = useQuery("procedure", async () => {
    const data = await fetchTender(procedureId);
    return data;
  });

  const procedure = procedureQuery.data;
  console.log("ppppppp", protocolQuery?.data?.protocol);
  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          {protocol && (
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
                  label: `Протокол № ${protocol?.number}`,
                  active: true,
                },
              ]}
            />
          )}
          {protocol && (
            // {NOTICE_CANCEL}
            <>
              <div className="d-flex align-items-center">
                <h2 className="text-black m-0">
                  <Link
                    href={`https://zakupki.gov.ru/223/purchase/public/purchase/info/common-info.html?regNumber=${protocol?.registry_number}`}
                    style={{ textDecoration: "underline", color: "#111" }}
                  >
                    {protocol?.name} № {protocol?.number}
                  </Link>{" "}
                  {/* {noticeId} */}
                </h2>
              </div>{" "}
              <div className="mt-4">
                <Card>
                  <Card.Header>Общая информация</Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-wrap">
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
                              Номер протокола:
                            </td>
                            <td
                              style={{
                                fontWeight: "500",
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.9rem",
                                width: "50%",
                              }}
                            >
                              {protocol.number}
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
                              Редакция:
                            </td>
                            <td
                              style={{
                                fontWeight: "500",
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.9rem",
                                width: "50%",
                              }}
                            >
                              № {protocol?.version}
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
                              Дата публикации:
                            </td>
                            <td
                              style={{
                                fontWeight: "500",
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.9rem",
                                width: "50%",
                              }}
                            >
                              {formatDate(protocol?.published_at?.date)}
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
                              Начальная максимальная цена:
                            </td>
                            <td
                              style={{
                                fontWeight: "500",
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.9rem",
                                width: "50%",
                              }}
                            >
                              {procedure?.price?.amount
                                ? ` ${(procedure?.price?.amount / 100).toFixed(
                                    2
                                  )} руб.`
                                : "Не предусмотрено"}
                              {/* {notice.organizer_phone} */}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="mt-4">
                <Card>
                  <Card.Header>Комиссия</Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-wrap">
                      <table
                        className="table-responsive table-bordered mt-3"
                        style={{ marginLeft: "1rem", width: "96%" }}
                      >
                        <thead>
                          <tr>
                            <th
                              className="text-muted"
                              style={{
                                width: "10%",
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              № участника
                            </th>
                            <th
                              className="text-muted"
                              style={{
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              ФИО
                            </th>
                            <th
                              className="text-muted"
                              style={{
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              Роль
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {protocol?.commission?.members?.map((member) => (
                            <tr>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {member?.name}
                              </td>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                }}
                              >
                                №{member?.role}
                                <span style={{ fontSize: "0.85rem" }}></span>
                              </td>
                              {/* <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {formatDate(doc?.signed_at?.date)}
                                <span style={{ fontSize: "0.85rem" }}></span>
                              </td>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                  textAlign: "center",
                                  width: "5%",
                                }}
                              >
                                <a href={doc.url} target="_blank">
                                  <DownloadIcon color={"#3BB1E3"} />
                                </a>
                              </td> */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              <div className="mt-4">
                <Card>
                  <Card.Header>Документы</Card.Header>
                  <Card.Body>
                    <div className="d-flex flex-wrap">
                      <table
                        className="table-responsive table-bordered mt-3"
                        style={{ marginLeft: "1rem", width: "96%" }}
                      >
                        <thead>
                          <tr>
                            <th
                              className="text-muted"
                              style={{
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              Наименование файла
                            </th>
                            <th
                              className="text-muted"
                              style={{
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              Номер редакции
                            </th>
                            <th
                              className="text-muted"
                              style={{
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                              }}
                            >
                              Дата публикации
                            </th>
                            <th
                              className="text-muted"
                              style={{
                                padding: "0.2rem 0.6rem",
                                fontSize: "0.85rem",
                                maxWidth: "10%",
                              }}
                            >
                              Ссылка для скачивания
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {protocol?.documents?.map((doc) => (
                            <tr>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {doc.name}
                                {/* <span style={{ fontSize: "0.85rem" }}>
                                  {doc.file_extension.toLowerCase()}
                                </span> */}
                              </td>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                }}
                              >
                                №{doc.version}
                                <span style={{ fontSize: "0.85rem" }}>
                                  {/* {doc.file_extension.toLowerCase()} */}
                                </span>
                              </td>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {formatDate(doc?.signed_at?.date)}
                                <span style={{ fontSize: "0.85rem" }}>
                                  {/* {doc.file_extension.toLowerCase()} */}
                                </span>
                              </td>
                              <td
                                style={{
                                  fontWeight: "500",
                                  padding: "0.2rem 0.6rem",
                                  fontSize: "0.9rem",
                                  textAlign: "center",
                                  width: "5%",
                                }}
                              >
                                <a href={doc.url} target="_blank">
                                  <DownloadIcon color={"#3BB1E3"} />
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
