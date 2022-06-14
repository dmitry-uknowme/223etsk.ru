import React, { useEffect, useState } from "react";
import { Link } from "../../../Link";
import styles from "./index.module.sass";


const HistoryBar = ({ historyData }) => {
    return (
        <div className={`${styles.historyBar} d-md-block d-sm-none`}>
            <div className={styles.historyBar__row}>
                {historyData?.map(({ label, path, active }, id) => (
                    <>
                        {active ? (
                            <Link href={path}>
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
                            <div className="historyBar__divider text-muted">
                                >
                            </div>
                        )}
                    </>
                ))}
              
            </div>
        </div>
    );
};

export default HistoryBar;
