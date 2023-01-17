import React from "react";
import ServiceCard, { IServiceItem } from "./ServiceCard";

interface ServicesProps {
    items: IServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ items }) => {
    return (
        <div className="sections">
            <div className="row">
                {items.map((item, id) => (
                    <div className={`col-md-4 ${id !== 0 ? 'mt-sm-4 mt-4' : ""}`}>
                        <ServiceCard service={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
