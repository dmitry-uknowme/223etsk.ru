import React from "react";
import ServiceCard, { IServiceItem } from "./ServiceCard";

interface ServicesProps {
    items: IServiceItem[];
}

const Services: React.FC<ServicesProps> = ({ items }) => {
    return (
        <div className="sections">
            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4">
                        <ServiceCard service={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
