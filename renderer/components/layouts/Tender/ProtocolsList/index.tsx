import React from "react";
import Card from "../../../ui/Card";

const ProtocolsList = ({ protocols }: any) => {
  return (
    <Card>
      <Card.Header>Протоколы</Card.Header>
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
            {protocols?.map((protocol: any) => (
              <tr>
                <td
                  style={{
                    fontWeight: "500",
                    padding: "0.2rem 0.6rem",
                    fontSize: "0.8rem",
                    textAlign: "center",
                  }}
                >
                  {protocol.title}
                </td>
                <td
                  style={{
                    fontWeight: "500",
                    padding: "0.2rem 0.6rem",
                    fontSize: "0.8rem",
                    textAlign: "center",
                  }}
                >
                  №{protocol.version} (
                  {protocol.is_active === false
                    ? "действующая"
                    : "недействующая"}
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
                  {protocol.publish_date_time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card.Body>
    </Card>
  );
};

export default ProtocolsList;
