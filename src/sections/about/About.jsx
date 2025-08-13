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
                    <p>En Estudio Jurídico Chizzini nos especializamos en brindar asesoramiento legal integral en todas las ramas del derecho, ofreciendo soluciones claras y efectivas tanto a personas como a empresas de cualquier tamaño. Nuestro compromiso se centra en la atención personalizada, la transparencia y el acompañamiento cercano en cada etapa del proceso.</p>
                    <p>Contamos con un equipo de abogados con amplia experiencia, preparados para abordar cada caso desde una perspectiva estratégica, eficiente y orientada a resultados. Ya sea en derecho civil, penal, laboral, comercial, de familia, administrativo o cualquier otra especialidad, trabajamos con la dedicación y el profesionalismo que cada situación merece.</p>
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