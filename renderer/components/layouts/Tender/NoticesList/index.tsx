import React from "react";
import Card from "../../../ui/Card";

const NoticesList = ({ notices }: any) => {
  return (
    <Card>
      <Card.Header>Извещения</Card.Header>
      <Card.Body>
        <table
          className="table-responsive table-bordered"
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
                  window.location.replace(`/notice/${notice.id}`)
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
                  {notice.title}
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
                  {notice.publish_date_time}
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
