import React from "react";
import formatDate from "../../../../utils/formatDate";
import Card from "../../../ui/Card";

const NoticesList = ({ notices, tender }: any) => {
  return (
    <Card>
      <Card.Header>Извещения</Card.Header>
      <Card.Body>
        <table
          className="table-responsive table-bordered table-hover"
          style={{ width: "96%", margin: "0 2%" }}
        >
          <thead>
            <tr>
              <td
                className="text-muted"
                style={{
                  padding: "0.2rem 0.6rem",
                  fontSize: "0.85rem",
                  textAlign: "center",
                }}
              >
                Наименование
              </td>
              <td
                className="text-muted"
                style={{
                  padding: "0.2rem 0.6rem",
                  fontSize: "0.85rem",
                  textAlign: "center",
                }}
              >
                № редакции
              </td>
              <td
                className="text-muted"
                style={{
                  padding: "0.2rem 0.6rem",
                  fontSize: "0.85rem",
                  textAlign: "center",
                }}
              >
                Дата публикации
              </td>
            </tr>
          </thead>
          <tbody>
            {notices?.map((notice: any) => (
              <tr
                onClick={() =>
                  // window.history.pushState(
                  //   null,
                  //   "",
                  //   `/tenders/${tender.id}`
                  // )
                  window.location.replace(
                    `/tenders/${tender.id}/notice/${notice.id}`
                  )
                }
              >
                <td
                  style={{
                    fontWeight: "500",
                    padding: "0.2rem 0.6rem",
                    fontSize: "0.8rem",
                    textAlign: "center",
                  }}
                >
                  {notice?.type === "NOTICE_TYPE"
                    ? "Извещение о проведении закупки"
                    : notice?.type === "NOTICE_CANCEL"
                    ? "Извещение об отказе от проведения закупки"
                    : ""}
                  {/* {notice.title} */}
                </td>
                <td
                  style={{
                    fontWeight: "500",
                    padding: "0.2rem 0.6rem",
                    fontSize: "0.8rem",
                    textAlign: "center",
                  }}
                >
                  №{notice.version} (
                  {notice.is_active === false ? "действующая" : "недействующая"}
                  )
                </td>
                <td
                  style={{
                    fontWeight: "500",
                    // padding: "0.2rem 0.6rem",
                    fontSize: "0.8rem",
                    textAlign: "center",
                  }}
                >
                  {formatDate(notice.publish_date_time)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default NoticesList;
