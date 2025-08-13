import React from "react";
import './About.css'
import '@google/model-viewer';
import Metric_about from "../../components/Metric-about/Metric_about.jsx";
const About = () => {
  const vals = [
    {
      iconAb: 'images/Icons_about/Client.svg',
      title: "Clientes",
      number: 200,
    },
    {
      iconAb: 'images/Icons_about/Work.svg',
      title: "Casos realizados",
      number: 200,
    },
    {
      iconAb: 'images/Icons_about/Ab.svg',
      title: "Abogados",
      number: 20,
    },
  ]
  return (
    <>
        <section id="About-section" className="About-section">
            <div className="Cent-about">
                <div className="izq-ab">
                    <h2>Sobre <span className="blue-color">Nosotros</span></h2>
                    <p>En Estudio Jurídico Contable M&L nos especializamos en brindar asesoramiento legal, contable y gestoría integral tanto a personas como a pequeñas y medianas empresas. Nuestro enfoque se basa en la atención personalizada, la transparencia y el compromiso real con cada caso.</p>
                    <p>Conformado por un equipo interdisciplinario de abogados, contadores y gestores, abordamos cada situación desde una mirada integral, eficiente y práctica. Sabemos que los temas legales y contables pueden resultar complejos, por eso nuestro objetivo es acompañar al cliente de forma clara, accesible y cercana.</p>
                  <div className="metrics">
                    <Metric_about Box_values={vals[0]} />
                    <Metric_about Box_values={vals[1]} />
                    <Metric_about Box_values={vals[2]} />
                  </div>
                </div>
                <div className="der-ab">
                  <div className="parent">
                    <div className="div1"></div>
                    <div className="div2"></div>
                    <div className="div3"></div>
                    <div className="div4"></div>
                  </div>
                </div>
            </div>
        </section>
    </>

  );
};

export default About;