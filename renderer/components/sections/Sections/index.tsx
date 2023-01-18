import React from "react";
import { Link } from "../../../Link";
import SectionCard, { ISectionItem } from "./SectionCard";

interface SectionsProps {
    items: ISectionItem[];
}

const Sections: React.FC<SectionsProps> = ({ items }) => {
    return (
        <div className="sections">
            <div className="row">
                {items.map((item, id) => (
                    <div className={`col-md-4 ${id !== 0 ? 'mt-sm-4 mt-4 mt-md-0' : ""}`}>
                        <Link href="/tenders">
                            <SectionCard section={item} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sections;
