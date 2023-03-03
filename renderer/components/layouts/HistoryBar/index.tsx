import React, { useEffect, useState } from "react";
import { Link } from "../../../Link";
import styles from "./index.module.sass";

interface IHistoryItem {
  label: string;
  path?: string;
  active?: boolean;
}

interface HistoryBarProps {
  historyData: IHistoryItem[];
}

const HistoryBar: React.FC<HistoryBarProps> = ({ historyData }) => {
  return (
    <div className={`${styles.historyBar} d-md-block d-sm-none`}>
      <div className={styles.historyBar__row}>
        {historyData?.map(({ label, path, active, type }, id) => (
          <>
            {type === "link_eis" ? (
              <Link
                href={
                  "https://zakupki.gov.ru/223/purchase/public/purchase/info/common-info.html?regNumber=32312166553"
                }
                key={id}
              >
                <div
                  className={`${styles.historyBar__item} ${
                    active ? "text-secondary" : "text-muted"
                  }`}
                >
                  {label}
                </div>
              </Link>
            ) : active ? (
              <Link href={path} key={id}>
                <div
                  className={`${styles.historyBar__item} ${
                    active ? "text-secondary" : "text-muted"
                  }`}
                >
                  {label}
                </div>
              </Link>
            ) : (
              <div
                className={`${styles.historyBar__item} ${
                  active ? "text-secondary" : "text-muted"
                }`}
              >
                {label}
              </div>
            )}
            {id !== historyData.length - 1 && (
              <div className="historyBar__divider text-muted">{">"}</div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default HistoryBar;
