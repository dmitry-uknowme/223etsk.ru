import React from "react";
import SectionCard, { ISectionItem } from "./SectionCard";

interface SectionsProps {
    items: ISectionItem[];
}

const Sections: React.FC<SectionsProps> = ({ items }) => {
    return (
        <div className="sections">
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4">
                        <SectionCard section={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sections;
