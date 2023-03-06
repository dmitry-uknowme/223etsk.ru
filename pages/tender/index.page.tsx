import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchTender from "../../renderer/api/fetchTender";
import HistoryBar from "../../renderer/components/layouts/HistoryBar";
import MainLayout from "../../renderer/components/layouts/MainLayout";
import TenderCard from "../../renderer/components/layouts/Tender/Card";
import TenderNav from "../../renderer/components/layouts/Tender/Nav";
import TendersFilter from "../../renderer/components/sections/TendersFilter";
import Button, { ButtonVariants } from "../../renderer/components/ui/Button";
import { Link } from "../../renderer/Link";
import styles from "./index.module.sass";

interface TenderPageProps {
  tenderId: string;
  serverTender: any;
}

const TenderPage: React.FC<TenderPageProps> = ({ tenderId }) => {
  const query = useQuery(
    "tender",
    async () => {
      const data = await fetchTender(tenderId);
      return {
        tender: data,
      };
    }
    // {
    //   placeholderData: {
    //     items: new Array(10).fill(tenderFixture),
    //     itemsCount: 10,
    //   },
    // }
  );
  //   const tender = useQuery("tender", () => fetchTender(tenderId));

  const tender = query.data?.tender;

  return (
    <MainLayout>
      <div className="container">
        <div className="row">
          {tender && (
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
                  label: `Закупка № ${tender.number}/1 ${
                    tender.registry_number
                      ? `${tender.registry_number} в ЕИС`
                      : ""
                  }`,
                },
              ]}
            />
          )}
          {tender && (
            <>
              <div className="d-flex align-items-center">
                <h2 className="text-black m-0">
                  Закупка №{tender.number}/1{" "}
                  {tender.registry_number ? (
                    <Link
                      href={`https://zakupki.gov.ru/223/purchase/public/purchase/info/common-info.html?regNumber=${tender.registry_number}`}
                      style={{ textDecoration: "underline", color: "#111" }}
                    >
                      {tender?.registry_number}
                    </Link>
                  ) : (
                    ""
                  )}
                </h2>
                <Link
                  href={`https://lk.novorostorgi.ru/procedure/${tender.id}`}
                >
                  <Button
                    label="Подать заявку"
                    variant={ButtonVariants.SECONDARY}
                    className={styles.tender__btn}
                    link={`https://lk.novorostorgi.ru/procedure/${tender.id}`}
                  />
                </Link>
              </div>
              <div className="col-md-9 mt-3">
                <TenderCard tender={tender} />
              </div>
              <div className="col-md-3">
                <TenderNav
                  link={`https://lk.novorostorgi.ru/procedure/${tender.id}`}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TenderPage;
