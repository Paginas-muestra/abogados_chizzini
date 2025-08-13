import React, { useState } from "react";
import './Box_Service.css';

const Box_Service = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(service?.imgIcon)
  return (
    <div className="box-card-Service">
      <img className="color-icon" src={service?.imgIcon} alt={service?.title} />
      <h2>{service?.title}</h2>
      <ul style={{ display: isOpen ? "block" : "none" }}>
        {service.services.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="arrow-contains" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <i
            className="icon-arrow-down arrow-services"
            style={{ cursor: "pointer" }}
          >
            ▼
          </i>
        ) : (
          <i
            className="icon-arrow-up arrow-services"
            style={{ cursor: "pointer" }}
          >
            ▲
          </i>
        )}
      </div>
    </div>
  );
};

export default Box_Service;
