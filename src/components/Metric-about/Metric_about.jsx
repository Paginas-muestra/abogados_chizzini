import React from "react";
import './Metric_about.css';
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";

const Metric_about = ({ Box_values }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // solo una vez
    threshold: 0.3      // % del elemento visible
  });

  return (
    <div className="box_Metric_about">
      <img src={Box_values.iconAb} alt={Box_values.title} />
      <div>
        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 0 }}>
          {Box_values.title}
        </h3>
        <div ref={ref} style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          <h3 style={{ marginTop: 0 }}>
            + {inView && <CountUp end={Box_values.number} />}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Metric_about;
